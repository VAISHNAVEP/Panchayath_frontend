import React, { useEffect, useState } from "react";
import { getKeralaSolidInfo } from "../../Service/UserApi";
import Header from "../Header/Header";

const KeralaSolid = () => {
  const [KeralaSolidInfo, setKeralaSolidInfo] = useState(null);

  useEffect(() => {
    getKeralaSolidInfo()
      .then((res) => {
        setKeralaSolidInfo(res.data);
      })
      .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />
      {KeralaSolidInfo ? (
        <div>
          <p> {KeralaSolidInfo.name}</p>
          <p> {KeralaSolidInfo.content}</p>
          {KeralaSolidInfo.image && (
            <img
              src={KeralaSolidInfo.image}
              alt={KeralaSolidInfo.name}
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

export default KeralaSolid;
