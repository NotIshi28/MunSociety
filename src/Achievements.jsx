import React, { useEffect } from "react";

const Achievements = () => {
  const url = 'https://docs.google.com/document/d/1tHRGF63Dnw_SGItsFg46--3WzJw_tObdX7vRIOOn0Ag/edit?usp=sharing'
  useEffect(() => {
    window.location.href = url;
 }, [url]);

 return <></>;
}

export default Achievements