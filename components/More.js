
import { useState } from 'react';
import ButtonPink from '../components/Button';
import { AiFillCaretUp, AiOutlineMail, AiFillCopy, AiFillFilePdf} from "react-icons/ai";

function More(){
    const [isConVisible, setConVisible] = useState(false);

    const toggleConBox = () => {
      setConVisible(!isConVisible);
    };

    return(
            <section className="moreSection px-4 py-16 ">
                <div className="max-w-[1200px] mx-auto p-4 flex flex-col relative">
                    <div className=" text-zinc-800 text-center relative mx-auto">
                        <div className="pb-4 w-full">
                            <h2 className="uppercase font-black text-3xl  pt-4">Want to know more?</h2>
                            <p className="py-4 text-lg max-w-[900px]">
                                Now that you know what I'm all about, and you're not completely repelled by my obsession with the spooky and the macabre, I'd love it if you got in touch. Thanks for taking the time to look me up.
                            </p>
                        </div>
                    </div>
                    <div className="triangle-container absolute -top-24 md:-top-20 -left-5 rotate-[20deg] animate-waving origin-center">
                        <svg height="60" width="60" className="fill-rose-600">
                            <polygon points="30,10 0,60 60,60" className="triangle" />
                            Sorry, your browser does not support inline SVG.
                        </svg>
                    </div>
                    <div className="md:flex md:flex-row md:justify-center">
                        <div className="relative md:inline block overflow-visible md:mb-0 mb-4 md:mr-2">
                            <div className="md:hidden mx-auto max-w-[300px]">
                                <ButtonPink link="mailto:chris.elixir@gmail.com" title ='chris.elixir@gmail.com' align="center" iconName={<AiOutlineMail className="inline"/>}/>
                            </div>
                            <button onClick={toggleConBox} className="px-4 py-3 bg bg-rose-700 text-xl font-semibold text-white hover:bg-rose-800 max-w-[300px] w-full hidden md:inline-block md:mx-auto">chris.elixir@gmail.com <AiFillCaretUp className="inline"/></button>
                            <div className={!isConVisible ? 'md:-translate-y-28 translate-y-32 scale-y-0 h-0 absolute w-full -mb-4' : 'md:-translate-y-42 -translate-y-[10.5rem] ease-in-out duration-200 scale-y-100 absolute w-full'}>
                                <ButtonPink link="mailto:chris.elixir@gamil.com" wFull="yes" title ='Copy to clipboard' iconName={<AiFillCopy className="inline"/>}/>
                                <ButtonPink link="mailto:chris.elixir@gamil.com" wFull="yes" borderB='yes' title ='Use email app' iconName={<AiOutlineMail className="inline"/>}/>
                            </div>
                        </div>
                        <div className=" flex justify-center">
                            <ButtonPink iconName={<AiFillFilePdf className="inline w-6 h-6"/>} title="My CV" buttonType="border" link="mycv.pdf" align="center"/>
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default More;

