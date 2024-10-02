import { weatherIconData } from './weatherIconData';

interface IWeatherProps {
  day: string;
  weather: string;
  temp: number;
}

function Weathers({ day, weather, temp }: IWeatherProps) {
  const currWeatherIco = weatherIconData.find((icon) => icon.id === weather)?.src;
  const currWeatherState = weatherIconData.find((icon) => icon.id === weather)?.state;
  const currWeatherBgColor = weatherIconData.find((icon) => icon.id === weather)?.bgColor;

  return (
    <div
      className={`flex flex-col p-6 justify-between items-center w-[200px] h-full rounded-md ${currWeatherBgColor} shadow-md`}
    >
      <div className={'flex flex-col items-center relative'}>
        <p className={'absolute top-0 left-0 text-lg text-gray2-50 font-bold'}>{day}</p>
        <img className={'w-48'} src={currWeatherIco} alt="날씨 이미지" />
        <p className={'text-[42px] text-gray2-50 font-bold'}>{`${temp}°C`}</p>
      </div>

      <p className={'text-gray2-50'}>{currWeatherState}</p>
    </div>
  );
}

export default Weathers;
