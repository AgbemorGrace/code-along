import React, {useState} from "react";
import TaskItem from "./TaskItem";
import background from "../assets/img/mm.jpg";


function TaskManager(){
 const[tasks,setTasks]= useState([]);
 const [input,setInput]=useState("");

 const handleSubmit =e =>{
    e.preventDefault();
    console.log("form Submitted");
    if (input === "")return;

    setTasks([input, ...tasks]);
    setInput("");
 };
 const handleDelete=(idx)=> {
    const newTasks = tasks.filter((task)=>task !==idx);
    setTasks(newTasks)
 };

  return (
   <div className="relative h-screen w-full bg-slate-800/95">
           <div className="max-w-xl max-h-96 bg-white rounded-xl px-5 py-10">
          {/* <img src={background} alt="" className="absolute w-full h-full object-cover mix-blur" /> */}
          className="absolute w-full h-full object-cover"
          <div className="h-full flex justify-center items-center">
              <form 
                 onSubmit={handleSubmit} className="space-x-6 flex w-[30rem] mb-10"> 

                 <input type="text" 
                 className="border-2 border-blue-400 p-2 rounded-md outline-none w-10/12" 
                 onChange={(e)=> setInput(e.target.value)} 
                 value={input} />

                   <button type="submit" 
                       className="bg-blue-600 text-white text-lg py-2 px-5 rounded-md"> Add
                        disabled={input ===""}
                    </button>
              </form>
           <div className="space-y-2 overflow-auto h-56">
            {
                tasks.map((task) => (
                
                 <TaskItem task={task} handleDelete={handleDelete}/>
                ))
            }
             
                  
        
           </div>
           </div>
            </div>
        </div>
  )
};
export default TaskManager;