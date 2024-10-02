import CommonLayout from "../layouts/CommonLayout";
import { useRecoilValue } from "recoil";
import { themeState } from "../atoms/atoms";
import {
  fetchDetailData,
  fetchDetailIntro,
  fetchDetailInfo,
} from "../api/fetchDetailData";
import { useParams } from "react-router-dom";
import { ParamsType } from "../types";

export default function Content() {
  const contentId = useParams<ParamsType>();
  const isDarkMode = useRecoilValue(themeState);
  const [getDetailData] = fetchDetailData(contentId);
  const [getDetailIntro] = fetchDetailIntro(contentId);
  const [getDetailInfo] = fetchDetailInfo(contentId);
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

  return (
    <CommonLayout>
      <section className="mt-32 p-12">
        <div className="grid gap-4 grid-cols-2">
          <h4 className="col-span-2">
            <img
              className="object-cover bg-gray2-400 w-96 h-96 rounded-lg"
              src="data:image/jpeg;base64,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"
              alt=""
              onError={onErrorImg}
            />
          </h4>

          <div
            className={`col-span-2 w-full h-[1px] bg-gray2-300 ${currentStyles.divider}`}
          />
          <div className="grid gap-6 grid-cols-2 col-span-2">
            <div className="col-span-2">
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                제목
              </h6>
              <p className={`font-medium text-lg`}></p>
            </div>
            <div className="col-span-2">
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                상세정보
              </h6>
              <p className="font-medium text-lg">{getDetailInfo?.infotext}</p>
            </div>
            <div className="col-span-2">
              <h6 className="font-normal text-gray2-500 text-base pb-2">
                주소
              </h6>
              <p className="font-medium text-lg"></p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                문의 및 안내
              </h6>
              <p className="font-medium text-lg">
                {getDetailIntro?.sponsor1tel}
              </p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                우편번호
              </h6>
              <p className="font-medium text-lg"></p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                기간
              </h6>
              <p className="font-medium text-lg">
                {formatDateString(getDetailIntro?.eventstartdate ?? "")} ~{" "}
                {formatDateString(getDetailIntro?.eventenddate ?? "")}
              </p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                개최장소
              </h6>
              <p className="font-medium text-lg">
                {getDetailIntro?.eventplace}
              </p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                입장료
              </h6>
              <p className="font-medium text-lg ">
                {getDetailIntro?.usetimefestival}
              </p>
            </div>
            <div>
              <h6 className="font-medium text-gray2-500 text-base pb-2">
                홈페이지
              </h6>
              <a href={""}>
                <p className="font-medium text-lg">{}</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </CommonLayout>
  );
}
