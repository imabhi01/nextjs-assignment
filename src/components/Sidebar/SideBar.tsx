import { FaComputer } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaUserNinja } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export default async function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <div className="w-12 flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700 active">
                    <div className="text-2xl">
                        <FaComputer />
                    </div>
                </div> 
                <div className="w-12 flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                    <div className="text-2xl">
                        <FaUser />
                    </div>
                </div> 
                <div className="w-12 flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                    <div className="text-2xl">
                        <FaUserNinja />
                    </div>
                </div> 
                <div className="w-12 flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                    <div className="text-2xl">
                        <FaRegStar />
                    </div>
                </div> 
            </div>
        </>
    )
}