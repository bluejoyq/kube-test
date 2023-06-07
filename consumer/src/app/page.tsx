'use client';
import { useEffect } from 'react';

export default function Home() {
  const hello = async () => {
    const res = await fetch(encodeURI('http://pc-service'));
    const body = await res.json();
    console.log(body);
  };
  useEffect(() => {
    hello();
  }, []);
  return <main>Hello World</main>;
}
