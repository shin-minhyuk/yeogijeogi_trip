import { useNavigate } from "react-router-dom";
import { Post } from "../types";

type Props = {
  item: Post;
};

export const Card = ({ item }: Props) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/content/${item.contentid}`);
  };

  return (
    <div
      onClick={onClickCard}
      className='flex flex-col gap-2 p-4 bg-white rounded-md shadow-md transition-transform duration-200 hover:scale-105'
    >
      <img
        className='w-full h-[200px] bg-gray2-500'
        src={item.firstimage !== "" ? item.firstimage : undefined}
        alt={item.title}
      />
      <h2 className='text-lg font-semibold'>{item.title}</h2>
      <p className='text-sm'>{item.address}</p>
      <div>
        X: {item.mapx}
        <br />
        Y: {item.mapy}
      </div>
    </div>
  );
};
