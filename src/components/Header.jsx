import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <nav className='sticky top-[0px] w-100 bg-black flex justify-between items-center p-5'>
      <Logo />
      <NavLinks />
      <Login />
    </nav>
  )
}

export default Header

function Login() {
  return <div className='hidden md:flex justify-center gap-20 '>
    <a href='#' className='nav-btn text-white'>Login</a>
    <a href='#' className='p-[.7rem] bg-white text-black border-2 border-white hover:bg-black hover:text-white  get-started'>Get Started</a>
  </div>
}

function Logo() {
  return <img className="w-[140px] max-[180px]" src={logo} alt="bmp" />
}

function NavLinks() {
  const [showDropDown, setShowDropDown] = useState(false);

  const links = [
    {
      text: "SHE.E.O",
      href: "https://www.pepcorns.com/knowledgebase/sheeo"
    },
    {
      text: "Blog",
      href: "https://blog.pepcorns.com/"
    },
    {
      text: "FAQ",
      href: "https://www.pepcorns.com/knowledgebase/faq"
    },
    {
      text: "Knowledge Base",
      href: "https://www.pepcorns.com/knowledgebase/investors"
    },
    {
      text: "About",
      href: "https://www.pepcorns.com/about"
    },
    {
      text: "Flashcards",
      href: "https://www.pepcorns.com/flashcards"
    }
  ];

  // Now you can use the 'links' array to render these links in ReactJS.

  const handleHover = () => {
    console.log("inside hover");
    setShowDropDown(true);
  }

  const handleMouseOut = () => {
    console.log("inside mouse out");
    setShowDropDown(false);
  }

  return <div className='hidden md:flex links justify-center gap-20 '>
    <a href='#' className='nav-btn text-white'>Startups</a>
    <a href='#' className='nav-btn text-white'>Raise Funding</a>
    <a href='#' className='nav-btn text-white relative' onMouseOver={handleHover} onMouseOut={handleMouseOut}>
      Learn
      <div className={(showDropDown ? 'block ' : 'hidden w-[0]') + 'absolute w-max h-max border-2 border-black text-white bg-black mt-3 p-[1rem] left-[-.5rem]'}>
        {
          links.map((link, index) => {
            return <a key={index} href={link.href} className='p-2 my-2 block text-white duration-200 hover:bg-white hover:text-black transition-all '>{link.text}</a>
          })
        }
      </div>
    </a>
  </div>
}
