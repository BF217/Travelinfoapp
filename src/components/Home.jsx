import React from "react";
import SearchBox from "./SearchBox";

const Home = () => {
  return (
    <div className="bg-img container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="bg-white">
        <h1>Tell me about...</h1>
      </div>
      <SearchBox verticalLayout={true} />
    </div>
  );
};

export default Home;
