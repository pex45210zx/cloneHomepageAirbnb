import React from "react"
import { NavBar } from "./components/NavBar.jsx"
import { Filter } from "./components/Filter.jsx"
import SiteContent from "./components/siteContent.jsx"

function App() {

  return (
    <>
      <NavBar />
      <Filter />
      <SiteContent />
    </>
  )
}

export default App
