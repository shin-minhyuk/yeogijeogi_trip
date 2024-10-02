import { useState } from 'react';
import { mapWeatherToIconState } from '../../utils/weatherApi';
import { weatherIconData } from './weatherIconData';
import { HiChevronDown } from 'react-icons/hi2';
import { HiChevronUp } from 'react-icons/hi2';

interface IWeatherProps {
  day: string;
  weather: string;
  temp: string | undefined;
}

function Weathers({ day, weather, temp }: IWeatherProps) {
  const [isOpen, setIsOpen] = useState(true);
  // API로부터 받은 날씨 상태를 아이콘 데이터에 맞게 변환
  const mappedWeather = mapWeatherToIconState(weather);
  const handleCloseApp = () => {
    setIsOpen((prev) => !prev);
  };

  // weatherIconData에서 아이콘, 상태, 배경색을 추출
  const currWeather = weatherIconData.find((icon) => icon.state === mappedWeather);
  const currWeatherIco = currWeather?.src;
  const currWeatherState = currWeather?.state;
  const currWeatherBgColor = currWeather?.bgColor;

  return (
    <div className={`fixed bottom-2 right-2 w-[200px] ${isOpen ? 'h-[287px]' : 'h-[24px]'}`}>
      <button className="absolute top-2 right-2" onClick={handleCloseApp}>
        {isOpen ? <HiChevronDown size={24} color={'#FAFAFA'} /> : <HiChevronUp size={24} color={'#FAFAFA'} />}
      </button>
      <div className={`flex flex-col p-6 justify-between items-center rounded-md ${currWeatherBgColor} shadow-md`}>
        <div className={'flex flex-col items-center relative'}>
          <p className={'absolute top-0 left-0 text-lg text-gray2-50 font-bold'}>{day}</p>
          <img className={'w-48'} src={currWeatherIco} alt="날씨 이미지" />
          <p className={'text-[42px] text-gray2-50 font-bold'}>{`${temp}°C`}</p>
        </div>

        <p className={'text-gray2-50'}>{currWeatherState}</p>
      </div>
    </div>
  );
}

export default Weathers;
