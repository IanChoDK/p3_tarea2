"use client"
import { useState } from 'react'
import { useNotes } from '../../context/NotesContext'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { notesSchema } from '@/app/validations/NotesSchema'

import React from 'react'
import axios from 'axios'

function CreateNotePage() {
  const router = useRouter()

  const { addNote, getDynamicCategories } = useNotes()

  const categories = getDynamicCategories()

  const [tema, setTema] = useState("")
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(notesSchema),
    defaultValues: {
      title: "",
      content: "",
      ejemplo: "",
      categoryId: "",
    }
  })
  
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

  const onSubmit = (data) => {
    addNote(data)
    router.push("/notes")
  }

  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-blue-900'>
      <section className='flex p-20 justify-center items-center w-200'>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1  p-6 rounded-lg bg-amber-500 font-sans">

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
            <p className='text-white flex flex-1 pt-2'>Titulo <label className='text-sm flex flex-1 pl-2 text-red-600 animate-pulse font-black'>{errors.title && errors.title.message}</label></p>
            <input 
              type="text" 
              placeholder='Titulo'
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500'
              // value={formData.title}
              // onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              {...register("title")}
            />
          </div>

          <p className="text-white flex flex-1 pt-2">Categoria</p>

          <div className='flex flex-col gap-2'>
            <select 
              className='p-2 border border-white bg-amber-500 rounded-md my-4' 
              // value={formData.categoryId} 
              // onChange={(e) => setFormData({ ...formData, categoryId: String(e.target.value) })}
              {...register("categoryId")}
            >

              <option disabled={true} > Select Category</option>
              
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.title}</option>
              ))}
            </select>
            </div>

          <div className='flex flex-col gap-2'>
            <p className='text-white flex flex-1 pt-2'>Contenido <label className='text-sm flex flex-1 pl-2 text-red-600 animate-pulse font-black'>{errors.content && errors.content.message}</label></p>
            <textarea 
              placeholder='Content' 
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10} 
              // value={formData.content}
              // onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              {...register("content")}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <textarea 
              placeholder='Ejemplo de uso (opcional)' 
              spellCheck={false}
              className='p-2 my-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' rows={10}
              // value={formData.ejemplo}
              // onChange={(e) => setFormData({ ...formData, ejemplo: e.target.value })}
              {...register("ejemplo")}
           />
          </div>

          <button type='submit' className='bg-amber-700 text-white p-2 rounded-md cursor-pointer'>Save</button>

        </form>
      </section>
    </div>
  )
}

export default CreateNotePage