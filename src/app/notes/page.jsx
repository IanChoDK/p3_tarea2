import Link from 'next/link'
import React from 'react'

export default function page() {

  // funcion fetch notas => me trae un array de notas [{id: 1, title: "Nota 1", content: "Contenido de la nota 1"}, {id: 2, title: "Nota 2", content: "Contenido de la nota 2"}]

  return (
    <div className="flex flex-1 items-center justify-center bg-blue-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Notas
          </h1>
          <Link href={"/notes/create"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            Create Note
          </Link>
        </div>

        {/* Seccion que muestre mis notas */}
        <div className='flex flex-rowflex-wrap gap-20 justify-center mt-8'>
          <section className='w-64 h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
            <div>
              <h1 className='font-semibold text-lg'>Componentes</h1>
              <p>Notas sobre como funcionan los componentes en NEXT</p>
            </div>
            <Link href={"/notes/1"} className='w-20 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Ver nota </Link>
          </section>

          <section className='w-64 h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
            <div>
              <h1 className='font-semibold text-lg'>Rutas</h1>
              <p>Notas sobre como funcionan los componentes en NEXT</p>
            </div>
            <Link href={"/notes/2"} className='w-20 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Ver nota </Link>
          </section>

          <section className='w-64 h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
            <div>
              <h1 className='font-semibold text-lg'>Layouts</h1>
              <p>Notas sobre como funcionan los componentes en NEXT</p>
            </div>
            <Link href={"/notes/3"} className='w-20 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Ver nota </Link>
          </section>
        </div>

      </main>
    </div>
  )
}