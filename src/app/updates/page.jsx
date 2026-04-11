import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Updates
          </h1>
        </div>

        {/* Seccion que muestra updates */}
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Actualizacion menor</h1>
            <p>Actualizaciones sobre estilos en la app</p>
          </div>
          <Link href={"/updates/1"} className='self- text-sm text-blue-500 hover:underline'>Leer actualizacion completa </Link>
        </section>

        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Ruta anidada y dinamica</h1>
            <p>Ruta anidada y dinamica agregadas</p>
          </div>
          <Link href={"/updates/2"} className='self- text-sm text-blue-500 hover:underline'>Leer actualizacion completa </Link>
        </section>

        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Nueva ruta</h1>
            <p>Actualizaciones sobre la nueva ruta agregada</p>
          </div>
          <Link href={"/updates/3"} className='self- text-sm text-blue-500 hover:underline'>Leer actualizacion completa </Link>
        </section>

        <Link href={"/updates/problem"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px- text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            Informar problema
        </Link>
      </main>
    </div>
  )
}