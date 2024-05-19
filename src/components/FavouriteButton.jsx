import { useState, useEffect } from "react";
import BookmarkOutline from "./assets/BookmarkOutline";
import BookmarkSolid from "./assets/BookmarkSolid";
import { useFavourites } from "../contexts/UserFavouritesContext";
import { useWeather } from "../contexts/WeatherContext";

const FavouriteButton = ({ isBookmarked }) => {
  const [isFavourited, setIsFavourited] = useState(isBookmarked);
  const { handleFavourite } = useFavourites();
  const { location } = useWeather();

  const toggleFavourite = () => {
    setIsFavourited(!isFavourited);
    handleFavourite(location);
  };

  useEffect(() => {
    setIsFavourited(isBookmarked);
  }, [isBookmarked]);

  return (
    <>
      <button type="button" className="btn btn-sm" onClick={toggleFavourite}>
        {isFavourited ? <BookmarkSolid /> : <BookmarkOutline />}
      </button>
    </>
  );
};

export default FavouriteButton;
