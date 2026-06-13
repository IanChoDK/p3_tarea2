import { NextResponse } from "next/server"

export async function POST(request) {

  try {
    const { tema } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY

    const promptCompleto = `
        Genera una nota educativa sobre el siguiente tema: "${tema}
        debes responder UNICAMENTE con un objeto JSON valido que contenga exactamente estas tres llaves 
        (no agregues texto antes ni despues, solo el JSON):
        {
            "title": "un titulo corto y profesional",
            "content": "una explicacion conceptual breve en formato texto plano",
            "ejemplo": "un bloque de codigo de ejemplo practico",
        }
    `
    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent?key=${apiKey}`
    
    if (!apiKey) {
        return NextResponse.json({
            error: "API key no configurada"}, { status: 500 })
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            contents: [{ parts: [{ text: promptCompleto }] }]
        })
    })

    const data = await response.json()

    if (!response.ok || data.error) {
        console.error("Error en la respuesta de la API:", data.error)
        return NextResponse.json({
            error: `Error en la API de Gemini: ${data.error?.message}` || "Peticion invalida"
        }, { status: response.status || 400 })
    }

    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}"

    const cleanJson = rawText.replace(/```json```/g , "").trim() // Elimina posibles etiquetas de codigo y espacios en blanco

    const noteData = JSON.parse(cleanJson)

    console.log(rawText)

    return NextResponse.json({
        success: true,
        result: noteData
    })
    } catch (err) {
        console.error(`Error critico en la ruta /api/ai ${err}`)
        return NextResponse.json({ error: err }, { status: 500 })
    }
}