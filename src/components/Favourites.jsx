import { useFavourites } from "../contexts/UserFavouritesContext";
import FavouriteButton from "./FavouriteButton";
import BookmarkSolid from "./assets/BookmarkSolid";

const Favourites = () => {
  const { favourites, handleFavourite } = useFavourites();
  return (
    <div className="responsive-bg favourites text-sm-center container-fluid align-items-center min-vh-50">
      <h1>Telling you about...</h1>
      <h1>Favourite Locations</h1>
      <div className="container bg-white mt-2">
        <p>
          click <BookmarkSolid /> to remove from favourites
        </p>
        <p>Click name to view info</p>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {favourites.map((item, index) => (
            <div key={index} className="col mb-2">
              <div className="card">
                <h5 className="card-title">
                  {" "}
                  <FavouriteButton
                    key={item}
                    isBookmarked={favourites.includes(item)} // sets the bookmark to be solid for favourites
                    item={item} // handles removal of favourites. Also supports adding favs on different page
                  />{" "}
                  Favourite {item}{" "}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
