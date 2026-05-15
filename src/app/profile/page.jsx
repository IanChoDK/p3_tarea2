import { getProjects } from "@/lib/projects"

export default function Page() {
    const projects = getProjects()

    return (
        <main className="flex flex-col items-center bg-blue-900">
            <section className="flex flex-col max-w-3xl items-center p-10 gap-3 text-center bg-blue-900">
                <img 
                    src="https://shared.akamai.steamstatic.com/community_assets/images/items/4374420/0e404f3215f68f750381e31a9c9a253630c6c3c4.gif"
                    className="rounded-full size-40"
                    alt="imagen_de_perfil"
                />
                <h1 className="text-3xl font-semibold">IanCho</h1>
                <p className="text-gray-300"> Argentino 🇦🇷 </p>
                <p className="text-gray-300">Estudiante Desarollo de software en Instituto Tecnologico Rio Cuarto.</p>
            </section>

            <section className="flex flex-col max-w-3xl items-start p-10 gap-6">
                <h2 className="text-2xl font-semibold mb-4">Proyectos</h2>
                <div className="flex flex-col gap-4">
                    {projects.map((project) => (
                        <div key={project.id} className="p-4 bg-gray-800 rounded-lg">
                            <img src={project.image} alt={project.title} className="w-full object-cover rounded-lg size-30 pb-2 hover:scale-102 transition"/>
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}