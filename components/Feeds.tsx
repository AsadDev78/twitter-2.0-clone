import React from 'react'
import * as Icons from '@heroicons/react/24/outline'
import { TweetBox } from './TweetBox'

export const Feeds = () => {
  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-bold p-5 pb-0'>Home</h1>
            <Icons.ArrowPathIcon className='mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125'/>
        </div>

        <TweetBox/>
    </div>
  )
}
