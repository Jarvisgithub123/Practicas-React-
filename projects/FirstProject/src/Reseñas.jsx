export function Reseñas() {
  return (
    <section className="flex justify-center bg-gradient-to-br from-pink-50 to-fuchsia-100 p-8 rounded-2xl shadow-lg max-w-dvh mx-auto mt-10">
        <form className="flex flex-col w-full space-y-4">
            <h2 className="text-2xl font-bold text-fuchsia-700 text-center">
            Reseñas
            </h2>

            {/* Textarea */}
            <textarea
            rows="4"
            placeholder="Escribe tu comentario aquí..."
            className="w-full border border-fuchsia-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:border-transparent resize-none shadow-sm"
            ></textarea>

            {/* Botón */}
            <button
            type="submit"
            className="self-end bg-fuchsia-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-fuchsia-600 hover:shadow-lg transition duration-300 cursor-pointer"
            >
            Enviar
            </button>
        </form>
    </section>
  )
}
