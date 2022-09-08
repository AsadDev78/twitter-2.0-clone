import React from 'react'
import { SidebarRow } from './SidebarRow'
import * as Icons from '@heroicons/react/24/outline'
export const SideBar = () => {
  return (
    <div className='flex col-span-2 flex-col items-center px-4 md:items-start'>
        <img className='m-3 h-10 w-10' src='https://links.papareact.com/drq' alt=''/>
        <SidebarRow Icon={Icons.HomeIcon} title='Home'/>
        <SidebarRow Icon={Icons.HashtagIcon} title='Explore'/>
        <SidebarRow Icon={Icons.BellIcon} title='Notification'/>
        <SidebarRow Icon={Icons.EnvelopeIcon} title='Message'/>
        <SidebarRow Icon={Icons.BookmarkIcon} title='Bookmarks'/>
        <SidebarRow Icon={Icons.RectangleStackIcon } title='Lists'/>
        <SidebarRow Icon={Icons.UserIcon } title='Sign In'/>
        <SidebarRow Icon={Icons.EllipsisHorizontalCircleIcon } title='More'/>
    </div>
  )
}
