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

  useEffect(() => {
 
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setLoading(false);
    }, 300);
    }, 2700);
  }, []); 

  return (
    <main className="border-t-4 border-rose-600">
      {loading ? 
      (
        <div className={`flex justify-center items-center  h-screen ${hasLoaded ? 'transition ease-out duration-300 translate-y-full':'translate-y-0'}`}>
          <ScaleLoader
            color={color}
            loading={loading}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : 
      (
        <div>
        <Nav/>
        <Hero/>
        <About/>
        <Work/>
        <VideoWork/>
        <More/>
        <Quotes/>
        </div>
      )}
    </main>
  )
}
