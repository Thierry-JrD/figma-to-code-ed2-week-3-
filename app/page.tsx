'use client'

import Nav from '../components/Nav'
import React from 'react'
import { ThemeProvider } from '../modules/LightOrDarkMode'

const HomePage = () => {
  return (
    <ThemeProvider>
      <div>
        <Nav />
      </div>
    </ThemeProvider>
  )
}

export default HomePage
