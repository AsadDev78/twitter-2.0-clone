import React, { useState } from 'react'
import * as Icons from "@heroicons/react/24/outline";

export const TweetBox = () => {
    const [input,setInput] = useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
        <img
            className='w-14 h-14 rounded-full mt-4 object-cover'
            src='https://links.papareact.com/gll'
        />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="What's happening?" className=' h-24 w-full text-xl placeholder:text-xl outline-none'/>
                <div className='flex items-center'>
                    <div className='text-twitter flex space-x-2 flex-1'>
                        <Icons.PhotoIcon className='w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>
                        <Icons.MagnifyingGlassCircleIcon className='w-5 h-5'/>
                        <Icons.FaceSmileIcon className='w-5 h-5'/>
                        <Icons.CalendarIcon className='w-5 h-5'/>
                        <Icons.MapPinIcon className='w-5 h-5'/>
                    </div>
                    <button disabled={!input} className='bg-twitter text-white font-bold rounded-full px-5 py-2 disabled:opacity-40'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}
