import { getNoteById } from '@/lib/notes'
import React from 'react'
import Link from 'next/link'
import NoteDetail from '@/app/components/NoteDetail'


export default async function page({ params }) {

  const { id } = await params
  const nota = getNoteById(id)

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-blue-900">
      <NoteDetail note={nota} />
    </div>
  )
}