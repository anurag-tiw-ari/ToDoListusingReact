import { useEffect, useState } from "react";
import AddElem from "./AddElem";
import Form from "./Form";
import DateTime from "./DateTime";
function ToDo()
{
   
   const[task,setTask]=useState([]);
   
 //  let taskarr=[];

        function handleFormSubmit(inputValue) 
        {
            
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

         function handleDelButton(ce)
         {
             let newarray=task.filter((curr)=>{
                return ce!==curr;
             })
             setTask(newarray);
             localStorage.setItem("taskarray",JSON.stringify(newarray));
         }

         function delAllBtn(){
            if(task.length>=1)
                {
                    return(
                        <button  onClick={()=>{
                            let newtaskarr=[];
                            setTask([])
                            localStorage.setItem("taskarray",JSON.stringify(newtaskarr));
                        }}
                         className="del-all bg-red-500 h-10 py-2 px-3 border-none rounded-3xl text-white hover:bg-red-600 mt-6">Delete All</button>
                    )
                }
         }

    return (
    <section className="todo-container flex flex-col items-center w-full mt-36">
         <header>
        <h1 className="text-5xl text-white text-center">ToDo List</h1>
    </header>
    <DateTime />
       <Form onFormSubmit={handleFormSubmit} />
    <section className="mt-7" >
        <ul>
            {
                task.map((ce,index)=>{
                    return (
                   <AddElem ce={ce} index={index} onRemove={handleDelButton} />
                    )
                })
            }
        </ul>
        <div className="flex justify-center">
        {delAllBtn()}
        </div>
    </section>
    </section>
    )
}

export default ToDo;