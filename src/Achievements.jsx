import React, { useEffect } from "react";

const Achievements = () => {
  const url = 'https://docs.google.com/document/d/1w8F8F6Cp7O30Zj74-yvRivoFhb8Jpl4WW84gYPRruW8/edit?usp=drivesdk'
  useEffect(() => {
    window.location.href = url;
 }, [url]);

 return <></>;
}

export default Achievements