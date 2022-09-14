import * as Sentry from "@sentry/react";
import Card from "./components/Card";
import Button from "./components/Button";
import { useEffect, useState } from 'react';

export default function Posts() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const request = await fetch("https://jsonplaceholder.typicode.com/posts")
      const res = await request.json()
      setData(res)
    }
    fetchPosts()
  }, [data])
  return (
    <Card headline="Posts" text="Hey team, here are 100 posts for you to check out an API call happenings"  >
      {data.map((d) => 
        <div key={d.id} className="mb-6">
          <h2 className="text font-bold">{d.title}</h2> 
          <p>{d.body}</p> 
        </div>
      )}
    </Card>
  )
}
