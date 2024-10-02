function WeatherSkeleton() {
  return (
    <div className={'fixed bottom-2 right-2'}>
      <div
        className={`p-3 flex flex-col justify-center items-center w-[200px] h-[287px] rounded-md bg-gray-100 shadow-md animate-pulse`}
      >
        <div className={'w-[152px] h-[152px] mb-4 bg-gray-200 rounded-xl animate-pulse'}></div>
        <div className={'w-[152px] h-[63px] mb-1 bg-gray-200 rounded-xl animate-pulse'}></div>
        <div className={'w-[152px] h-[13px] bg-gray-200 rounded-xl animate-pulse'}></div>
      </div>
    </div>
  );
}

export default WeatherSkeleton;
