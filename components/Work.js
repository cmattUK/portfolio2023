import Image from 'next/image';
import { useState } from 'react';
import WorkExample from '../components/WorkExample';
import WorkExampleRight from '../components/WorkExampleRight';
import work3 from '../public/img/work3.png';
import work4 from '../public/img/work4.png';
import work6 from '../public/img/work6.png';
import work7 from '../public/img/work7.png';
import BodyLink from '../components/bodyLink';
import Button from '../components/Button';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Work(){

    const [modalOn, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modalOn);
    };

    return(

        
        <Element className="workSection px-4 py-12 container max-w-[1200px] mx-auto" id="Work">

      
            <div className="pb-2 px-4">
                <h1 className="Mons md:text-6xl lg:text-8xl text-4xl flex flex-col font-black text-zinc-800 uppercase text-center">Recent Work</h1>
                
                <WorkExampleRight 
                    imageLink="https://animex.tees.ac.uk"
                    image={
                        <Image src={work6} className="w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="Animex" 
                    responsabilities=": CSS | HTML | BOOTSTRAP | DESIGN | JQUERY | SQL | COLDFUSION" 
                    description={
                        <p className="py-4 text-lg">
                            The organisers requested a complete redesign of their site. This was a huge undertaking by a team of two (a front-end designer and myself). 
                            We worked closely with the event team to refresh the site aesthetics, but it also required a full, custom CMS, and an <BodyLink url="https://animex.tees.ac.uk/archive.cfm" external="yes" title="archive" /> to share withe potential sponsors/speakers. The CMS required months of iteration and testing as it required complicated CRUD applications. 
                        </p>
                    }
                    siteButton={<Button title="visit site" link="https://animex.tees.ac.uk"/>}
                />
                <WorkExample 
                    imageLink="./CPFF-event-page/index.html"
                    image={
                        <Image src={work4} className=" w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="HR minisite" 
                    responsabilities=": CSS | HTML | DESIGN | JQUERY | SQL | AJAX | COLDFUSION " 
                    description={
                        <p className="py-4 text-lg">I was tasked with redesigning the HR section of <BodyLink url="https://www.tees.ac.uk" external="yes" title="tees.ac.uk"/> Although much of graphic design was dictated by mockups submitted by the client there was a huge amount of server-side code to implement. 
                        Creating the <BodyLink url="https://www.tees.ac.uk/depts/hr/jobs.cfm" title="job search" external="yes"/> was definitely a highpoint; this involved building multiple filters to asynchronously (AJAX) return search results.</p>
                    }
                   siteButton={<Button title="visit site" link="https://www.tees.ac.uk/depts/hr/"/>}
                />
          
                <WorkExampleRight 
                    imageLink="https://www.tees.ac.uk/sections/stud/"
                    image={
                        <Image src={work3} className="w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="Student Life" 
                    responsabilities=": CSS | HTML | DESIGN | JQUERY | JSON | SQL | COLDFUSION" 
                    description={
                        <p className="py-4 text-lg">With Teesside University rebranding and centralising their student facing services the client wanted a new minisite to do the same. This included some very tricky tasks such as: creating an SQL search that requested results from a Knowledge Base API using JSON objects, integrating a Chatbot, and creating animated tiles with JQUERY.</p>
                    }
                    siteButton={<Button title="visit site" link="https://www.tees.ac.uk/sections/stud/"/>}
                />

                <WorkExample 
                    image={
                        <Image src={work7} className=" w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="Building escape - UE4 C++" 
                    responsabilities=": Unreal Engine 4 | C++ " 
                    description={
                        <p className="py-4 text-lg">I was tasked with redesigning the HR section of <BodyLink url="https://www.tees.ac.uk" external="yes" title="tees.ac.uk"/> Although much of graphic design was dictated by mockups submitted by the client there was a huge amount of server-side code to implement. 
                        Creating the <BodyLink url="https://www.tees.ac.uk/depts/hr/jobs.cfm" title="job search" external="yes"/> was definitely a highpoint; this involved building multiple filters to asynchronously (AJAX) return search results.</p>
                    }
                   siteButton={<button className="px-4 py-3 bg bg-rose-700 text-xl font-semibold text-white hover:bg-rose-900 inline-block text-center"   onClick={toggleModal}>Do something</button>}
                />
                <div className={`bg-gray-800 fixed inset-0 z-10 overflow-y-auto w-full p-16 ${modalOn ? 'transition ease-in-out delay-100 scale-100' : 'scale-0'}`} onClick={toggleModal}>
                   
                    <div className="relative overflow-hidden w-full pt-[56.25%] mt-8 px-4 " onClick={toggleModal}>
                        <iframe className="absolute top-0 left-0 right-0 bottom-0 w-full h-[100%]"  src="https://www.youtube.com/embed/COgcbafLbLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>   
            </div>
        </Element>
    )
}
export default Work;