import { FormEventHandler, MouseEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const SearchModal = () => {
  const navigate = useNavigate();

  // 검색 폼 제출 이벤트 핸들러
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (e.currentTarget.search.value.trim() !== "") {
      navigate(`/search?q=${e.currentTarget.search.value}`);
    }
  };

  // 모달 창 제외 클릭 시 검색 모달 닫기
  const onClickModalBackground = (e: MouseEvent<HTMLDivElement>) => {
    // e.target: 이벤트 발생 요소, e.currentTarget: 이벤트 핸들러가 등록된 요소
    if (e.target === e.currentTarget) {
      navigate("/");
    }
  };

  return (
    <div onClick={onClickModalBackground} className='fixed top-0 left-0 right-0 bottom-0 bg-gray2-700 opacity-80'>
      <form
        onSubmit={onSubmit}
        className='flex mx-auto my-[90px] px-4 py-3 max-w-[700px] z-[1] bg-gray-50 gap-1 max-md:w-[90%]'
      >
        <button type='submit'>
          <FaSearch />
        </button>
        <input className='p-1 w-full' name='search' type='search' />
      </form>
    </div>
  );
};
