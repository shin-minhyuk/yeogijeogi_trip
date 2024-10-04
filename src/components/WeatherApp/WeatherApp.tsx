import { useEffect, useState } from "react";
import {
  VITE_ENCODING_KEY,
  BASE_URL,
  getBaseDate,
  getBaseTime,
  getPageNo,
} from "../../utils/weatherApi";
import Weathers from "./Weathers";
import { CoordResult, dfs_xy_conv } from "../../utils/getCoordinate";
import WeatherSkeleton from "./WeatherSkeleton";
import { useLocation } from "react-router-dom";

interface IWeatherData {
  baseDate: string;
  baseTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx?: number;
  ny?: number;
}

interface ILocationDataProps {
  contentId?: string;
  mapX: number; // 경도
  mapY: number; // 위도
}

export default function WeatherApp({ mapX, mapY }: ILocationDataProps) {
  const [today, setToday] = useState(new Date());
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [loading, setLoading] = useState(true);
  const { search } = useLocation();

  // 위도/경도를 격자 좌표로 변환
  useEffect(() => {
    const result: CoordResult = dfs_xy_conv("toXY", mapX, mapY); // mapY, mapX로 변환
    setCoordinates({ x: result.x ?? 0, y: result.y ?? 0 }); // 변환된 격자 좌표 저장
  }, [mapX, mapY]);

  // 날씨 데이터를 가져오는 함수
  const fetchWeatherData = async () => {
    if (coordinates.x && coordinates.y) {
      const baseDate = getBaseDate(today);
      const baseTime = getBaseTime(today);
      const pageNo = getPageNo(today);

      setLoading(true);

      const response = await fetch(
        `${BASE_URL}/getVilageFcst?serviceKey=${VITE_ENCODING_KEY}&pageNo=${pageNo}&numOfRows=12&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=${coordinates.x}&ny=${coordinates.y}`
      );

      if (!response.ok) {
        throw new Error("네트워크 응답에 문제가 있습니다.");
      }

      const data = await response.json();
      setWeatherData(data.response.body.items.item);
      setLoading(false);
    }
  };

  // 날씨 정보 필터링 함수
  const filterWeatherInfo = (): {
    weather: string;
    temperature: string | undefined;
  } => {
    const filteredSkyState = weatherData?.find(
      (data) => data.category === "SKY"
    );
    const skyState = filteredSkyState?.fcstValue;

    const filteredRainSnowState = weatherData?.find(
      (data) => data.category === "PTY"
    );
    const rainSnowState = filteredRainSnowState?.fcstValue;

    const filteredTempState = weatherData?.find(
      (data) => data.category === "TMP"
    );
    const tempState = filteredTempState?.fcstValue;

    let weather = "정보 없음"; // 기본값

    // 강수 형태가 있는 경우 우선 처리
    if (rainSnowState === "1") weather = "비";
    else if (rainSnowState === "2") weather = "비/눈";
    else if (rainSnowState === "3") weather = "눈";
    else if (rainSnowState === "4") weather = "소나기";
    else if (rainSnowState === "5") weather = "빗방울";
    else if (rainSnowState === "6") weather = "빗방울/눈날림";
    else if (rainSnowState === "7") weather = "눈날림";
    else {
      // 강수 형태가 없는 경우 하늘 상태 처리
      if (skyState === "1") weather = "맑음";
      else if (skyState === "3" || skyState === "4") weather = "흐림";
    }

    return { weather, temperature: tempState };
  };

  // 데이터 요청 주기 동기화 (10분마다 갱신)
  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(() => {
      setToday(new Date()); // 오늘 날짜 갱신
      fetchWeatherData();
    }, 600000); // 10분마다 데이터 갱신

    return () => clearInterval(interval);
  }, [coordinates]);

  const weatherDataObj =
    weatherData.length > 0
      ? { id: 1, day: "오늘", ...filterWeatherInfo() }
      : null;

  if (!search) return;

  return (
    <>
      {loading ? (
        <WeatherSkeleton />
      ) : weatherDataObj ? (
        <Weathers
          key={weatherDataObj.id}
          day={weatherDataObj.day}
          weather={weatherDataObj.weather}
          temp={weatherDataObj.temperature}
        />
      ) : (
        <div className="fixed bottom-2 right-2">
          날씨 정보를 가져오지 못했습니다.
        </div>
      )}
    </>
  );
}
