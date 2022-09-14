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
        <Link href="/posts" >
          <a className="hover:underline">Posts</a>
        </Link>
        <span className="mx-3">•</span>
        <Link href="/photos">
          <a className="hover:underline">Photos</a>
        </Link>
      </nav>
    </header>
  )
}