import React from 'react';
import { Link } from 'gatsby';
import 'twin.macro'
const navItems = [
    {
        caption: 'Home',
        href: '/'
    },
    {
        caption: 'Productos',
        href: '/productos'
    },
]
export default (props) => {
    return(
        <nav tw="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
            <div tw="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div tw="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                <a tw="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
                    pink Color
                </a>
                <button tw="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                    <span tw="block relative w-6 h-px rounded-sm bg-white"></span>
                    <span tw="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                    <span tw="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                </button>
                </div>
                <div tw="lg:flex flex-grow items-center" id="example-navbar-warning">
                <ul tw="flex flex-col lg:flex-row list-none ml-auto">
                    {navItems.map((item) => <li className="nav-item"><Link tw="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={item.href}> { item.caption } </Link> </li>)}
                </ul>
                </div>
            </div>
        </nav>
    )
}