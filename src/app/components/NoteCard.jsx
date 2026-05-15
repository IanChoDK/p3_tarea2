import Link from 'next/link'

export default function NoteCard( { note } ) { 
    return (
        <section className='w-64 h-64 my-8 p-6 rounded-lg flex flex-col bg-amber-500 text-black justify-between'>
        <div>
            <h1 className='font-semibold text-lg'>{note.title}</h1>
            <p>{note.content.slice(0, 75)}...</p>
        </div>
        <Link href={`/notes/${note.id}`} className='w-20 text-center rounded-md text-sm text-white bg-amber-600 transition-colors hover:bg-amber-700'>Ver nota </Link>
        </section>
    )
}