import {useState} from 'react'
import {useDispatch} from 'react-redux'
let B = ()=>{
   
  let [data,setData] = useState('')
  let dispatch = useDispatch();


   const CHANGE = 'CHANGE'
  let handleChanges = (e) =>{
   
    dispatch({type:CHANGE,payload:e.target.value})
  }
    
    return(
    <div className='container'>
  
    <div className='inputbox'>
    <input type="text"  onChange={(e)=> handleChanges(e)}></input>
    </div>
   
   </div>

    
    )
}

export default B;