import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../atoms/atoms';

export default function SearchBtn() {
  const navigate = useNavigate();
  const isDarkMode = useRecoilValue(themeState);

  const handleSearch = () => {
    navigate('/search');
  };
  return (
    <button onClick={handleSearch}>
      <FaSearch size={24} color={isDarkMode ? '#FAFAFA' : '#212121'} />
    </button>
  );
}
