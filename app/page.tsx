'use client'

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import VideoWork from '../components/Video';
import More from '../components/More';
import Quotes from '../components/Quotes';
import {useState, useEffect} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";


export default function Home() {

  const [loading, setLoading] = useState(true);
  const [hasLoaded, setLoaded] = useState(false);
  let [color, setColor] = useState("#9f1239");

  function loadSwap (){
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }, 1500);
  }


  return (
    <main>
      <div  className="relative">
        <div className={`absolute top-0 flex justify-center items-center w-full h-screen z-20 ${hasLoaded ? 'transition ease-out duration-300 scale-0 overflow-hidden opacity-0':'scale-100 opacity-100'}`}>
          <div className="mx-auto">
            <ScaleLoader
              color={color}
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
        <div onLoad={loadSwap} className={`top-0 left-0 relative z-10 border-t-4 border-rose-600  ${!loading ? 'transition ease-in duration-200 visible':'hidden'}`}>
          <Nav/>
          <Hero/>
          <About/>
          <Work/>
          <VideoWork/>
          <More/>
          <Quotes/>
        </div>
      </div>
    </main>
  )
}
