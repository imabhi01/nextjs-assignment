import Image from 'next/image'

export default function Content(){
    return(
        <div className="w-full">
            <div className="grid grid-cols-1">
                <div className="flex justify-center overflow-hidden">
                    <div className="relative w-full h-32 rounded-md px-10 py-10 m-4">
                        <Image src="/hi5.avif" height={1000} width={1000} className='w-full h-full absolute top-0 left-0 rounded-md object-top object-cover' alt='banner-image'></Image>
                        <div className='absolute t-0'>
                            <p className="text-3xl text-white">News Feed</p>
                            <p className="text-sm text-white">Check what your friend's been up to.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="flex justify-center col-span-3">
                    <div className="w-full">
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-4">
                            <h2><strong>Newest Members</strong></h2>
                            <div className='pt-6'>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-4">
                            <p>Quests</p>
                            <div className='pt-6'>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Posting Machine</strong>
                                        <p>Posted more than 20 profile activities in one day.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-center flex-start col-span-6">
                    <div className="w-full rounded-md bg-white px-10 py-10 m-4">
                        <div className="flex justify-between items-center">
                            <p>All Updates</p>
                            <div className='flex relative'>
                                <select name="filter" id="" className='w-full px-2 py-2 rounded-md border-gray-300' placeholder='Everything'>
                                    <option value="1" selected>Everything</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="w-full rounded-md bg-white px-10 py-10 m-4">
                        <div className="flex">
                            <Image
                                src="/profile/profile.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            <p><strong>Marina Valentine</strong> <span>Icon </span> replied to the topic. <strong>Welcome to the cosplayers group Forum! In the cos
                            players group forum</strong></p>
                        </div>
                        <p className='text-sm px-2 py-2 ml-10'>1 year Ago</p>
                        <p className='text-md px-2 py-2 ml-0 pb-5'>Hello Everyone!</p>
                        <hr />
                        <div className="flex justify-between m-2 items-center">
                            <h2 className="text-lg">&#128516;</h2>
                            <div className='flex'>
                                <p className='px-2 py-2'>0 Comments</p>
                                <p className='px-2 py-2'>0 Shares</p>
                            </div>

                        </div>
                    </div>
                    <div className="w-full rounded-md bg-white px-10 py-10 m-4">
                        <div className="flex">
                            <Image
                                src="/profile/profile.png"
                                width={50}
                                height={50}
                                alt="Picture of the author"
                            />
                            <p><strong>Marina Valentine</strong> <span>Icon </span> replied to the topic. <strong>Welcome to the cosplayers group Forum! In the cos
                            players group forum</strong></p>
                        </div>
                        <p className='text-sm px-2 py-2 ml-10'>1 year Ago</p>
                        <p className='text-md px-2 py-2 ml-0 pb-5'>Hello Everyone!</p>
                        <hr />
                        <div className="flex justify-between m-2 items-center">
                            <h2 className="text-lg">&#128516;</h2>
                            <div className='flex'>
                                <p className='px-2 py-2'>0 Comments</p>
                                <p className='px-2 py-2'>0 Shares</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex justify-center col-span-3">
                    <div className="w-full">
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-4">
                            <h2><strong>Popular Groups</strong></h2>
                            <div className="pt-6">
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Sandra Strange</strong>
                                        <p>@sandra</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-col rounded-md bg-white px-10 py-10 m-4">
                            <p><strong>Badges</strong></p>
                            <div className='pt-6'>
                                <div className="flex">
                                    <Image
                                        src="/profile/profile.png"
                                        width={50}
                                        height={50}
                                        alt="Picture of the author"
                                    />
                                    <div className="flex flex-col text-sm">
                                        <strong className="inline-block">Globe Trotter</strong>
                                        <p>Has joined at least 10 different groups.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}