import React, { useEffect } from "react";

const Achievements = () => {
  const url = 'https://docs.google.com/document/d/1OBjUmR6H63C0OiiQuCJ9ICmXIvrXAhN8WxH0uNgU0EA/edit?usp=drivesdk'
  useEffect(() => {
    window.location.href = url;
 }, [url]);

 return <></>;
}

export default Achievements