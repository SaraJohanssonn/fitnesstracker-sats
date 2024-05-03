import React from "react";
import satsImage from "../img/sats.png"; // Sökvägen till bilden

const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#0d2134" }}
    >
      <div>
        <img
          src={satsImage}
          alt="SATS"
          className="img-fluid"
          style={{ maxWidth: "200px", opacity: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Home;
