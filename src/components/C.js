import { useSelector } from "react-redux"

let C = () =>{

    const meassage = useSelector( (state) => state.text)


    return(

    <center>
    <h1>{meassage}</h1>
    </center>
   

    )
}

export default C;
