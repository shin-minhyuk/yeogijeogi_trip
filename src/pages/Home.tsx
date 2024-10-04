import { useEffect, useState } from "react";
import CommonLayout from "../layouts/CommonLayout";
import { Post } from "../types";
import { Card } from "../components/Card";
import Tour from "./Tour";
import Festival from "./Festival";
const { VITE_ENCODING_KEY } = import.meta.env;

export default function Home() {
  return (
    <CommonLayout>
      <p>관광지</p>
      <Tour />
      <p>축제</p>
      <Festival />
    </CommonLayout>
  );
}
