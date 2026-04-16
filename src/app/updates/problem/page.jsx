import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
    <div className="flex items-center justify-center bg-blue-900">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
                Informar problema
              </h1>
            </div>
  
            {/* Seccion para informar problemas */}
            <section className='w-full h-auto my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
              <p className='text-lg font-semibold'>¿Encontraste un problema?</p>
              <p>Si encontraste un problema en la app por favor rellena el siguiente formulario:</p>
                <form className='flex flex-col gap-4'>
                  <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" className='p-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' placeholder="Tu nombre" />
                  <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" className='p-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' placeholder="Tu correo electrónico" />
                  <label htmlFor="problem">Describe el problema:</label>
                    <textarea id="problem" rows={4} className='p-2 bg-amber-100 rounded-xl text-black placeholder:text-amber-500 border border-amber-500 focus:outline-none focus:ring-2 focus:amber-500' placeholder="Describe el problema que encontraste"></textarea>
                  <button type="submit" className='flex h-12 w-50 items-center justify-center gap-2 rounded-full font-semibold bg-amber-800 text-white transition-colors hover:bg-amber-400'>
                    Enviar
                  </button>
                </form>
            </section>
          </main>
        </div>
      )
    }