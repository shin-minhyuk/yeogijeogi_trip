import { useEffect, useState } from "react";
import { getData } from ".";
const VITE_ENCODING_KEY = import.meta.env.VITE_ENCODING_KEY;

interface getDetailCommon1DataItem {
  overview?: "string";
  contentid?: "string";
  sigungucode?: "string";
  cat1?: "string";
  cat2?: "string";
  cat3?: "string";
  addr1?: "string";
  addr2?: "string";
  zipcode?: "string";
  mapx?: "string";
  mapy?: "string";
  mlevel?: "string";
  cpyrhtDivCd?: "string";
  contenttypeid?: "string";
  booktour?: "string";
  createdtime?: "string";
  homepage?: "string";
  modifiedtime?: "string";
  tel?: "string";
  telname?: "string";
  title?: "string";
  firstimage?: "string";
  firstimage2?: "string";
  areacode?: "string";
}
interface getDetailIntroItem {
  chkcreditcardculture?: "string";
  scaleleports?: "string";
  usefeeleports?: "string";
  discountinfofestival?: "string";
  chkcreditcardfood?: "string";
  eventenddate?: "string";
  playtime?: "string";
  chkbabycarriageculture?: "string";
  roomcount?: "string";
  reservationlodging?: "string";
  reservationurl?: "string";
  roomtype?: "string";
  scalelodging?: "string";
  subfacility?: "string";
  barbecue?: "string";
  beauty?: "string";
  beverage?: "string";
  bicycle?: "string";
  campfire?: "string";
  fitness?: "string";
  placeinfo?: "string";
  parkinglodging?: "string";
  pickup?: "string";
  publicbath?: "string";
  opendate?: "string";
  parking?: "string";
  restdate?: "string";
  usetimeleports?: "string";
  foodplace?: "string";
  goodstay?: "string";
  hanok?: "string";
  infocenterlodging?: "string";
  eventhomepage?: "string";
  eventplace?: "string";
  parkingleports?: "string";
  reservation?: "string";
  restdateleports?: "string";
  eventstartdate?: "string";
  festivalgrade?: "string";
  karaoke?: "string";
  discountinfofood?: "string";
  firstmenu?: "string";
  infocenterfood?: "string";
  kidsfacility?: "string";
  opendatefood?: "string";
  opentimefood?: "string";
  packing?: "string";
  parkingfood?: "string";
  reservationfood?: "string";
  restdatefood?: "string";
  scalefood?: "string";
  seat?: "string";
  smoking?: "string";
  treatmenu?: "string";
  lcnsno?: "string";
  contentid?: "string";
  contenttypeid?: "string";
  accomcount?: "string";
  chkbabycarriage?: "string";
  chkcreditcard?: "string";
  chkpet?: "string";
  expagerange?: "string";
  expguide?: "string";
  heritage1?: "string";
  heritage2?: "string";
  heritage3?: "string";
  infocenter?: "string";
  taketime?: "string";
  theme?: "string";
  accomcountleports?: "string";
  chkbabycarriageleports?: "string";
  chkcreditcardleports?: "string";
  chkpetleports?: "string";
  expagerangeleports?: "string";
  infocenterleports?: "string";
  openperiod?: "string";
  parkingfeeleports?: "string";
  program?: "string";
  spendtimefestival?: "string";
  sponsor1?: "string";
  sponsor1tel?: "string";
  chkpetculture?: "string";
  discountinfo?: "string";
  infocenterculture?: "string";
  parkingculture?: "string";
  parkingfee?: "string";
  restdateculture?: "string";
  usefee?: "string";
  usetimeculture?: "string";
  scale?: "string";
  spendtime?: "string";
  agelimit?: "string";
  bookingplace?: "string";
  useseason?: "string";
  usetime?: "string";
  accomcountculture?: "string";
  sponsor2?: "string";
  sponsor2tel?: "string";
  subevent?: "string";
  usetimefestival?: "string";
  distance?: "string";
  infocentertourcourse?: "string";
  schedule?: "string";
  publicpc?: "string";
  sauna?: "string";
  seminar?: "string";
  sports?: "string";
  refundregulation?: "string";
  chkbabycarriageshopping?: "string";
  chkcreditcardshopping?: "string";
  chkpetshopping?: "string";
  culturecenter?: "string";
  fairday?: "string";
  infocentershopping?: "string";
  opendateshopping?: "string";
  opentime?: "string";
  parkingshopping?: "string";
  restdateshopping?: "string";
  restroom?: "string";
  saleitem?: "string";
  saleitemcost?: "string";
  scaleshopping?: "string";
  shopguide?: "string";
  checkintime?: "string";
  checkouttime?: "string";
  chkcooking?: "string";
  accomcountlodging?: "string";
  benikia?: "string";
}
interface getDeatilInfoItem {
  roomimg4?: "string";
  roomtoiletries?: "string";
  roomsofa?: "string";
  roomcook?: "string";
  roomtable?: "string";
  roomimg5alt?: "string";
  contentid?: "string";
  contenttypeid?: "string";
  fldgubun?: "string";
  infoname?: "string";
  infotext?: "string";
  serialnum?: "string";
  subcontentid?: "string";
  subdetailalt?: "string";
  subdetailimg?: "string";
  subdetailoverview?: "string";
  subname?: "string";
  subnum?: "string";
  roomcode?: "string";
  roomtitle?: "string";
  roomsize1?: "string";
  roomcount?: "string";
  roombasecount?: "string";
  roommaxcount?: "string";
  roomoffseasonminfee1?: "string";
  roomoffseasonminfee2?: "string";
  roompeakseasonminfee1?: "string";
  roompeakseasonminfee2?: "string";
  roomintro?: "string";
  roombathfacility?: "string";
  roombath?: "string";
  roomhometheater?: "string";
  roomaircondition?: "string";
  roomtv?: "string";
  roompc?: "string";
  roomcable?: "string";
  roominternet?: "string";
  roomrefrigerator?: "string";
  roomimg5?: "string";
  roomimg3?: "string";
  roomimg4alt?: "string";
  roomimg3alt?: "string";
  roomhairdryer?: "string";
  roomsize2?: "string";
  roomimg2alt?: "string";
  roomimg1?: "string";
  roomimg1alt?: "string";
  roomimg2?: "string";
  cpyrhtDivCd1?: "string";
  cpyrhtDivCd2?: "string";
  cpyrhtDivCd3?: "string";
  cpyrhtDivCd4?: "string";
  cpyrhtDivCd5?: "string";
}
interface TourismItem {
  item: getDetailCommon1DataItem[] | getDetailIntroItem[] | getDeatilInfoItem[];
}
interface TourismBody {
  items: TourismItem;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
interface TourismResponse {
  header: {
    resultCode: string;
    resultMsg: string;
  };
  body: TourismBody;
}
interface TourismAxios {
  response?: TourismResponse | undefined;
}

export function fetchDetailData(
  contentId: string | null,
  contentTypeId: string | null
) {
  const [value, setValue] = useState<getDetailCommon1DataItem | null>(null);
  const API_URL = `/detailCommon1?MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=${contentTypeId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=${VITE_ENCODING_KEY}`;

  useEffect(() => {
    const getDetailCommon = async () => {
      try {
        const axiosData: TourismAxios | undefined = await getData<TourismAxios>(
          API_URL
        );
        const axiosResponse: TourismResponse | undefined = axiosData?.response;
        console.log(axiosResponse);
        if (axiosResponse) {
          const data = axiosResponse.body.items.item[0];
          setValue(data);
        } else {
          console.error("No data returned");
        }
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    };
    getDetailCommon();
  }, [contentId]);

  return [value];
}

export function fetchDetailIntro(
  contentId: string | null,
  contentTypeId: string | null
) {
  const [value, setValue] = useState<getDetailIntroItem | null>(null);
  const API_URL = `/detailIntro1?MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&contentTypeId=${contentTypeId}&serviceKey=${VITE_ENCODING_KEY}&_type=json`;
  useEffect(() => {
    const getDetailIntro = async () => {
      try {
        const axiosData: TourismAxios | undefined = await getData<TourismAxios>(
          API_URL
        );
        const axiosResponse: TourismResponse | undefined = axiosData?.response;
        if (axiosResponse) {
          const data = axiosResponse.body.items.item[0];
          setValue(data);
        } else {
          console.error("No data returned");
        }
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    };
    getDetailIntro();
  }, [contentId]);

  return [value];
}

export function fetchDetailInfo(
  contentId: string | null,
  contentTypeId: string | null
) {
  const [value, setValue] = useState<getDeatilInfoItem | null>(null);
  const API_URL = `/detailInfo1?MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&contentTypeId=${contentTypeId}&serviceKey=${VITE_ENCODING_KEY}&_type=json`;

  useEffect(() => {
    const getDetailInfo = async () => {
      try {
        const axiosData: TourismAxios | undefined = await getData<TourismAxios>(
          API_URL
        );
        const axiosResponse: TourismResponse | undefined = axiosData?.response;
        if (axiosResponse) {
          const data = axiosResponse.body.items.item[0];
          setValue(data);
        } else {
          console.error("No data returned");
        }
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    };
    getDetailInfo();
  }, [contentId]);

  return [value];
}
