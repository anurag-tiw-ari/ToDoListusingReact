import { useEffect, useState } from "react";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
function ToDo()
{
   const [inputValue,setInputValue]=useState("");
   const[task,setTask]=useState([]);
   const[dateTime,setdateTime]=useState((new Date()).toLocaleString())
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

         function handleDelButton(ce)
         {
             let newarray=task.filter((curr)=>{
                return ce!==curr;
             })
             setTask(newarray);
             localStorage.setItem("taskarray",JSON.stringify(newarray));
         }

         function DateTime(){
            let now=new Date();
            const date = now.toLocaleDateString(); 
            const time = now.toLocaleTimeString(); 
            const dateTime = now.toLocaleString(); 
            setdateTime(dateTime)
         }
         
            setInterval(DateTime,1000)
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
    <section className="date-time text-blue-200 mt-5 text-2xl font-semibold hover:text-blue-400">{dateTime}</section>
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
    <section className="mt-7" >
        <ul>
            {
                task.map((ce,index)=>{
                    return (
                    <><li 
                    key={index} 
                    className=" text-black tasklist mt-3 flex gap-3 items-center justify-between w-72 px-4 bg-white py-2  rounded-3xl">
                        <h4 >{ce}</h4>
                        <div className="flex gap-3">
                        <button 
                        className="bg-green-400  py-2 px-2 border-none rounded-full text-white hover:bg-green-500 check-btn"
                        >
                           <MdCheck />
                        </button>
                        <button 
                        className="bg-red-400  py-2 px-2 border-none rounded-full text-white hover:bg-red-500 del-btn"
                        onClick={()=>{
                            handleDelButton(ce)
                        }}>
                            <MdDeleteForever />
                        </button>
                        </div>
                    </li>
                        </>
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