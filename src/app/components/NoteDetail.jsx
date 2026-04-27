export default function NoteDetail({ note }) {
    return (
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start justify-between py-32 px-16 bg-blue-900">
        <div className="flex flex-col items-center gap-6 py-2 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight dark:text-zinc-50">
            {note.title}
          </h1>
        </div>

        <p className='text-justify'>
          {note.content}
        </p>

        {/* Ejemplo de como funcionan los arrays */}
        <section className='w-full min-h-64 my-8 p-4 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
          <p className='text-lg font-semibold'>Ejemplo Arrays</p>
          <pre className='text-sm text-white bg-black rounded p-2'>
            <code >
              {note.ejemplo}
            </code>
          </pre>
        </section>

      </main>
    )
}