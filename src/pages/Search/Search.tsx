import CommonLayout from "../../layouts/CommonLayout";
import { useSearchParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Post } from "../../types";
import { useEffect, useState } from "react";

const { VITE_ENCODING_KEY } = import.meta.env;

const Search = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q");
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=${VITE_ENCODING_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${search}&contentTypeId=12`
        );

        if (!res.ok) {
          throw new Error("서버 통신 중 문제가 발생했습니다.");
        }

        const result = await res.json();
        const { item } = result.response.body.items;
        setData(item);
        console.log(item);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [search]);

  return (
    <CommonLayout>
      <article className="max-w-[1200px] mx-auto max-2xl:max-w-[1200px]">
        <h1 className="absolute px-6 py-5 text-[30px]">{`" ${searchParams.get(
          "q"
        )} " 검색 결과: ${data?.length}개`}</h1>
        <div className="grid grid-cols-4 pt-[110px] px-5 gap-4">
          {data?.map((item: Post) => (
            <Card key={item.contentid} item={item} />
          ))}
        </div>
      </article>
    </CommonLayout>
  );
};

export default Search;
