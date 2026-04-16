import Link from 'next/link'
import React from 'react'

export default function page() {

    return (
    <div className="flex flex-1 items-center justify-center bg-blue-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-5xl font-semibold tracking-tight text-black dark:text-zinc-50">
                        About
                    </h1>
                </div>

                <div>
                    <h1 className='font-semibold text-lg text-gray-300'>
                        Esta es mi primer app con
                    </h1>
                    <h2 className='font-semibold text-2xl text-amber-500 text-center'>Next JS</h2>
                    <p className='text-gray-300 text-center'> &copy; IanCho</p>
                </div>

            </main>
        </div>
    )
}