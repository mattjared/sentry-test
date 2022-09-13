import * as Sentry from "@sentry/react";
import Card from "./components/Card";
import Button from "./components/Button";
// import { useEffect, useState } from 'react';

export default function Home() {
  // const [showErrorCard, setShowErrorCard] = useState(false);

  // const errorOnPurpose = () => {
  //   setShowErrorCard(true);
  //   try {
  //     aFunctionThatWillErr();
  //   } catch (err) {
  //     Sentry.captureException(err);
  //     Sentry.captureMessage(`${err} error thrown at ${new Date().toUTCString()}`);
  //   }
  // }
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowErrorCard(false);
  //   }, 30000);
  //   return () => clearTimeout(timer);
  // }, [showErrorCard]);
  return (
    <>
      <Card headline="Standings" text="Hey team, click the button below to throw an error."  >
        <Button text="Get Data" />
      </Card>
      
    </>
  )
}
