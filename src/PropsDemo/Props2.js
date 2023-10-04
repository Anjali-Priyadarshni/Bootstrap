function Props2 (props){
    console.log("Anjali in 2");
    console.log(props);
    
    return(
        <div>
            "abc"
           <h1>{props.name}</h1> 
           <h1>{props.email}</h1>
            
        </div>
    )
}
export default Props2;