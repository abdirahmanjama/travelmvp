import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
 
const Header = () => {
  return(
    <Nav>
      <NavLink to ='/'>Javatars</NavLink>
      <Bars/>
    </Nav>
  )

}
  

export default Header

const Nav = styled.nav`
background: green;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px) / 2);
z-index: 100;
position: relative;
`

const NavLink = styled(Link)`
background: transparent;
height: 80px;
display: flex;
color: white;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;
height: 100%;
`
const Bars = styled(FaBars)`
display: none;
color:#fff;

@media screen and (max-width: 760px){
  display: block;
  position: absolute; 
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`


