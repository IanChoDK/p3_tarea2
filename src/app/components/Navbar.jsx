import Link from "next/link";

export default function Navbar() {
    
    return (
        <nav className="w-full h-16 flex items-center justify-between bg-blue-950 text-white">
          <h1 className="text-lg font-bold pl-8">App de notas</h1>
          <div className="ml-10 flex gap-4">
            <Link href={"/"} className="bg-blue-950 hover:bg-blue-800 px-3 py-1 rounded-md transition-colors">
              Home
            </Link>
            <Link href={"/notes"} className="bg-blue-950 hover:bg-blue-800 px-3 py-1 rounded-md transition-colors">
              Notas
            </Link>
            <Link href={"/updates"} className="bg-blue-950 hover:bg-blue-800 px-3 py-1 rounded-md transition-colors">
              Updates
            </Link>
            <Link href={"/about"} className="bg-blue-950 hover:bg-blue-800 px-3 py-1 rounded-md transition-colors">
              About
            </Link>
          </div>
        </nav>
    )
}