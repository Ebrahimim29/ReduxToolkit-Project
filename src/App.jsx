import { useState } from "react"
import Layout from "./Layout/Layout"

const App = () => {

  const [darkMode, setDarkMode] = useState("light")

  return (
    <div className={darkMode}>
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

export default App
