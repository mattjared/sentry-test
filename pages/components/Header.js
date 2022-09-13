import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-lg mx-auto">
      <Link href="/">
        <h1 className="text-4xl font-bold text-white text-center">👋🏻 Hello Sentry Team!</h1>
      </Link>
    </header>
  )
}