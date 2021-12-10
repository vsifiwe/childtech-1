import React from 'react'
import { Link } from 'react-router-dom'
import logooo from '../logooo.PNG'
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <nav className="fixed w-full flex flex-wrap z-50 items-center justify-between bg-white mb-6">
                <div className="container mt-2 p-2 mx-auto flex flex-wrap justify-between">
                    <div className=" relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <Link to='/' className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                            <img src={logooo} width="100" className="d-inline-block align-top" alt="logo"/>
                        </Link>
                        <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white  mt-1"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white  mt-1"></span>
                        </button>
                    </div>
                    <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto px-8">
                            <li className="nav-item">
                                <Link to='/' className="py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="px-4 py-2 flex items-center  text-lg leading-snug text-blue-600 hover:opacity-75">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="flex -ml-2 items-center text-lg leading-snug text-white hover:opacity-80">
                                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                                        <NavDropdown.Item><Link to="/services">Programs </Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to='/services'>Actions </Link></NavDropdown.Item>
                                    </NavDropdown>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/events' className="flex items-center text-lg leading-snug text-white hover:opacity-80">
                                    <NavDropdown title="Events" id="navbarScrollingDropdown">
                                        <NavDropdown.Item> <Link to='/events'>  Past_Events </Link> </NavDropdown.Item>
                                        <NavDropdown.Item> <Link to='/events'> Upcoming_Events </Link> </NavDropdown.Item>
                                    </NavDropdown>
                                </Link>
                            </li>
                            
                            <button className="ring-1 ring-blue-800 text-lg mr-6 ml-8 hover:bg-gray-300 text-blue-800  px-8 mr-4 rounded-md">
                                <Link to='/login'>Login </Link>
                            </button>
                            <button className="text-lg mr-6 bg-blue-500 hover:bg-gray-300 text-white px-8 mr-4 rounded-md">
                                <Link to='/signup'>SignUp </Link>
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
export default Header