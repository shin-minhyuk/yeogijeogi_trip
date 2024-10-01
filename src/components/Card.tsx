export const Card = () => {
  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-md shadow-md'>
      <img className='w-full h-[200px] bg-gray2-500' src='' />
      <h2 className='text-lg font-semibold'>제목</h2>
      <p className='text-sm'>내용</p>
    </div>
  );
};
