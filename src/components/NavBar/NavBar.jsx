import React, { useState } from 'react'
import {BsSunFill} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineClose} from 'react-icons/md'
import useDarkMode from "../../useDarkMode"
import {FaMoon} from 'react-icons/fa'

export default function NavBar(props) {
    const [open, setOpen] = useState(false)
    const handlerMenu = () => {
        setOpen(!open)
    }
    const [isDarkMode, toggleDarkMode ] = useDarkMode()
    const { isMobile } = props
    return (
        <nav className="flex items-center">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2">NerdCard</div>
                {isDarkMode ? (
                    <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer"
                    onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                ) : (
                    <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer"
                    onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                )
            }
            </div>
            <ul className="md:flex md:gap-8 ml-auto text-16 font-semibold">
                {open && isMobile ? (
                    <MdOutlineClose size={"24px"} className="cursor-pointer text-white" onClick={handlerMenu}/>
                ) : (!open && isMobile ? (
                    <FiMenu size={"24px"} className="cursor-pointer" onClick={handlerMenu}/>
                ):(
                    <>
                        <li className="menu-navbar">Feature</li>
                        <li className="menu-navbar">Menu</li>
                        <li className="menu-navbar">Our Story</li>
                        <li className="menu-navbar">Contact</li>
                    </>
                ))}
                {open && (
                    <div className="absolute right-8 bg-white p-8 text-center text-black text-13 z-10">
                        <li className="menu-navbar">Feature</li>
                        <li className="menu-navbar">Menu</li>
                        <li className="menu-navbar">Our Story</li>
                        <li className="menu-navbar">Contact</li>
                    </div>
                )}
            </ul>
        </nav>
    )
}
