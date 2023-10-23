import { BsLaptop } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsPersonX } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsXDiamond } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";

export default async function Sidebar(){
    return (
        <>
            <div className="sidebar">
                <div className="w-20 shadow-md bg-white">
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsLaptop className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsPerson className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsPersonX className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsStar className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsXDiamond className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                    <div className="flex flex-col items-center px-3 py-3 icon-class">
                        <div className="text-2xl">
                            <BsBasket3 className="text-black hover:text-white icon"/>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}