async function getData() {
  const res = await fetch(
    `http://${process.env.PC_SERVICE_SERVICE_HOST}:${process.env.PC_SERVICE_SERVICE_PORT}` ||
      '',
    {
      cache: 'no-store',
    },
  );
  const body = await res.text();
  return body;
}
export default async function Home() {
  const data = await getData();
  return (
    <main>
      Hello World
      {data}
    </main>
  );
}
