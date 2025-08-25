import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Slider from './components/Slider'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
      <Header />
      {/* <Slider /> */}
      <div style={{minHeight : "700px"}}>
      <AllRoutes />

      </div>
      <Footer />
    </>
  )
}

export default App