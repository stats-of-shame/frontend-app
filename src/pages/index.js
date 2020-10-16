import React from "react"
import Loadable from "@loadable/component"

const GeoMap = Loadable(() => import("../modules/geoMap/containers"))

export default function Home() {
  return (
    <div>
      <div>Hello Humans!</div>
      <GeoMap />
    </div>
  )
}
