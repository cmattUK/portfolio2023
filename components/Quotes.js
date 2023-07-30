
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
    const [quote, setQuote] = useState((quotesStore[0]));
  


        //set the currect isActive state to opposite
    function toggle() {
        setIsActive(true);
      }

      function grabRandomQuote(thisQuote) {
        console.log(`thisQuote: ${thisQuote}`)
        let newQuote = thisQuote;
        while(newQuote == thisQuote){
          newQuote = (Math.floor(Math.random() * quotesStore.length));
        }
        newQuote = quotesStore[newQuote];
        console.log("neq uote:" + newQuote);
        return newQuote;
      }


      //reset function
      function reset() {
        setSeconds(0);
        setIsActive(false);
        //count 2 secs before starting to load the next quote
        setTimeout(function(){
        //grab random quote function
        setQuote(grabRandomQuote((quote.id)));
        toggle();
        }, 1000);
      }

      //check state and fire quotes loop
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
        // use dependancy array to keep checking
      }, [isActive, seconds]);

    return(
      <section className="quotesSection px-4 border-t-2 border-gray-300">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col relative">
              <div className=" text-zinc-800 text-center relative mx-auto">
                  <div className=" w-full">
                      <div className="row min-h-[100px] pt-4">
                          <p id={quote.id} className={`quote text-sm pt-4 max-w-[900px] ${isActive ? 'transition ease-in-out opacity-100 duration-200' : 'opacity-0 translate-y-6'}`}>{quote.quote} - <strong>{quote.name}</strong></p>
                      
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
}
export default Quotes;

