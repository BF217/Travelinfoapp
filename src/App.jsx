import { FavouritesProvider } from "./contexts/UserFavouritesContext";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import SearchResults from "./components/SearchResults";
import { WeatherProvider } from "./contexts/WeatherContext";

const App = () => {
  return (
    <Router>
      <WeatherProvider>
        <FavouritesProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/results/:location" element={<SearchResults />} />
          </Routes>
          <Footer />
        </FavouritesProvider>
      </WeatherProvider>
    </Router>
  );
};

export default App;
