
import './App.css'
import Footer from './Components/Footer/Footer'

import HeroSection from './Components/HeroSection/HeroSection'
import LineChart from './Components/LineChart/LineChart'
import MyNavbar from './Components/MyNavbar/MyNavbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import Trainers from './Components/Trainers/Trainers'

function App() {

  return (
    <>
      

      <MyNavbar></MyNavbar>
      <HeroSection></HeroSection>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Trainers></Trainers>
      <Footer></Footer>
    </>
  )
}

export default App
