
import Header from "./Components/Header"
import { Outlet } from "react-router-dom"
function App() {
  

  return (
    <>
       <Header></Header>
       <Outlet></Outlet>
   
    </>
   )  
}

export default App
