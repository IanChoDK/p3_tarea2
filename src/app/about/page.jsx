import Link from 'next/link'
import React from 'react'

export default function page() {

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
                <div className="flex flex-col items-center gap-6 text-center sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        About
                    </h1>
                </div>

                <div>
                    <h1 className='font-semibold text-lg text-gray-300'>
                        Esta es mi primer app con Next JS
                    </h1>
                </div>

            </main>
        </div>
    )
}