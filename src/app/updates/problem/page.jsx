import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
          <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                Informar problema
              </h1>
            </div>
  
            {/* Seccion para informar problemas */}
            <section className='w-full h-120 my-8 p-6 rounded-lg flex flex-col bg-zinc-800 text-white justify-between'>
              <p className='text-lg font-semibold'>¿Encontraste un problema?</p>
              <p>Si encontraste un problema en la app por favor rellena el siguiente formulario:</p>
                <form className='flex flex-col gap-4'>
                  <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" className='bg-zinc-600 rounded-xl text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder="Tu nombre" />
                  <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" className='bg-zinc-600 rounded-xl text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder="Tu correo electrónico" />
                  <label htmlFor="problem">Describe el problema:</label>
                    <textarea id="problem" rows={4} className='bg-zinc-600 rounded-xl text-white placeholder:text-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder="Describe el problema que encontraste"></textarea>
                  <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md'>
                    Enviar
                  </button>
                </form>
            </section>
          </main>
        </div>
      )
    }