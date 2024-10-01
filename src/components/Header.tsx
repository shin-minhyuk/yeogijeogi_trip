import { Link } from 'react-router-dom';
import SearchBtn from './buttons/SearchBtn';
import { useRecoilValue } from 'recoil';
import { themeState } from '../atoms/atoms';
import ToggleThemeBtn from './buttons/ToggleThemeBtn';

interface NavItem {
  title: string;
  path: string;
}

const navItems: NavItem[] = [
  { title: '메인화면', path: '/' },
  { title: '관광지', path: '/content' },
  { title: '축제/공연/행사', path: '/festival' },
];

export default function Header() {
  const isDarkMode = useRecoilValue(themeState);

  // 다크 모드 스타일
  const darkModeStyles = {
    header: 'bg-gray2-900',
    div: 'border-b-gray2-800',
    h1: 'text-gray-50',
    ul: 'text-gray2-50',
    li: 'hover:bg-gray2-800',
  };

  // 라이트 모드 스타일
  const lightModeStyles = {
    header: 'bg-gray2-50',
    div: 'border-b-gray2-50',
    h1: 'text-gray-800',
    ul: 'text-gray2-800',
    li: 'hover:bg-gray2-100',
  };

  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  return (
    <header className={`fixed top-0 left-0 w-full ${currentStyles.header}`}>
      <div className={`flex h-[80px] justify-between items-center px-[5%] border-b ${currentStyles.div}`}>
        <h1 className={`text-2xl font-[700] hover:font-extrabold hover:text-[26px] ${currentStyles.h1}`}>
          <Link to={'/'}>여기저기</Link>
        </h1>
        <div className="flex gap-4">
          <SearchBtn />
          <ToggleThemeBtn />
        </div>
      </div>
      <nav>
        <ul className={`h-[60px] flex justify-center items-center font-[700] shadow-md ${currentStyles.ul}`}>
          {navItems.map((item) => (
            <li key={item.title} className={`w-[140px] h-full ${currentStyles.li}`}>
              <Link className='flex w-full h-full justify-center items-center' to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
