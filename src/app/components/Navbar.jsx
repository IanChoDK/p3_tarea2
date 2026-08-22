"use client"
import Link from "next/link"
import { useState } from "react"
import ChatModal from "./ChatModal"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { useAuth } from "@clerk/nextjs"

export default function Navbar() {
    const [isChatOpen, setIsChatOpen] = useState(false)

    const { isLoaded, isSignedIn } = useAuth()

    return (
      <>
        <nav className="sticky top-0 z-50 w-full h-16 flex items-center justify-between bg-blue-950 text-white">
          <h1 className="text-lg font-bold pl-8">App de notas</h1>
          <div className="ml-10 flex gap-4">
            <Link href={"/"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Home
            </Link>
            <Link href={"/notes"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Notas
            </Link>
            <Link href={"/updates"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Updates
            </Link>
            <Link href={"/about"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              About
            </Link>

            <button
              className="bg-amber-400 hover:scale-110 transition px-3 py-1 rounded-md cursor-pointer"
              onClick={() => setIsChatOpen(true)}
              >
              Itec IA
            </button >

          { isLoaded && !isSignedIn && (
            <SignInButton>
              <button 
                className=" hover:scale-110 transition px-3 py-1 rounded-md cursor-pointer"
              >
                iniciar sesion
              </button>
            </SignInButton>
          ) }

          {
            isLoaded && isSignedIn && (
              <UserButton/>
            )
          }


          </div>
        </nav>

        <ChatModal 
          isOpen ={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      </>
    )
}