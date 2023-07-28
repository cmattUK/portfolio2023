'use client'

import { AiOutlineDownCircle, AiFillCaretDown, AiFillCaretUp, AiOutlineMail, AiFillCopy} from "react-icons/ai";


function ButtonPink(props) {
    let setStyle = `px-4 py-3 bg bg-rose-700 text-xl font-semibold text-white hover:bg-rose-900 inline-block text-center`;

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
    
    return(
        <a className={setStyle} href={props.link} >{props.title} {props.iconName} {props.secondIcon}</a>
    )
}

export default ButtonPink;