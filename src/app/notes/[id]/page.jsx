"use client"
import { useNotes } from '../NotesContext'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import NoteDetail from '@/app/components/NoteDetail'


export default function page() {
  const { id } = useParams()
  const { getNoteById, deleteNote } = useNotes()

  const nota = getNoteById(id)

  const router = useRouter()

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this note?')) {
      deleteNote(id)
      router.push('/notes')
    }
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-blue-900">
      <NoteDetail note={nota} />

      <button onClick={handleDelete} className="absolute top-50 right-55 bg-red-600 text-white p-2 rounded-md">
        Delete Note
      </button>
    </div>
  )
}