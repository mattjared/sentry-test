/* eslint-disable @next/next/no-img-element */
import * as Sentry from "@sentry/react";
import Card from "./components/Card";
import { useEffect, useState } from 'react';
import Image from "next/image";

export default function Photos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchPhotos() {
      const request = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=100")
      const res = await request.json()
      setData(res)
    }
    fetchPhotos();
  }, [data])
  return (
    <Card headline="Photos" text="Hey team, here are 100 photos for you to check out an API call happening"  >
      {data.map((d) =>
        <div key={d.title} className="mb-6">
          <h2 className="text font-bold">{d.title}</h2> 
          <img src={d.url} alt={d.title} width="200" height="100" />
        </div>
      )}
    </Card>
  )
}

