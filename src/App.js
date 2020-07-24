import React from "react"
import HomePage from "./pages/homepage/Homepage.component"
import { Route } from "react-router-dom"

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  )
}

export default App
