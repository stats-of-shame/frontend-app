import KeplerGl from "kepler.gl"
import React from "react"

export const GeoMap = () => {
  return (
    <KeplerGl
      id="map"
      width={window.innerWidth}
      mapboxApiAccessToken={"pk.eyJ1IjoiYWJoaWJhbGFuaSIsImEiOiJja2NyZnRzM3gwaml4MzFteDU1ZnM1dGhpIn0.t8SA-yrv7Im74S8pjd5TiQ"}
      height={window.innerHeight}
      appName={'OddBlogger'}
    />
  )
}



