import classNames from 'classnames';
import Head from 'next/head';

import { MainFeature } from '../features/main-feature/main-feature';
export default function Home() {
  const mainClassNames = classNames('dark:bg-gray-500');
  return (
    <>
      <Head>
        <title>PROJECT SHOWROOM - EMRE MUTLU & ERCAN AKALAR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={mainClassNames}>
        <MainFeature />
      </main>
    </>
  );
}
