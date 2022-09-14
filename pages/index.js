import * as Sentry from "@sentry/react";
import Card from "./components/Card";
import Button from "./components/Button";
import  { useEffect, useState } from 'react';
import Link from "next/link";

export default function Home() {
  const [showErrorCard, setShowErrorCard] = useState(false);

  const errorOnPurpose = () => {
    setShowErrorCard(true);
    try {
      aFunctionThatWillErr();
    } catch (err) {
      Sentry.captureException(err);
      Sentry.captureMessage(`${err} error thrown at ${new Date().toUTCString()}`);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorCard(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, [showErrorCard]);
  return (
    <>
      <Card headline="Part 1" text="Hey team, click the button below to throw an error."  >
        <Button text="Throw Sentry Error" funcProp={errorOnPurpose} />
        {showErrorCard && (
          <div className="p-4 mt-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
            <p>A Sentry error was thrown
              <Link href="https://sentry.io/organizations/friday-software/issues/" passHref>
                <a target="_blank" className="font-bold hover:underline">{" "}check it out here</a>
              </Link>
            </p>
          </div>
        )}
      </Card>
      <Card headline="Part 2" text="Check out some other pages to see performance monitoring">
        <div className="text-center	font-bold text-xl">
          <Link href="/posts">
            <a className="text-violet-700 mr-6 hover:underline">Posts</a>
          </Link>
          <Link href="/photos">
            <a className="text-fuchsia-700 ml-6 hover:underline">Photos</a>
          </Link>
        </div>
      </Card>
    </>
  )
}
