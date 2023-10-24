import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as Offer } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as Explore } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutline } from '../assets/svg/personOutlineIcon.svg'

import React from 'react'

const Navbar = () => {
   const navigate = useNavigate()
   const location = useLocation()

   const pathMatchRoute = (route) => {
      if (route == location.pathname) {
         return true
      }
   }

   return (
      <footer className='navbar'>
         <nav className='navbarNav'>
            <ul className='navbarListItems'>
               <li className='navarListItem' onClick={() => navigate('/')}>
                  <Explore
                     fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'
                     }>
                     Explore
                  </p>
               </li>
               <li className='navarListItem' onClick={() => navigate('/offers')}>
                  <Offer
                     fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute('/offers')
                           ? 'navbarListItemNameActive'
                           : 'navbarListItemName'
                     }>
                     Offer
                  </p>
               </li>
               <li className='navarListItem' onClick={() => navigate('/profile')}>
                  <PersonOutline
                     fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
                     width='36px'
                     height='36px'
                  />
                  <p
                     className={
                        pathMatchRoute('/profile')
                           ? 'navbarListItemNameActive'
                           : 'navbarListItemName'
                     }>
                     Profile
                  </p>
               </li>
            </ul>
         </nav>
      </footer>
   )
}

export default Navbar
