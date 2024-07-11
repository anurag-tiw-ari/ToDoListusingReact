import { useState } from "react";
function Form({onFormSubmit})
{

    const [inputValue,setInputValue]=useState("");

    function handleFormSubmit(e){
        e.preventDefault();
        onFormSubmit(inputValue);
        setInputValue("")
    }

    return(
    <section className="form">
        <form
        onSubmit={(e)=>{
           handleFormSubmit(e);
        }}
         className="flex items-center mt-8 ">
             <input 
             type="text" 
             className="input h-10 rounded-l-3xl px-3 py-2 outline-none" 
             autoComplete="off" 
             placeholder="Write"
             value={inputValue} 
              onChange={(event)=>{
                  setInputValue(event.target.value)
              }}/>
                <button type="submit" className="bg-blue-400 h-10 py-2 px-3 border-none rounded-r-3xl text-white hover:bg-blue-500">Add Task</button>
        </form>
    </section>
    )
}

export default Form;