'use client'

import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';


// set deconstructed array to store toggle fucntion and visibility variable
export default function Home() {

  return (
    <main className="border-t-4 border-rose-600">
      <Nav/>
      <Hero/>
      <About/>
      <Work/>
    </main>
  )
}