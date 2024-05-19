import React from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "../SearchBox";
import { useFavourites } from "../../contexts/UserFavouritesContext";
import { useWeather } from "../../contexts/WeatherContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const showSearchBox = location.pathname !== "/";
  const { favourites } = useFavourites();
  const { setLocation } = useWeather();
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {favourites.length > 0 && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/favourites"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Favourite Locations
                  </a>
                  <ul className="dropdown-menu">
                    {favourites.map((item, index) => (
                      <React.Fragment key={index}>
                        <li>
                          <a
                            className="dropdown-item"
                            onClick={(event) => {
                              event.preventDefault();
                              setLocation(item);
                              navigate(`/results/${item}`);
                            }}
                          >
                            {item}
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
            {showSearchBox && <SearchBox />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
