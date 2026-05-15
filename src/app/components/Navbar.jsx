import Link from "next/link";

export default function Navbar() {
    
    return (
        <nav className="sticky top-0 z-50 w-full h-16 flex items-center justify-between bg-blue-950 text-white">
          <h1 className="text-lg font-bold pl-8">App de notas</h1>
          <div className="ml-10 flex gap-4">
            <Link href={"/"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Home
            </Link>
            <Link href={"/notes"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Notas
            </Link>
            <Link href={"/updates"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              Updates
            </Link>
            <Link href={"/about"} className="bg-blue-950 hover:bg-blue-800 hover:scale-110 transition px-3 py-1 rounded-md">
              About
            </Link>
            <Link href={"/profile"} className="px-1 py-1 mr-8 rounded-full bg-amber-400 hover:scale-110 transition">
              <img src="https://shared.akamai.steamstatic.com/community_assets/images/items/4374420/0e404f3215f68f750381e31a9c9a253630c6c3c4.gif" alt="imagen_de_perfil" className="size-7 rounded-full hover:scale-140 transition"/>
            </Link>
          </div>
        </nav>
    )
}