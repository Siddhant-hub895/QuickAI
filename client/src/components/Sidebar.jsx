import {  Show, useClerk, useUser } from "@clerk/react";
import { Image, Eraser, House, SquarePen, Scissors, FileText, Users, Hash, LogOut } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from '@clerk/react'

const navItems = [
    { to: '/ai', label: 'Dashboard', Icon: House },
    { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
    { to: '/ai/blog-titles', label: 'blog titles', Icon: Hash },
    { to: '/ai/generate-images', label: 'generate images', Icon: Image},
    { to: '/ai/remove-background', label: 'remove background', Icon: Eraser },
    { to: '/ai/remove-object', label: 'remove object', Icon: Scissors },
    { to: '/ai/review-resume', label: 'review resume', Icon: FileText },
    { to: '/ai/community', label: 'community', Icon: Users },
]

function Sidebar({ sidebar, setSidebar }) {
     const { has } = useAuth()
    const { user } = useUser();
    const { signOut, openUserProfile } = useClerk();
    return (
        <div className={` w-60 p-4.5 bg-white border-r border-gray-200 flex flex-col
        justify-between items-center max-sm:absolute top-14 bottom-0
        ${sidebar ? 'translate-x-0' : 'max-sm:translate-x-full'} transition-all duration-300
        ease-in-out`}>
            <div className="my-7 w-full">
                <img src={user.imageUrl} alt="" className="w-13 rounded-full mx-auto" />
                <h1 className="mt-1 text-center">{user.fullName}</h1>
                <div>
                    {navItems.map(({to,label,Icon})=>(
                        <NavLink key={to} to={to} end={to === '/ai'} onClick={()=>setSidebar(false)}
                        className={({isActive}) => `px-3.5 py-2.5 flex items-center gap-3 rounded
                        ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] test-white' : ''}`} >
                            {({isActive})=>(
                                <>
                                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`}/>
                                {label}
                                </>
                            )}

                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="w-full border-t border-gray-200 flex items-center justify-between">
                <div onClick={openUserProfile} className="flex gap-2 items-center cursor-pointer">
                    <img src={user.imageUrl} className="w-8 rounded-full" alt=""/>
                    <div>
                        <h1 className="text-sm font-medium">{user.fullName}</h1>
                        <p className="text-xs text-gray-500">
                           {has?.({ plan: 'premium' }) ? 'Premium' : 'Free'}
                        </p>
                    </div>
                    <LogOut onClick={signOut} className="w-4.5 text-gray-400
                    hover:text-gray-700 transition cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;