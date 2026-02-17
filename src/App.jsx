// import { useState } from "react"
import Layout from "./Layout/Layout"
import { useSelector } from "react-redux"

const App = () => {

  // const [darkMode, setDarkMode] = useState("light")
  const {darkMode} = useSelector(state=>state.darkMode)
  console.log(darkMode);
  

  return (
    <div className={darkMode}>
      {/* <Layout darkMode={darkMode} setDarkMode={setDarkMode}/> */}
      <Layout/>
    </div>
  )
}

export default App
