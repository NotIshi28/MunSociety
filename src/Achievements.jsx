import React, { useEffect } from "react";

const Achievements = () => {
  const url = 'https://docs.google.com/document/d/1Ur3_FSN8yz1f3KC01LJW-L2vSFR8B_3MmYbbnwxTNYM/edit?usp=sharing'
  useEffect(() => {
    window.location.href = url;
 }, [url]);

 return <></>;
}

export default Achievements