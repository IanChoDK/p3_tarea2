"use client"
import { useState } from 'react'
import { useNotes } from '../NotesContext'
import { useRouter } from 'next/navigation'
import { categories } from '@/lib/notes'

import React from 'react'

function CreateNotePage() {
  const router = useRouter()
  const { addNote } = useNotes()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    ejemplo: '',
    category_id: '1'
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.title || !formData.content) {
      alert('Title and content are required')
      return
    }

    addNote(formData)
    router.push('/notes')
  }

  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-blue-900'>
      <section className='flex p-20 justify-center items-center w-200'>
        <form className="flex flex-col flex-1  p-6 rounded-lg bg-amber-500 font-sans">

          <p className="text-white text-lg font-semibold">Create Note</p>

          <div className='flex flex-col gap-2'>
            <input 
              type="text" 
              placeholder='Titulo' 
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500'
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <select className='p-2 border border-white bg-amber-500 rounded-md my-4' value={formData.category_id} onChange={(e) => setFormData({ ...formData, category_id: parseInt(e.target.value) })}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
            </div>

          <div className='flex flex-col gap-2'>
            <textarea 
              placeholder='Content' 
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10} 
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <textarea 
              placeholder='Ejemplo de uso (opcional)' 
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10}
              value={formData.ejemplo}
              onChange={(e) => setFormData({ ...formData, ejemplo: e.target.value })}
           />
          </div>

          <button onClick={handleSubmit} className='bg-amber-700 text-white p-2 rounded-md'>Save</button>

        </form>
      </section>
    </div>
  )
}

export default CreateNotePage