import Link from 'next/link'
import React from 'react'

export default function page() {

  return (
    <div className="flex items-center justify-center bg-blue-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Updates
          </h1>
        </div>

        {/* Seccion que muestra updates */}
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Actualizacion menor</h1>
            <p>Actualizaciones sobre estilos en la app</p>
          </div>
          <Link href={"/updates/1"} className='w-50 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Leer actualizacion completa </Link>
        </section>

        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Ruta anidada y dinamica</h1>
            <p>Ruta anidada y dinamica agregadas</p>
          </div>
          <Link href={"/updates/2"} className='w-50 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Leer actualizacion completa </Link>
        </section>

        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
          <div>
            <h1 className='font-semibold text-lg'>Nueva ruta</h1>
            <p>Actualizaciones sobre la nueva ruta agregada</p>
          </div>
          <Link href={"/updates/3"} className='w-50 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Leer actualizacion completa </Link>
        </section>

        <Link href={"/updates/problem"} className="flex h-12 w-50 items-center justify-center gap-2 rounded-full bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">
            Informar problema
        </Link>
      </main>
    </div>
  )
}