import Image from 'next/image';
import controller from '../public/img/controller.png';
import aboutImage from '../public/img/hobbyblock1.jpg';
import BodyLink from './bodyLink';

function VideoWork(){
    return(
            <section className="aboutSection px-4  bg-gray-100 my-4 py-16 ">
                <div className="max-w-[1280px] mx-auto p-4 flex flex-col relative">
                    <div className=" text-zinc-800 text-center relative px-4">
                        <h1 className="Mons md:text-6xl lg:text-8xl text-4xl flex flex-col font-black text-zinc-800 uppercase text-center">Video Work</h1>
                        <p className="py-4 mt-2 text-lg pb-16 max-w-[900px] mx-auto">
                            Even though I love the web, every now and then -if I feel like a challenge- I'll take on a wildly ambitious video project just to keep myself inspired.
                        </p>
                    </div>
                    <div className="relative overflow-hidden w-full pt-[56.25%]">
                        <iframe className="absolute top-0 left-0 right-0 bottom-0 w-full h-[100%]"  width="560" height="315" src="https://www.youtube.com/embed/RPF-EsbGrDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="relative overflow-hidden w-full pt-[56.25%] mt-8">
                        <iframe className="absolute top-0 left-0 right-0 bottom-0 w-full h-[100%]"  width="560" height="315" src="https://www.youtube.com/embed/cfiPth_M9vI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="relative overflow-hidden w-full pt-[56.25%] mt-8">
                        <iframe className="absolute top-0 left-0 right-0 bottom-0 w-full h-[100%]"  width="560" height="315" src="https://www.youtube.com/embed/i8KTZwwmBcI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
    )
}
export default VideoWork;

