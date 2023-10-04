import Props2 from "./Props2";

function Props1(){
    const name="Anjali";
    const email="abc@"
    console.log("Anjali in 1")
    return(
        <div>
            <Props2 name={name} email={email}></Props2>
        </div>

    )
    
}