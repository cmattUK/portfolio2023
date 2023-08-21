import Image from 'next/image';
import controller from '../public/img/controller.png';
import aboutImage from '../public/img/hobbyblock1.jpg';
import BodyLink from './bodyLink';

function About(){
    return(
            <section className="aboutSection px-4 bg-gray-100 mb-4 pt-10 pb-16">
                <div className="max-w-[1200px] mx-auto p-4 flex flex-col relative">
                    <div className=" text-zinc-800 text-left relative">
                        <div className="pb-4 w-full md:w-7/12">
                            <h2 className="uppercase font-black text-3xl mt-4 pt-4">Horror Obsessed</h2>
                            <p className="py-4 text-lg">
                                Growing up in the VHS era meant I was exposed to a myriad of excessive and colourful horror movies. This early doorway into darkness gave me an insatiable appetite to consume as much horror fiction as possible; which is why you’ll usually find me tackling the latest <BodyLink title="Resident Evil" external="yes" url="https://game.capcom.com/residentevil/en/" /> or rewatching <BodyLink title="Evil Dead 2" external="yes" url="https://www.imdb.com/title/tt0092991/?ref_=fn_al_tt_3"/> - when I should be out in the sun, like normal people!
                                <br/><br/>
                                Horror is such a huge influence on my work. This site was inspired by Remedy&apos;s <BodyLink external="yes" title='Control' url='https://www.remedygames.com/games/control/'/> and Stuart Gordon&apos;s <BodyLink title="From Beyond" url="https://www.imdb.com/title/tt0091083/" external="yes"/>.
                            </p>
                        </div>
                        <Image src={controller} className="absolute top-16 right-8 -mr-9 w-[500px] origin-top-left -rotate-12 invisible md:visible transition ease-in-out delay-150 z-10"  alt="A Playstation 4 controller"/>
                    </div>
                    <div className="none md:block mx-auto max-w-[1200px] -mt-2 order-first md:order-last relative">
                        <Image src={aboutImage} className="w-full z-0 mb-4 pb-2 md:mb-0 md:pb-0" alt="Chris Matthewman wearing a monster mask reading a book about the horror movie Creepshow"/>
                        <div className="triangle-container absolute -bottom-0 md:-bottom-5 -left-6 rotate-[20deg] animate-waving origin-center">
                            <svg height="60" width="60" className="fill-rose-600">
                                <polygon points="30,10 0,60 60,60" className="triangle" />
                                Sorry, your browser does not support inline SVG.
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default About;

