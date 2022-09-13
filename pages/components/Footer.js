import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-lg mx-auto flex justify-center text-white">
      <Link href="https://mattjared.github.io/" passHref>
        <a target="_blank" className="hover:underline">Made by Matt Jared</a>
      </Link>
      <span className="mx-3">•</span>
      <Link href="https://github.com/mattjared/sentry-test" passHref>
        <a target="_blank" className="hover:underline">Code on Github</a>
      </Link>
      <span className="mx-3">•</span>
      <span>Copyright {new Date().getFullYear()}</span>
    </footer>
  )
}