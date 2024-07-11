import { useState } from "react";
function DateTime()
{
    const[dateTime,setdateTime]=useState((new Date()).toLocaleString());
    function DateTimee(){
        let now=new Date();
        const date = now.toLocaleDateString(); 
        const time = now.toLocaleTimeString(); 
        const dateTime = now.toLocaleString(); 
        setdateTime(dateTime)
     }
     
        setInterval(DateTimee,1000);

        return(
            <section className="date-time text-blue-200 mt-5 text-2xl font-semibold hover:text-blue-400">{dateTime}</section>
        )
}

export default DateTime;