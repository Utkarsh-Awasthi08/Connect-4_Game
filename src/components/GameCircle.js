import { useState } from "react"
function GameCircle({id, handleCircle, color}){
    let style = {
        width: '100%', 
        borderRadius: '50%', 
        aspectRatio: 1,
        border: '3px solid black '
    };
    return(
        <div className={"bg-"+color} style={style} onClick={()=>handleCircle(id)}>   
        </div>
    )
}
export default GameCircle