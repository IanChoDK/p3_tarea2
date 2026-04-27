export default function UpdateDetail( { update } ) {
    return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-blue-900">
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight dark:text-zinc-50">
            {update.title}
          </h1>
          <p className='text-gray-400'>
            {update.fecha}
          </p>
        </div>

        <p className='py-5 text-justify'>
          {update.content}
        </p>

        <section className='w-full h-64 my-8 p-4 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
          <p className='text-lg font-semibold'>Actualizaciones en desarollo</p>
            <ul className='text-white'>
                <li>Añadir navbar</li>
                <li>Mejorar el diseño de las paginas</li>
                <li>Añadir footer</li>
            </ul>
        </section>

      </main>
    )
}