import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-blue-900'>
      <Link href={"/notes"} className="mb-4 text-white font-semibold">
        &larr; Back to Notes
      </Link>
      <section className='flex p-20 justify-center items-center w-200'>
        <form className="flex flex-col flex-1  p-6 rounded-lg bg-amber-500 font-sans">

          <p className="text-white text-lg font-semibold">Create Note</p>

          <input type="text" placeholder='Titulo' className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' />
          <textarea placeholder='Content' className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10} />
          <button className='bg-amber-700 text-white p-2 rounded-md'>Save</button>

        </form>
      </section>
    </div>
  )
}

export default page