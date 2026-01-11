import "./App.css"
import Footer from "./components/Layouts/footer/Footer"
import { Header } from "./components/Layouts/Header/Header"
import { Home } from "./components/pages/home/Home"

export const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}
