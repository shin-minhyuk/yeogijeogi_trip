export const VITE_ENCODING_KEY = import.meta.env.VITE_ENCODING_KEY;
export const BASE_URL =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0";

// BaseTime 계산 함수
export const getBaseTime = (today: Date): string => {
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const baseTimes = [2, 5, 8, 11, 14, 17, 20, 23];

  // 가장 최근에 발표된 base_time 찾기
  let baseTime = baseTimes.reduce((prev, curr) => {
    if (hours > curr || (hours === curr && minutes >= 10)) {
      return curr;
    }
    return prev;
  }, 2);

  return `${String(baseTime).padStart(2, "0")}00`;
};

// BaseDate 계산 함수
export const getBaseDate = (today: Date): string => {
  const current = new Date(today);
  const baseTime = getBaseTime(today);

  // 만약 baseTime이 '0200' 이전이라면 전날을 기준으로 설정
  if (parseInt(baseTime) < 200) {
    current.setDate(current.getDate() - 1); // 전날로 설정
  }

  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const date = String(current.getDate()).padStart(2, "0");

  return `${year}${month}${date}`; // YYYYMMDD 형식으로 반환
};

// Page 번호 계산 함수
export const getPageNo = (today: Date): number => {
  const current = new Date(today);
  const baseTime = getBaseTime(today);
  const baseDateTime = new Date(current.getTime());
  const baseHours = parseInt(baseTime.slice(0, 2));

  baseDateTime.setHours(baseHours);
  baseDateTime.setMinutes(10);

  const diffTime = (current.getTime() - baseDateTime.getTime()) / (1000 * 60); // 차이를 분 단위로 계산

  if (diffTime < 50) return 1; // 50분 이하이면 페이지 1
  else if (diffTime < 110) return 2; // 110분 이하이면 페이지 2
  else if (diffTime < 170) return 3; // 170분 이하이면 페이지 3
  else return 4; // 그 외의 경우 페이지 4
};

// 날씨 상태를 아이콘 상태로 매핑하는 함수
export const mapWeatherToIconState = (weather: string) => {
  if (weather.includes("맑음")) return "맑음";
  if (weather.includes("흐림") || weather.includes("구름")) return "흐림";
  if (weather.includes("비")) return "비";
  if (weather.includes("눈")) return "눈";

  // 기본값
  return "맑음";
};
