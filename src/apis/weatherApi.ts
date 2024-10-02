export const API_KEY = import.meta.env.VITE_API_KEY;
export const BASE_URL = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';

export const getBaseDate = (today: Date): string => {
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const baseTimes = [2, 5, 8, 11, 14, 17, 20, 23];

  let baseTime = baseTimes.reduce((prev, curr) => {
    if (hours > curr || (hours === curr && minutes >= 10)) {
      return curr;
    }
    return prev;
  }, 2);

  return `${String(baseTime).padStart(2, '0')}00`;
};

export const getBaseTime = (today: Date): string => {
  const current = new Date(today);
  const baseTime = getBaseTime(today);

  if (parseInt(baseTime) < 200) {
    current.setDate(current.getDate() - 1);
  }

  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, '0');
  const date = String(current.getDate()).padStart(2, '0');

  return `${year}${month}${date}`;
};

export const getPageNo = (today: Date): number => {
  const current = new Date(today);
  const baseTime = getBaseTime(today);
  const baseDateTime = new Date(current.getTime());
  const baseHours = parseInt(baseTime.slice(0, 2));

  baseDateTime.setHours(baseHours);
  baseDateTime.setMinutes(10);

  const diffTime = (current.getTime() - baseDateTime.getTime()) / (1000 * 60);

  if (diffTime < 50) return 1;
  else if (diffTime < 110) return 2;
  else if (diffTime < 170) return 3;
  else return 4;
};
