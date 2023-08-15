'use client'


import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import VideoWork from '../components/Video';
import More from '../components/More';
import Quotes from '../components/Quotes';
import { Lines } from 'react-preloaders';


export default function Home() {

;

  return (
    <main className="border-t-4 border-rose-600">
      <Nav/>
      <Hero/>
      <About/>
      <Work/>
      
      <VideoWork/>
      <More/>
      <Quotes/>
      <Lines time={500} color={'#be123c'}  animation="slide-down"/>
    </main>
  )
}
