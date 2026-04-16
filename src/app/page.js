import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-blue-900">
      <main className="flex flex-1 flex-col items-center justify-between py-32 px-16 bg-blue-900 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left bg-amber-500 p-10 rounded-lg">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            Bienvenido a la app de notas.
          </h1>
          <p className="max-w-md text-xl leading-8 dark:text-zinc-50">
            Creamos una nota?
          </p>
          <div className="flex flex-col items-center gap-4"> 
            <Link href={"/notes/create"} className="flex h-12 w-75 items-center justify-center gap-2 rounded-full bg-amber-200 px-5 text-background transition-colors  dark:hover:bg-amber-600">
              Crear Nota
            </Link>
            <Link href={"/updates"} className="flex h-10 w-35 items-center justify-center gap-2 rounded-full bg-amber-300 px-5 text-background transition-colors dark:hover:bg-amber-600">
              Ver Updates
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
