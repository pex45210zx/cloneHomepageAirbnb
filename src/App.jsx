import React from "react"
import { NavBar } from "./components/NavBar.jsx"
import { Filter } from "./components/Filter.jsx"
import { Contents } from "./components/siteContent.jsx"

function App() {

  return (
    <>
      <NavBar />
      <Filter />
      <Contents />
    </>
  )
}

export default App
