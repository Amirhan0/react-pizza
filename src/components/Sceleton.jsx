const SkeletonLoader = () => {
  return (
    <div className="animate-pulse flex flex-col justify-center items-center gap-3">
      <div className="bg-gray-300 h-52 w-52 rounded-full"></div>
      <div className="bg-gray-300 h-6 w-32 rounded"></div>
      <div className="p-4 bg-gray-100 rounded-xl w-full">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
          <div className="bg-gray-300 h-10 w-full rounded-lg"></div>
        </div>
      </div>

      <div className="flex justify-evenly items-center w-full mt-4">
        <div className="bg-gray-300 h-6 w-24 rounded"></div>
        <div className="border border-orange-500 rounded-full flex items-center py-2 px-4 gap-2 text-orange-500 font-bold">
          <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
          <div className="bg-gray-300 h-6 w-16 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
