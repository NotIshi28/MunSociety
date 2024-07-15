import React, { useEffect } from "react";

const Achievements = () => {
  const url = 'https://heyzine.com/flip-book/517bcfac5b.html#page/13'
  useEffect(() => {
    window.location.href = url;
 }, [url]);

 return <></>;
}

export default Achievements