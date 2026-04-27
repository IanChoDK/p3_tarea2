import { getNotes } from '@/lib/notes'
import Link from 'next/link'
import React from 'react'
import NoteCard from '../components/NoteCard'

export default function page() {

  // funcion fetch notas => me trae un array de notas [{id: 1, title: "Nota 1", content: "Contenido de la nota 1"}, {id: 2, title: "Nota 2", content: "Contenido de la nota 2"}]
  const notes = getNotes()
  return (
    <div className="flex flex-1 bg-blue-900">
      <main className="flex flex-1 w-full overflow-x-auto flex-col items-center py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Notas
          </h1>
          <Link href={"/notes/create"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            Create Note
          </Link>
        </div>

        {/* Seccion que muestre mis notas */}
        <div className='flex flex-wrap gap-6 justify-center'>
          {notes.map((note, key) => (
            <NoteCard key={key} note={note} />
          ))}
        </div>
      </main>
    </div>
  )
}