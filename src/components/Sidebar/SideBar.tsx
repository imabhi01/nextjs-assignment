import { BsLaptop } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsPersonXFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import { BsXDiamondFill } from "react-icons/bs";
import { BsFillBasket3Fill } from "react-icons/bs";
import { FaUserNinja } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

export default async function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <div className="w-20 shadow-md bg-gray">
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700 active hover: bg-gray">
                        <div className="text-2xl">
                            <BsLaptop className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                        <div className="text-2xl">
                            <BsFillPersonFill className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                        <div className="text-2xl">
                            <BsPersonXFill className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                        <div className="text-2xl">
                            <BsStarFill className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                        <div className="text-2xl">
                            <BsXDiamondFill className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center bg-slate-100 px-3 py-3 active:bg-violet-700">
                        <div className="text-2xl">
                            <BsFillBasket3Fill className="text-gray hover: text-white"/>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}