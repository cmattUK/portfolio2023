import {AiOutlineMail, AiFillPauseCircle, AiFillPlayCircle, AiFillGithub} from "react-icons/ai";
import React from 'react'
import {useState} from 'react'

import ReactAudioPlayer from 'react-audio-player';

// Lazy load the YouTube player


function Nav(){
    const [isPlaying, setPlay] = useState(false);
    const togglePlaying = () => {
        setPlay(!isPlaying);
      };

    function stopMusic(){
        var audioPlayer = document.querySelector('#audioAmbient');
        if(isPlaying){
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }else{
            audioPlayer.play();
        }
        togglePlaying();
    }

    return(
        <nav className="w-full inline-block">
            <div className="px-4 py-2   max-w-[1280px] float-left">
                <ReactAudioPlayer src="audio/encroaching.mp3" id="audioAmbient" volume={0.09} loop/>
                {isPlaying ? <AiFillPauseCircle onClick={stopMusic} className="inline text-3xl hover:cursor-pointer"/> : <AiFillPlayCircle onClick={stopMusic} className="inline text-3xl hover:cursor-pointer"/>} 
                <p className="inline text-xs font-semibold text-black uppercase"> Toggle music</p>
            </div>
            <ul className="py-2 mx-4  float-right flex justify-items-center">
                <li className="text-grey-300"><a title="email me" className="hover:text-rose-800" href="mailto:chris.elixir@gmail.com"><AiOutlineMail className="inline text-2xl mt-0 pt-0"/></a></li>
                <li className="text-grey-300"><a title="GitHub" className="hover:text-rose-800" href="https://github.com/cmattUK"><AiFillGithub className="inline text-2xl mt-0 pt-0 ml-2"/></a></li>
            </ul>
        </nav>
    )
}
export default Nav;