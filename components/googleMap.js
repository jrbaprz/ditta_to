import React from "react";

const GoogleMap = () => {
  return (
    <div className="map-responsive relative overflow-hidden w-full h-[500px] lg:h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0661675719266!2d-79.40521678412344!3d43.64679167912158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3526f9b61dad%3A0xbd4a4aea4078469e!2sDitta%20Artigianale!5e0!3m2!1sen!2sca!4v1671133594784!5m2!1sen!2sca"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="bl-0 bt-0 h-full w-full sticky"
      />
    </div>
  );
};

export default GoogleMap;
