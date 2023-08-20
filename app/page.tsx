'use client'

import { Lines } from 'react-preloaders';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import VideoWork from '../components/Video';
import More from '../components/More';
import Quotes from '../components/Quotes';


export default function Home() {

  return (
    <main className="border-t-4 border-rose-600">
      <Lines color={'#9f1239'} />
      <Nav/>
      <Hero/>
      <About/>
      <Work/>
      <VideoWork/>
      <More/>
      <Quotes/>
    </main>
  )
}
