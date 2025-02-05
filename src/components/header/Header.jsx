import FavouriteListModal from "./FavouriteListModal";
import FavouriteLocations from "./FavouriteLocations";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <>
      {/* Begin header */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <Logo />
          <div className="flex items-center gap-4 relative">
            
            <Search />

            <FavouriteLocations />

            <FavouriteListModal />

          </div>
        </nav>
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
