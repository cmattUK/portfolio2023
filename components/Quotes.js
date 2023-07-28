
import { useState, useEffect } from 'react';
import ButtonPink from '../components/Button';
import { AiFillCaretUp, AiOutlineMail, AiFillCopy, AiFillFilePdf} from "react-icons/ai";

function Quotes(){



    const quotesStore = [
        {
            "id" : 0,
            "name" : "Stephen King",
            "quote" : "Monsters are real, and ghosts are real too"

        },
        {
            "id" : 1,
            "name" : "Clive Barker",
            "quote" : "That which is imagined can never be lost"

        },
        {
            "id" : 2,
            "name" : "H.P. Lovecraft",
            "quote" : "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown"
        },
        {
            "id" : 3,
            "name" : "Edgar Allen Poe",
            "quote" : "There is no beauty without some strangeness"
        }

    ];

    //to store the value of the timer
    const [seconds, setSeconds] = useState(0);
    //store the timer's state. Are we active or paused
    const [isActive, setIsActive] = useState(true);
    //create a value for a state called 'emotion'
    const [quote, setQuote] = useState("Monsters are real, and ghosts are real too");
    const [name, setName] = useState("Stephen King");


        //set the currect isActive state to opposite
    function toggle() {
        setIsActive(true);
      }

      //reset fucntion
      function reset() {
        setSeconds(0);
        setIsActive(false);
        setTimeout(function(){
            toggle();
        }, 2000);
       
      }

      useEffect(() => {
        let interval = null;
        if (isActive) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
          if(seconds >= 6){
            reset();
          }
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);




    return(
            <section className="quotesSection px-4 border-t-2 border-gray-300">
                <div className="max-w-[1200px] mx-auto px-4 flex flex-col relative">
                    <div className=" text-zinc-800 text-center relative mx-auto">
                        <div className=" w-full">
                            <div className="row min-h-[100px] pt-4">
                                <p className={`quote pt-4 text-lg max-w-[900px] ${isActive ? 'scale-100' : 'scale-0'}`}>{quote} - <strong>{name}</strong> {seconds}</p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )

}
export default Quotes;

