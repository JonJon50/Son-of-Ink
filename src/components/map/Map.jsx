import React from "react";
import Image from "next/image";
import MapStyles from "./Map.module.css";

const Map = () => {
  return (
    <figure className={MapStyles.mapFigure}>
      <div className={MapStyles.imageFrame}>
        <Image
          src="/Assets/son-of-ink-aerial-map.png"
          alt="Aerial view of 2181 Crain Highway in Waldorf, Maryland"
          fill
          className={MapStyles.mapImage}
          sizes="(max-width: 768px) 100vw, 70vw"
          priority
        />
        <span className={MapStyles.locationMarker} aria-hidden="true">
          <span />
        </span>
      </div>
      <figcaption className={MapStyles.caption}>
        <span>2181 Crain Hwy, Waldorf, MD 20601</span>
        <span>Imagery: Esri World Imagery</span>
      </figcaption>
    </figure>
  );
};

export default Map;
