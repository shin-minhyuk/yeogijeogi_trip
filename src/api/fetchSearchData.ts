import { instance } from "../client/instance";

const { VITE_API_KEY } = import.meta.env;

export const fetchSearchData = async (search: string) => {
  try {
    const res = await instance.get(
      `/${search}?serviceKey=${VITE_API_KEY}&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&keyword=%EA%B0%95%EC%9B%90&contentTypeId=12&arrange=A`
    );

    if (res.status !== 200) {
      throw new Error("서버 통신 중 문제가 발생했습니다.");
    }

    return res;
  } catch (err) {
    console.error(err);
  }
};
