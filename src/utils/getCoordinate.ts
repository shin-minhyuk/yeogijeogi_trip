// coordinateUtils.ts

// LCC DFS 좌표변환을 위한 기초 자료
const RE = 6371.00877; // 지구 반경(km)
const GRID = 5.0; // 격자 간격(km)
const SLAT1 = 30.0; // 투영 위도1(degree)
const SLAT2 = 60.0; // 투영 위도2(degree)
const OLON = 126.0; // 기준점 경도(degree)
const OLAT = 38.0; // 기준점 위도(degree)
const XO = 43; // 기준점 X좌표(GRID)
const YO = 136; // 기준점 Y좌표(GRID)

// 좌표 변환 결과 타입 정의
export interface CoordResult {
  lat: number;
  lng: number;
  x?: number;
  y?: number;
}

// LCC DFS 좌표변환 함수 (code: "toXY"(위경도 -> 좌표), "toLL"(좌표 -> 위경도))
export function dfs_xy_conv(code: 'toXY' | 'toLL', v1: number, v2: number): CoordResult {
  const DEGRAD = Math.PI / 180.0;
  const RADDEG = 180.0 / Math.PI;

  const re = RE / GRID;
  const slat1 = SLAT1 * DEGRAD;
  const slat2 = SLAT2 * DEGRAD;
  const olon = OLON * DEGRAD;
  const olat = OLAT * DEGRAD;

  // 계산 상수들
  let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);

  let rs: CoordResult = { lat: v1, lng: v2 };

  if (code === 'toXY') {
    // 위경도 -> 좌표 변환
    const ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
    const raCalc = (re * sf) / Math.pow(ra, sn);
    let theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;

    rs.x = Math.floor(raCalc * Math.sin(theta) + XO + 0.5);
    rs.y = Math.floor(ro - raCalc * Math.cos(theta) + YO + 0.5);
  } else {
    // 좌표 -> 위경도 변환
    const xn = v1 - XO;
    const yn = ro - v2 + YO;
    const ra = Math.sqrt(xn * xn + yn * yn);

    let alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    let theta = 0.0;
    if (Math.abs(xn) > 0.0) {
      if (Math.abs(yn) > 0.0) {
        theta = Math.atan2(xn, yn);
      } else {
        theta = Math.PI * 0.5;
        if (xn < 0.0) theta = -theta;
      }
    }

    const alon = theta / sn + olon;
    rs.lat = alat * RADDEG;
    rs.lng = alon * RADDEG;
  }

  return rs;
}
