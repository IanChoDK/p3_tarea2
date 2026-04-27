import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-30 flex items-center justify-center bg-blue-950 text-white mt-auto">
        <p className="text-sm">&copy; App de notas. Ibañez Ian, developer. </p>
            <div className="ml-4 flex items-start flex-col">
            <h3 className="text-sm font-semibold">PAGINAS PRINCIPALES</h3>
            <Link href={"/"} className="ml-4 hover:underline">
                Home
            </Link>
            <Link href={"/notes"} className="ml-4 hover:underline">
                Notas
            </Link>
            <Link href={"/updates"} className="ml-4 hover:underline">
                Updates
            </Link>
            </div>
        </footer>
    )
}