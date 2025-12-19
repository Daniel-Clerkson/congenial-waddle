import FooterBanner from '@/components/FooterBanner'
import PricingPlans from '@/components/Pricing'
import Testimonial from '@/components/Testimonial'
import React from 'react'

const page = () => {
  return (
    <>
      <PricingPlans />  
      <Testimonial />
      <FooterBanner />
    </>
  )
}

export default page