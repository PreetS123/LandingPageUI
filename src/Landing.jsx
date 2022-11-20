import React from 'react'
import { Navbar } from './Component/Navbar'
import { About } from './Pages/About'
import { Features } from './Pages/Features'

export const Landing = () => {
  return (
    <>
     <Navbar/>
     <About />
     <Features/>
    </>
  )
}
