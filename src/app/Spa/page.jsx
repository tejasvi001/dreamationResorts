import React from 'react'
import SpaHero from '../../components/SpaComp/Spahero'
import SpaBoxes from '../../components/SpaComp/Spabox'
import ServicesGrid from '../../components/SpaComp/ServicesGrid'
import Pricing from '../../components/SpaComp/Pricing'

const page = () => {
  return (
    <div>
      <SpaHero />
      <SpaBoxes />
      <ServicesGrid />
      <Pricing  />
    </div>
  )
}

export default page