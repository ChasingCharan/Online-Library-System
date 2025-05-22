import BookList from "./components/BookList"
import Header from "./components/Header"
import { Books } from "./utils/mockData"
import HomePage from "./components/HomePage"
import { Outlet } from "react-router"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

function App() {
  return(
    <Provider store = {appStore}>
      <Header/>
      <Outlet/>
    </Provider>

    // <div>
    //   <Header/>
    //   <Outlet/>
    // </div>
      

  )
}

export default App
