function BodyLink(props) {
  if(props.external == "yes"){
    return(
      <a href={props.url} className="text-rose-700 hover:text-rose-800" target="_blank" rel="noopener noreferrer">{props.title} {props.iconName}</a>
    );
  }else{
    return(
      <a href={props.url} className="text-rose-700 hover:text-rose-800">{props.title} {props.iconName}</a>
    );
  }
}

export default BodyLink;