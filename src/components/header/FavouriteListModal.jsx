const FavouriteListModal = () => {
  return (
    <div>
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <div className="text-lg font-bold px-4">Favourite Locations</div>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          <li className="hover:bg-gray-200">Dhaka</li>
          <li className="hover:bg-gray-200">Rangpur</li>
          <li className="hover:bg-gray-200">Europe</li>
        </ul>
      </div>
    </div>
  );
};

export default FavouriteListModal;
