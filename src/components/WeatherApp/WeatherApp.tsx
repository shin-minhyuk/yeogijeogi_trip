// import Weathers from './Weathers';
import { themeState } from '../../atoms/atoms';
import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL, getBaseDate, getBaseTime, getPageNo } from '../../apis/weatherApi';

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

export default function WeatherApp() {
  const isDarkMode = useRecoilValue(themeState);
  const [today, setToday] = useState(new Date());
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const baseDate = getBaseDate(today);
      const baseTime = getBaseTime(today);
      const pageNo = getPageNo(today);

      const response = await fetch(
        `${BASE_URL}/getVilageFcst?serviceKey=${API_KEY}&pageNo=${pageNo}&numOfRows=12&dataType=JSON&base_date=${baseDate}&base_time=${baseTime}&nx=55&ny=127`
      );
      const data = await response.json();
      console.log(data);
      console.log('baseDate : ', baseDate);
      console.log('baseTime: ', baseTime);
      console.log('pageNo: ', pageNo);
      setWeatherData(data.response.body.items.item);
    };

    fetchWeatherData();
  }, []);

  // const getFutureDate = (days: number) => {
  //   const future = new Date();
  //   future.setDate(date.getDate() + days);
  //   return `${future.getMonth() + 1}월 ${future.getDate()}일`;
  // };

  // const weatherDataWithFutureDates = [
  //   { id: 1, day: '오늘', weather: 'sunny', temperature: 25 },
  //   { id: 2, day: '내일', weather: 'cloudy', temperature: 26 },
  //   { id: 3, day: getFutureDate(2), weather: 'rainy', temperature: 27 },
  //   { id: 4, day: getFutureDate(3), weather: 'snowy', temperature: 100 },
  //   { id: 5, day: getFutureDate(4), weather: 'sunny', temperature: 10 },
  // ];

  return (
    <section
      className={`flex flex-col justify-between items-center w-full h-[400px] px-8 py-8 gap-6 ${
        isDarkMode ? 'bg-gray2-900' : 'bg-gray2-200'
      }`}
    >
      <h1 className={`text-2xl font-bold`}>기상정보</h1>
      {/* <article className={`grid grid-cols-5 w-[1050px] h-full rounded-md gap-2`}>
        {weatherDataWithFutureDates.map((data) => (
          <Weathers key={data.id} day={data.day} weather={data.weather} temp={data.temperature} />
        ))}
      </article> */}
    </section>
  );
}
