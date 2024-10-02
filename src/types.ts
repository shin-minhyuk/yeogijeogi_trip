import { Params } from "react-router-dom";

export type Post = {
  contentid: number;
  firstimage: string;
  firstimage2: string;
  address: string;
  title: string;
  content: string;
  mapx: number;
  mapy: number;
};

export interface ParamsType extends Params {
  contentId: string;
}
