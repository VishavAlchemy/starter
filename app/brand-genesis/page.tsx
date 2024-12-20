import Hero from '@/components/7dc/hero'
import Features from '@/components/7dc/features'
import Cta from '@/components/7dc/cta'
import FeatureTwo from '@/components/7dc/featuretwo'
import React from 'react'
import { Main } from "@/components/craft";
import Footer from '@/components/lp/footer'

const page = () => {
  return (
    <Main>
      <Hero />      
      <Features />
{/*       <FeatureTwo />
 */}      
  <Cta />
  <Footer/>

  
 
    </Main>
  )
}

export default page
