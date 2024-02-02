import React, { useEffect, useState } from "react";
import { getHarithakeralamInfo } from "../../Service/UserApi";
import Header from "../Header/Header";

const HarithaKeralam = () => {
  const [HarithaKeralamInfo, setHarithaKeralamInfo] = useState(null);

  useEffect(() => {
    getHarithakeralamInfo()
      .then((res) => {
        console.log("Response data:", res.data); // Log the data here
        setHarithaKeralamInfo(res.data);
      })
      .catch((err) => console.log("front error", err));
  }, []);

  return (
    <div>
      <Header />
      {HarithaKeralamInfo ? (
        <div>
          <p> {HarithaKeralamInfo.name}</p>
          <p> {HarithaKeralamInfo.content}</p>
          {HarithaKeralamInfo.image && (
            <img
              src={HarithaKeralamInfo.image}
              alt={HarithaKeralamInfo.name}
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

export default HarithaKeralam;
