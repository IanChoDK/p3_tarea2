import z from "zod";

export const notesSchema = z.object({
    title: z.string().min(1, "El titulo es obligatorio").max(40, "El titulo debe tener menos de 40 caracteres"),
    content: z.string().min(10, "El minimo requerido es al menos de 10 caracteres"),
    ejemplo: z.string().optional(),
    categoryId: z.string().min(1, "debe seleccionar una categoria"),
})