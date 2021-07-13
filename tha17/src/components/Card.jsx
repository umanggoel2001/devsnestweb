const Card=(props)=>{
return(
    <div className="card">
         <img  className="img" src={props.imge} alt="" />
      <h1>{props.name}</h1>  
      
     
    </div>
    );
}
export default Card;