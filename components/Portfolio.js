
import VideoWork from '../components/Video.js';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import More from '../components/More';
import Quotes from '../components/Quotes';
import {useState} from 'react';

function Portfolio(){
    return(
        <div className={`border-t-4 border-rose-600 `}>
          <Nav/>
          <Hero/>
          <About/>
          <Work/>
          <VideoWork/>
          <More/>
          <Quotes/>
        </div>
    )
}
export default Portfolio;