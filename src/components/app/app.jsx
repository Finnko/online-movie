import React from "react";
import Main from "../main/main.jsx";

const App = ({promo, movies}) => {
    // eslint-disable-next-line react/prop-types

    return (
      <Main
        promo={promo}
        movies={movies}
      />
    );
};

export default App;
