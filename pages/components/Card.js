export default function Card({ children, headline, text }) {
  return (
    <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl flex flex-col">
      <h3 className="font-bold text-2xl pb-5">{headline}</h3>
      <p className="mb-8">{text}</p>
      {children}
    </main>
  )
}