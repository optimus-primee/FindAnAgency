import Head from "next/head";
import { GetStaticProps } from "next";
import Link from "next/link";

export default function Test({ data }: DataProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-8 text-5xl font-semibold text-center font-raleway underline underline-offset-4 text-slate-600">
        Blog Container
      </div>
      <main className="w-full px-5 my-5 mx-auto lg:w-8/12 grid lg:grid-cols-3 grid-cols-1 gap-12 lg:p-10 font-raleway text-lg text-slate-600">
        {data.map((task) => (
          <div key={task.id}>
            <h5>{task.data.name}</h5>
            <h5>{task.data.about}</h5>
            <h5>{task.data.website}</h5>
          </div>
        ))}
      </main>
    </>
  );
}