import React, { useEffect, useState } from "react";
import {  getImpactKeralaInfo } from "../../Service/UserApi";
import Header from "../Header/Header";

const ImpactKerala = () => {
  const [ImpactKeralaInfo, setImpactKeralaInfo] = useState(null);

  useEffect(() => {
    getImpactKeralaInfo()
      .then((res) => setImpactKeralaInfo(res.data))
      .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />
      {ImpactKeralaInfo ? (
        <div>
          <p> {ImpactKeralaInfo.name}</p>
          <p> {ImpactKeralaInfo.content}</p>
          {ImpactKeralaInfo.image && (
            <img
              src={ImpactKeralaInfo.image}
              alt={ImpactKeralaInfo.name}
              style={{ maxWidth: "100%" }}
            />
          )}

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ImpactKerala;
