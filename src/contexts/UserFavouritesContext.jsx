import { createContext, useState, useContext, useEffect } from "react";

const UserFavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(() => {
    const savedFavourites = localStorage.getItem("favourites");
    return savedFavourites ? JSON.parse(savedFavourites) : [];
  });

  // // Save favourites to localStorage whenever they change
  useEffect(() => {
    console.log(favourites);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const isBookmarked = (item) => {
    return favourites.includes(item);
  };

  const handleFavourite = (item) => {
    console.log(item);
    setFavourites((originalList) => {
      return originalList.includes(item)
        ? originalList.filter((favourites) => favourites !== item)
        : [...originalList, item];
    });
  };

  return (
    <UserFavouritesContext.Provider
      value={{ favourites, handleFavourite, isBookmarked }}
    >
      {children}
    </UserFavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(UserFavouritesContext);
