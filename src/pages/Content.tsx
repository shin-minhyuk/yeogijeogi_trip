import { useSearchParams } from "react-router-dom";
import WeatherApp from "../components/WeatherApp/WeatherApp";
import CommonLayout from "../layouts/CommonLayout";
import { useRecoilValue } from "recoil";
import { themeState } from "../atoms/atoms";
import {
  fetchDetailData,
  fetchDetailIntro,
  fetchDetailInfo,
} from "../api/fetchDetailData";

interface openDateInfo {
  name: string | undefined | null;
  data: string | undefined | null;
}

export default function Content() {
  const [searchParams] = useSearchParams();
  const mapY = Number(searchParams.get("mapx"));
  const mapX = Number(searchParams.get("mapy"));
  const title: string | null = searchParams.get("title");
  const contentId: string | null = searchParams.get("content_id");
  const contentTypeId: string | null = searchParams.get("content_type_id");
  const isDarkMode = useRecoilValue(themeState);
  const [getDetailData] = fetchDetailData(contentId, contentTypeId);
  const [getDetailIntro] = fetchDetailIntro(contentId, contentTypeId);
  const [getDetailInfo] = fetchDetailInfo(contentId, contentTypeId);
  let openDateTitle: openDateInfo[] | null = null;
  switch (contentTypeId) {
    case "12":
      openDateTitle = [
        { name: "제목", data: title },
        { name: "상세정보", data: getDetailData?.overview },
        { name: "주소", data: getDetailData?.addr1 },
        { name: "우편번호", data: getDetailData?.zipcode },
        { name: "문의 및 안내", data: getDetailIntro?.infocenter },
        { name: "휴일", data: getDetailIntro?.restdate },
        { name: "가이드", data: getDetailIntro?.expguide },
        { name: "수용인원", data: getDetailIntro?.accomcount },
        { name: "개장시간", data: getDetailIntro?.usetime },
        { name: "주차", data: getDetailIntro?.parking },
        { name: "반려동물입장", data: getDetailIntro?.chkpet },
        { name: "홈페이지", data: getDetailData?.homepage },
      ];
      break;
    case "15":
      openDateTitle = [];
      break;
    default:
      "정보가 없습니다";
  }
  console.log("getDetailData", getDetailData);
  console.log("getDetailIntro", getDetailIntro);
  console.log("getDetailInfo", getDetailInfo);

  const formatDateString = (dateString: string): string => {
    if (dateString.length !== 8) "Invalid date string format";
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    return `${year}.${month}.${day}`;
  };

  const onErrorImg: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    target.src = "";
  };
  // 다크 모드 스타일
  const darkModeStyles = {
    divider: "bg-gray2-700",
  };

  // 라이트 모드 스타일
  const lightModeStyles = {
    divider: "bg-gray2-300",
  };
  const currentStyles = isDarkMode ? darkModeStyles : lightModeStyles;

  console.log("openDateTitle", openDateTitle);
  return (
    <CommonLayout>
      <section className="mt-32 p-12">
        <div className="grid gap-4 grid-cols-2">
          <h4 className="col-span-2">
            <img
              className="object-cover bg-gray2-400 w-96 h-96 rounded-lg"
              src={getDetailData?.firstimage}
              alt=""
              onError={onErrorImg}
            />
          </h4>
          <div
            className={`col-span-2 w-full h-[1px] bg-gray2-300 ${currentStyles.divider}`}
          />
          {openDateTitle?.map((info) => (
            <div key={info.name}>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                {info.name}
              </h6>
              <p className={`font-medium text-lg`}>{info.data}</p>
            </div>
          ))}

          <div className="grid gap-6 grid-cols-2 col-span-2">
            <div className="col-span-2"></div>
          </div>
        </div>
      </section>
      <WeatherApp mapX={mapX} mapY={mapY} />
    </CommonLayout>
  );
}
