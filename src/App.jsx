import { useState } from 'react'
import Hero from './components/Hero'
import Packages from './components/Packages'
import OrderForm from './components/OrderForm'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import FinalCTA from './components/FinalCTA'
import CustomBuilder from './components/CustomBuilder'
import StickyWhatsApp from './components/StickyWhatsApp'
//import CustomerOrderForm from './components/CustomerOrderForm'

function App() {
  const [selectedPackage, setSelectedPackage] = useState(null)

  return (
    <div className="min-h-screen bg-charcoal text-white">
      <div className="absolute top-6 right-6 z-50">
        {/* <EventModeToggle mode={mode} setMode={setMode} /> */}
      </div>

      <Hero />
      <Packages onSelectPackage={setSelectedPackage} />
      <CustomBuilder eventMode={'Valentine'} />
      <OrderForm selectedPackage={selectedPackage} />
      <HowItWorks />
      <Trust />
      <FinalCTA />

      <StickyWhatsApp />
    </div>
  )
}

export default App
