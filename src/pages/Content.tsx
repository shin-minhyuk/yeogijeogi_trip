import { useSearchParams } from 'react-router-dom';
import WeatherApp from '../components/WeatherApp/WeatherApp';
import CommonLayout from '../layouts/CommonLayout';

export default function Content() {
  const [searchParams] = useSearchParams();
  const mapY = Number(searchParams.get('mapx'));
  const mapX = Number(searchParams.get('mapy'));

  return (
    <CommonLayout>
      <h1>Content</h1>
      <WeatherApp mapX={mapX} mapY={mapY} />
    </CommonLayout>
  );
}
