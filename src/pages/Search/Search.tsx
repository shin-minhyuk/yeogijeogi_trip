import CommonLayout from "../../layouts/CommonLayout";
import { useLocation, useSearchParams } from "react-router-dom";
import { SearchModal } from "../../components/SearchModal";
import { Card } from "../../components/Card";
import { Post } from "../../types";
import { useEffect } from "react";
import { fetchSearchData } from "../../api/fetchSearchData";

const Search = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    if (search) {
      fetchSearchData(search);
    }
  }, [search]);

  const data: Post[] = [
    {
      id: 1,
      title: "제목1",
      content: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
    },
    {
      id: 1,
      title: "제목1",
      content: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
    },
    {
      id: 1,
      title: "제목1",
      content: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
    },
    {
      id: 3,
      title: "제목3",
      content: "내용3",
    },
    {
      id: 1,
      title: "제목1",
      content: "내용1",
    },
    {
      id: 2,
      title: "제목2",
      content: "내용2",
    },
  ];

  if (location.search === "") {
    return (
      <CommonLayout>
        <SearchModal />
      </CommonLayout>
    );
  }

  if (location.search.includes("?q=")) {
    return (
      <CommonLayout>
        <article className='max-w-[1200px] mx-auto max-2xl:max-w-[1200px]'>
          <h1 className='absolute px-6 py-5 text-[30px]'>{`" ${searchParams.get("q")} " 검색 결과: ${
            data.length
          }개`}</h1>
          <div className='grid grid-cols-4 pt-[110px] px-5 gap-4'>
            {data?.map((post: Post) => (
              <Card key={post.id} />
            ))}
          </div>
        </article>
      </CommonLayout>
    );
  }
};

export default Search;
