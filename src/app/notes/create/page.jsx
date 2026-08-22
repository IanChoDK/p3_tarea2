"use client"
import { useState } from 'react'
import { useNotes } from '../../context/NotesContext'
import { useRouter } from 'next/navigation'
import Axios from 'axios'

import React from 'react'
import axios from 'axios'

function CreateNotePage() {
  const router = useRouter()

  const { categories } = useNotes()
  const { addNote, getDynamicCategories } = useNotes()

  const [tema, setTema] = useState("")
  const [loading, setLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    ejemplo: '',
    categoryId: '1'
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

  const handleAutoFill = async (e) => {
    e.preventDefault()

    if (!tema || loading) return
    setLoading(loading)
    try {

      const response = await axios.post("/api/generate-note", { tema })

      setFormData({
        title: response.data.result.title,
        content: response.data.result.content,
        ejemplo: response.data.result.ejemplo,
      })

      console.log(response)
    } 
    catch (err) {
      console.error(err)
    } 
    
    finally { 
      setLoading(false) 
    }
  }

  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-blue-900'>
      <section className='flex p-20 justify-center items-center w-200'>
        <form className="flex flex-col flex-1  p-6 rounded-lg bg-amber-500 font-sans">

          <p className="text-white text-lg font-semibold">Create Note</p>

          <div className='mt-6 p-4 rounded border border-b-amber-500 bg-amber-600'>
            <label className='text mr-5 text-s font-bold tracking-wider'>Itec Copilot</label>
            <input 
                type='text'
                className='flex-1 p-2 bg-black rounded-md mr-5 w-auto'
                value={tema}
                onChange={(e) => setTema(e.target.value)}
              />
              <button
                onClick={handleAutoFill}
                type='button'
                className='bg-amber-700 text-white p-2 rounded-md disabled:opacity-50 cursor-pointer'
              >
                Generar
              </button>
          </div>

          <div className='flex flex-col gap-2'>
            <input 
              type="text" 
              placeholder='Titulo'
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500'
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <p className="text-white flex flex-1 pt-2">Categoria</p>

          <div className='flex flex-col gap-2'>
            <select className='p-2 border border-white bg-amber-500 rounded-md my-4' value={formData.categoryId} onChange={(e) => setFormData({ ...formData, categoryId: String(e.target.value) })}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
            </div>

          <div className='flex flex-col gap-2'>
            <textarea 
              placeholder='Content' 
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10} 
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <textarea 
              placeholder='Ejemplo de uso (opcional)' 
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10}
              value={formData.ejemplo}
              onChange={(e) => setFormData({ ...formData, ejemplo: e.target.value })}
           />
          </div>

          <button onClick={handleSubmit} type='submit' className='bg-amber-700 text-white p-2 rounded-md cursor-pointer'>Save</button>

        </form>
      </section>
    </div>
  )
}

export default CreateNotePage