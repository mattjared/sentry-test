import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-lg mx-auto">
      <h1 className="text-4xl mb-4 font-bold text-white text-center">👋🏻 Hello Sentry Team!</h1>
      <nav className="flex justify-center text-white">
        <Link href="/">
          <a className="hover:underline">Home</a>
        </Link>
        <span className="mx-3">•</span>
        <Link href="/scores" >
          <a className="hover:underline">Scores</a>
        </Link>
        <span className="mx-3">•</span>
        <Link href="/standings">
          <a className="hover:underline">Standings</a>
        </Link>
      </nav>
    </header>
  )
}