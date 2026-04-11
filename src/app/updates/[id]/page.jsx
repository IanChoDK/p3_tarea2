import React from 'react'
import Link from 'next/link'


export default async function page({ params }) {

  const { id } = await params

  // funcion buscar notas (localhost:3000/notes/{id}) => me trae un objeto nota {id: 1, title: "Nota 1", content: "Contenido de la nota 1"}

  const update = {
    id: 1,
    title: "Actualizacion importante",
    content: "Los siguientes cambios estaran presentes en la app a partir de la actualizacion grande que llegara en mayo, para informarnos de un fallo o darnos tu opinion sobre la app, puedes ir a la seccion de informar problema",
    fecha: "2026-04-10"
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {update.title}
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>
            {update.fecha}
          </p>
        </div>

        <p className='text-justify'>
          {update.content}
        </p>

        <section className='w-full h-64 my-8 p-4 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
          <p className='text-lg font-semibold'>Actualizaciones en desarollo</p>
            <ul className='list-disc list-inside text-sm text-white'>
                <li>Añadir navbar</li>
                <li>Mejorar el diseño de las paginas</li>
                <li>Añadir footer</li>
            </ul>
        </section>

      </main>
    </div>
  )
}