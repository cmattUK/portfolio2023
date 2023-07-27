function WorkExampleRight(props){
    return(
        <div className="md:flex md:flex-row md:justify-between md:justify-items-center mt-4 pt-16 bg-none">
             <div className="md:w-6/12 z-0 mb-4 pb-2 md:mb-0 md:pb-0 order-first md:order-last">
             <a href={props.imageLink}>{props.image}</a>
            </div>
            <div className="w-full md:w-6/12 justify-self-center md:pl-4 md:order-first order-last">
                <h2 className="uppercase font-black text-3xl mt-4 pt-4 text-zinc-800 ">{props.title}</h2>
                {props.description}
                <p className="text-rose-800 uppercase block pt-2 mt-2 text-base"><strong>Responsibilities</strong>{props.responsabilities}</p>
                <p className="text-left mt-4 ml-0">{props.siteButton}</p>
            </div>
           
        </div>
    )
}

export default WorkExampleRight;