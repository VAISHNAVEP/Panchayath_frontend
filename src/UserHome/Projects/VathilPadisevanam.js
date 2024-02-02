import React, { useEffect, useState } from "react";
import { getVathilpadiSevanamInfo } from "../../Service/UserApi";
import Header from "../Header/Header";

const VathilPadisevanam = () => {
  const [VathilPadisevanamInfo, setVathilPadisevanamInfo] = useState(null);

  useEffect(() => {
    getVathilpadiSevanamInfo()
      .then((res) => setVathilPadisevanamInfo(res.data))
      .catch((err) => console.log("front error", err));
  }, []);
  return (
    <div>
      <Header />
      {VathilPadisevanamInfo ? (
        <div>
          <p> {VathilPadisevanamInfo.name}</p>
          <p> {VathilPadisevanamInfo.content}</p>
          {VathilPadisevanamInfo.image && (
            <img
              src={VathilPadisevanamInfo.image}
              alt={VathilPadisevanamInfo.name}
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

export default VathilPadisevanam;
