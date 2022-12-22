import React from "react";
import Script from "next/script";

const Bookings = () => {
  return (
    <>
      <div id="dine_script_tag_booker" />
      <Script
        src="https://www.tbdine.com/inject/booker?format=1col&name=ditta-artigianale&idApp=70871&force=true&language=en-us"
        type="text/javascript"
      />
    </>
  );
};

export default Bookings;
