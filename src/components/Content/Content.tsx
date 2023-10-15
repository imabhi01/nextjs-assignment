export default function Content(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-1">
                <div className="flex justify-center">
                    <div className="w-full rounded-md px-10 py-10 m-10 bg-white">
                        <p className="flex justify-center">Hero Banner</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex justify-center">
                    <div className="w-full ">
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-10">
                            <p>1st Column 1</p>
                        </div>
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-10">
                            <p>1st Column 2</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end col-span-2">
                    <div className="w-full rounded-md bg-white px-10 py-10 m-10">
                        <div className="flex justify-around">
                            <p>2nd Column 1</p>
                            <p>2nd Column 2</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full ">
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-10">
                            <p>3rd Column 1</p>
                        </div>
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-10">
                            <p>3rd Column 2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}