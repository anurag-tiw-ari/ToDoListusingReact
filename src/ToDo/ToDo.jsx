import { useEffect, useState } from "react";

function ToDo()
{
   const [inputValue,setInputValue]=useState("");
   const[task,setTask]=useState([]);
 //  let taskarr=[];

        function handleFormSubmit(e) 
        {
            e.preventDefault();
            if (!inputValue) return;
        
            setTask((task) => {
              if (!task.includes(inputValue)) 
                {
               // console.log(inputValue)
               localStorage.setItem("taskarray",JSON.stringify([...task,inputValue]));
                return [...task,inputValue];
              }
              else {
              return task;
              }
            });
           // console.log(taskk
            setInputValue(""); 
          }
          function getElemfromLs()
          {
             let taskarr=JSON.parse(localStorage.getItem("taskarray"))
              if(taskarr)
                {
                    setTask(taskarr);
                }
          }
         useEffect( getElemfromLs,[]);

         function handleDelButton(e)
         {
            if(e.target.classList.contains("del-btn"))
           {
            let value=e.target.previousElementSibling.innerText;
            let index=task.indexOf(value);
          //  console.log(task);
            task.splice(index,1);
          //  console.log(task);
            localStorage.setItem("taskarray",JSON.stringify(task));
            e.target.parentNode.remove();
           }
         }

    return (
    <section className="todo-container flex flex-col items-center w-full mt-36">
         <header>
        <h1 className="text-5xl text-white text-center">ToDo List</h1>
    </header>
    
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
    <section >
        <ul>
            {
                task.map((ce)=>{
                    return (
                    <><li onClick={(e)=>{
                        handleDelButton(e)
                    }}
                    key="ce" 
                    className=" text-white tasklist mt-12 flex gap-3 items-center justify-between w-72 px-3">
                        <h4 key="cev">{ce}</h4>
                        <button key="cer"
                        className="bg-blue-400  py-2 px-3 border-none rounded-3xl text-white hover:bg-blue-500 del-btn"></button>
                    </li>
                        
                        </>
                    )
                })
            }
        </ul>
    </section>
    </section>
    )
}

export default ToDo;