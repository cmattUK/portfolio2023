
'use client'
import {useState} from 'react';
import copyTo from './copyTo';
import { AiFillCheckCircle } from 'react-icons/ai';

function ButtonPink(props) {

    const[isCopied, setCopy] = useState(false);

    function setCopied(){
        copyTo();
        setCopy(true);
    }

    let setStyle = `px-4 py-3 bg bg-rose-700 text-xl font-semibold text-white hover:bg-rose-900 inline-block text-center hover:cursor-pointer`;

    if(props.buttonType == 'border'){
        setStyle = `px-4 py-2 bg bg-none text-xl font-semibold text-rose-900 border-4 border-rose-900 inline-block text-center hover:bg-rose-900 hover:text-white`;
    }
    
    if(props.borderB == `yes`){
        setStyle += ` border-t-2 border-white `;
    }
    if(props.align == `center`){
        setStyle += ` mx-auto`;
    }
    if(props.wFull){
        setStyle += ` w-full`;
    }
    
    if(props.copyText) {
        
        return(
            
            <a className={setStyle} href={props.link} target="_blank" rel="noopener noreferrer" onClick={setCopied}> {isCopied ? "copied!": props.title} {isCopied ? <AiFillCheckCircle className="inline"/> : props.iconName} {props.secondIcon}</a>
        )

    } else {
        return(
            <a className={setStyle} href={props.link} target="_blank" rel="noopener noreferrer" >{props.title} {props.iconName} {props.secondIcon}</a>
        )
    }
}

export default ButtonPink;