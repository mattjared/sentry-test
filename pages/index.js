import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as Sentry from "@sentry/react";

export default function Home() {

  const errorOnPurpose = () => {
    try {
      aFunctionThatWillErr();
    } catch (err) {
      Sentry.captureException(err);
    }
  }
  return (
    <div className="body-bg min-h-screen pt-20 pb-6 px-2 ">
      <header class="max-w-lg mx-auto">
        <a href="#">
          <h1 class="text-4xl font-bold text-white text-center">👋🏻 Hello Sentry Team!</h1>
        </a>
      </header>
      <main class="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl flex">
        <section>
          <h3 class="font-bold text-2xl pb-5">💯 Sentry React Test</h3>
          <button class="bg-purple-600 blog hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Throw Sentry Error</button>
        </section>          
      </main>
      <footer class="max-w-lg mx-auto flex justify-center text-white">
        <a href="#" class="hover:underline">Contact</a>
        <span class="mx-3">•</span>
        <a href="#" class="hover:underline">Privacy</a>
      </footer>
    </div>
  )
}
