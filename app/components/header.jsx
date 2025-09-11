"use client"
import Link from "next/link"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { useState } from "react"

const roboto = Roboto({
        weight: ['700','900'],
        subsets: ['latin'],
        display: 'swap',
    })
export const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <div className="relative">
                <header>
                    <nav className=" flex justify-between items-center p-4 gap-4">
                        <div>
                            <Image 
                            src="/stack/wisdom.png"
                            alt="Logo"
                            width={50}
                            height={50}
                                className="w-20 h-20 md:w-30 md:h-30 xl:w-50 xl:h-50"
                            />
                        </div>

                        <ul className="gap-8 text hidden md:flex">
                            <li className="li-hover"><Link href={"/"}>Home</Link></li>
                            <li className="li-hover"><Link href={"/price"}>Services</Link></li>
                            <li className="li-hover"><Link href={"/about"}>About</Link></li>
                            <li className="li-hover"><Link href={"/contact"}>Contact</Link></li>
                        </ul>
                        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
                            {isOpen ? <i className="bi bi-list text-black"></i> : ("")}
                        </div>
                    </nav>
                     <hr className="w-full h-2 border-gray-200 shadow-lg"/>
                </header>

                <section>
                    <div>
                        {isOpen ? ("") : (
                            <div className="min-h-screen absolute top-0 w-40 text-white left-0 h-screen bg-orange-800 shadow-lg p-4 text-center rounded-r-2xl z-10">
                                <div className="relative ">
                                    <ul>
                                    <li className="nav-btn mb-4"><Link href={"/"} onClick={toggleMenu}>Home</Link></li>
                                    <li className="nav-btn mb-4"><Link href={"/price"} onClick={toggleMenu}>Services</Link></li>
                                    <li className="nav-btn mb-4"><Link href={"/about"} onClick={toggleMenu}>About</Link></li>
                                    <li className="nav-btn mb-4"><Link href={"/contact"} onClick={toggleMenu}>Contact</Link></li>
                                    </ul>
                                    <div className="absolute top-2 right-0">
                                        <div className="cursor-pointer md:hidden" onClick={toggleMenu}>
                                        {isOpen ? ("") : <i className="bi bi-x-lg text-white bg-black w-fit h-fit rounded-full p-1"></i>}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        )}

                    </div>
                </section>

            </div>
        </>
    )
}