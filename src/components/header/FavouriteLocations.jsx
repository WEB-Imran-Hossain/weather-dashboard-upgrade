import WhiteHeartIcon from "../../assets/icons/heart.svg";

const FavouriteLocations = () => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={WhiteHeartIcon} alt="" />
        <span>Favourite Locations</span>
      </div>
    </div>
  );
};

export default FavouriteLocations;
