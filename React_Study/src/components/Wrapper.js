import React from "react";

export default function Wrapper({children}){
    const style={
        border: "2px solid black",
        padding: 16 
    }

    return(
        <div style={style}>{children}</div>
    )
}