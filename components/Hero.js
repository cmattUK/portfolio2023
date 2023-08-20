'use client'

import { useState } from 'react';
import Image from 'next/image';
import portrait from '../public/img/meportrait.png';
import ButtonPink from './Button';


import { AiOutlineDownCircle, AiFillCaretDown, AiFillCaretUp, AiOutlineMail, AiFillCopy} from "react-icons/ai";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Hero(){
    const [isVisible, setVisible] = useState(false);
    const toggleBox = () => {
      setVisible(!isVisible);
    };
    return(
    <div className="relative flex items-center justify-center pb-12 overflow-hidden">
         <video  autoPlay loop muted playsinline className="absolute z-0 w-auto min-w-full min-h-full max-w-none filter grayscale contrast-200 opacity-10">
                <source src="videos/bats.mp4" type="video/mp4"/>
                <source src="videos/bats2.webm" type="video/webm"/>
            </video> 
        <section className="heroSection columns-1 text-center mx-auto h-screen flex content-center w-full">
            <div className="flex justify-around flex-col w-full z-10">
                <div className="md:max-w-[1200px] mx-w-[350px] mx-auto">
                    <Image src={portrait} className='mx-auto md:-mt-12 w-2/6 md:w-2/12 -mt-4'  alt="A picture of Chris Matthewman"/>
                    <h1  className="Mons md:text-6xl lg:text-8xl text-3xl flex flex-col font-black text-zinc-800 pt-4 mt-4 p-4">CHRIS MATTHEWMAN<span className="md:text-4xl text-base font-black p-4 mx-4 ">DESIGNER | DEVELOPER</span></h1>
                    <p className="text-zinc-800 p-4 md:text-xl text-sm max-w-[1080px] mx-auto -mt-4 font-normal">I’m an enthusiastic creative with a love for both front-end and server-side code. The web gives me an incredibly flexible canvas to indulge in all my favourite creative disciplines. </p>
                    <div className="md:flex md:flex-row md:justify-center">
                        <div className="relative md:inline block overflow-visible md:mb-0 mb-4">
                            <div className="md:hidden">
                                <ButtonPink link="mailto:chris.elixir@gmail.com" title ='chris.elixir@gmail.com' align="center" iconName={<AiOutlineMail className="inline"/>}/>
                            </div>
                            <button onClick={toggleBox} className="px-4 py-3 bg bg-rose-700 text-xl font-semibold text-white hover:bg-rose-800 max-w-[300px] w-full hidden md:block">chris.elixir@gmail.com <AiFillCaretDown className="hidden md:inline"/> <AiFillCaretUp className="inline md:hidden"/></button>
                            <div className={!isVisible ? 'md:-translate-y-14 -translate-y-32 scale-y-0 h-0 absolute w-full -mb-4' : 'md:translate-y-1 -translate-y-[10.5rem] ease-in-out duration-200 scale-y-100 absolute w-full -mb-4'}>
                                <ButtonPink  wFull="yes" title ='Copy to clipboard' copyText="yes" iconName={<AiFillCopy className="inline"/>}/>
                                <ButtonPink link="mailto:chris.elixir@gamil.com" wFull="yes" borderB='yes' title ='Use email app' iconName={<AiOutlineMail className="inline"/>}/>
                            </div>
                        </div>
                        <Link activeClass="active" to="workSection" spy={true} smooth={true} duration={500}  className="md:text-xl text-base mt-2 float self-center font-semibold text-rose-700 mx-4 hover:cursor-pointer hover:text-rose-800">
                        
                        <AiOutlineDownCircle className="inline animate-bounce w-6 h-6"/> See my work
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Hero;