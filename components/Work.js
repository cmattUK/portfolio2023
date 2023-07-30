import Image from 'next/image';
import WorkExample from '../components/WorkExample';
import WorkExampleRight from '../components/WorkExampleRight';
import work1 from '../public/img/work1.png';
import work2 from '../public/img/work2.png';
import work3 from '../public/img/work3.png';
import work4 from '../public/img/work4.png';
import BodyLink from '../components/bodyLink';
import Button from '../components/Button';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Work(){
    return(
        
        <Element className="workSection px-4 my-4 py-16 container max-w-[1200px] mx-auto" id="Work">
            <div className="pb-2 px-4">
                <h1 className="Mons md:text-6xl lg:text-8xl text-4xl flex flex-col font-black text-zinc-800 uppercase text-center">Recent Work</h1>
                <WorkExample 
                    imageLink="https://www.jabcrosshook.co.uk"
                    image={
                        <Image src={work1} className=" w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="Jab Cross Hook" 
                    responsabilities=": CSS | HTML | DESIGN | BOOTSTRAP | VIDEO" 
                    description={
                        <p className="py-4 text-lg">Contender Promotions founder, Gary Bell, designed this wonderful family-friendly card game during lockdown. I volunteered to provide both a responsive 
                            <BodyLink url="https://www.jabcrosshook.co.uk" external="yes" title="product website"/>  and a <BodyLink title="teaser trailer"/>. 
                            This was an interesting project as it required me to create a wealth of original Photoshop graphics as well as developing my dormant After Effects skills.
                            </p>
                    }
                   siteButton={<Button title="visit site" link="https://www.jabcrosshook.co.uk"/>}
                />
          
                <WorkExampleRight 
                    imageLink="https://www.jabcrosshook.co.uk"
                    image={
                        <Image src={work1} className="w-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-100" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        } 
                    title="Jab Cross Hook" 
                    responsabilities=": CSS | HTML | DESIGN | BOOTSTRAP | VIDEO" 
                    description={
                        <p className="py-4 text-lg">Contender Promotions founder, Gary Bell, designed this wonderful family-friendly card game during lockdown. I volunteered to provide both a responsive 
                            <BodyLink url="https://www.jabcrosshook.co.uk" external="yes" title="product website"/>  and a <BodyLink title="teaser trailer"/>. 
                            This was an interesting project as it required me to create a wealth of original Photoshop graphics as well as developing my dormant After Effects skills.
                        </p>
                    }
                    siteButton={<Button title="visit site" link="https://www.jabcrosshook.co.uk"/>}
                />

            </div>
        </Element>
    )
}
export default Work;