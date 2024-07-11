import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
function AddElem({ce,index,onRemove})
{
    return(
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
            onRemove(ce)
        }}>
            <MdDeleteForever />
        </button>
        </div>
    </li>
        </>
    )
}

export default AddElem