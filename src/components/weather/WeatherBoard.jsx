import WeatherCondtion from "./WeatherCondtion";
import WeatherHeadline from "./WeatherHeadline";
import AddToFavourite from "./AddToFavourite";

const WeatherBoard = () => {
  return (
    <>
      {/* Begin Wheather */}
      <section className="">
        <div className="container">
         <div className="mt-36">
         <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-8 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto ">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              <AddToFavourite />
              <div>
                <WeatherHeadline />
              </div>
              <WeatherCondtion />
            </div>
          </div>
         </div>
        </div>
      </section>
      {/* End Wheather */}
    </>
  );
};

export default WeatherBoard;
