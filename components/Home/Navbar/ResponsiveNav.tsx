import React from 'react'
import Nav from './Nav'
import SideNav from './SideNav'

const ResponsiveNav = () => {
  return (
    <div className='w-full flex justify-center'>
      <SideNav className='hidden xl:block' />
      <Nav />
    </div>
  )
}

export default ResponsiveNav
