import React from 'react'
import Link from 'next/link'
import UpdateDetail from '@/app/components/UpdateDetail'

export default async function page({ params }) {

  const { id } = await params


  const update = {
    id: 1,
    title: "Actualizacion importante",
    content: "Los siguientes cambios estaran presentes en la app a partir de la actualizacion grande que llegara en mayo, para informarnos de un fallo o darnos tu opinion sobre la app, puedes ir a la seccion de informar problema",
    fecha: "2026-04-10"
  }

  return (
    <div className="flex flex-col flex-1 items-start justify-center font-sans dark:bg-blue-900">
      <UpdateDetail update={update} />
    </div>
  )
}