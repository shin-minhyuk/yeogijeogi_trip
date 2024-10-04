import { useEffect, useState } from "react";
import CommonLayout from "../layouts/CommonLayout";
import { Post } from "../types";
import { Card } from "../components/Card";
const { VITE_ENCODING_KEY } = import.meta.env;

export default function Tour() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://apis.data.go.kr/B551011/KorService1/areaBasedSyncList1?serviceKey=${VITE_ENCODING_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentTypeId=12`
        );

        if (!res.ok) {
          throw new Error("서버 통신 중 문제가 발생했습니다.");
        }

        const result = await res.json();
        const { item } = result.response.body.items;
        setData(item);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <CommonLayout>
      <article className="max-w-[1200px] mx-auto max-2xl:max-w-[1200px]">
        <h1 className="absolute px-6 py-5 text-[30px]"></h1>
        <div className="grid grid-cols-4 pt-[110px] px-5 gap-4">
          {data?.map((item: Post) => (
            <Card key={item.contentid} item={item} />
          ))}
        </div>
      </article>
    </CommonLayout>
  );
}
