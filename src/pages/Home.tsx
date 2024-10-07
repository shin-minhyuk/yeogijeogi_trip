import CommonLayout from "../layouts/CommonLayout";
import Tour from "./Tour";
import Festival from "./Festival";

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
