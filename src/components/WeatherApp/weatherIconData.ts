import sunnyIco from './weather_icons/day.svg';
import cloudyIco from './weather_icons/cloudy-day-3.svg';
import rainyIco from './weather_icons/rainy-3.svg';
import snowyIco from './weather_icons/snowy-6.svg';

export const weatherIconData = [
  {
    id: 'sunny',
    state: '맑음',
    src: sunnyIco,
    bgColor: 'bg-gradient-to-b from-cyan-500 to-blue-500',
  },
  {
    id: 'cloudy',
    state: '흐림',
    src: cloudyIco,
    bgColor: 'bg-gradient-to-b from-slate-500 to-slate-800',
  },
  {
    id: 'rainy',
    state: '비',
    src: rainyIco,
    bgColor: 'bg-gradient-to-b from-slate-900 to-slate-700',
  },
  {
    id: 'snowy',
    state: '눈',
    src: snowyIco,
    bgColor: 'bg-gradient-to-b from-neutral-300 to-stone-400',
  },
];
