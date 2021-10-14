import { useRef, useState } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Button } from "src/components/Inputs";
import { ToastPortal } from "src/components/Toast";

export default function Home() {
  const toastRef = useRef(null);

  const [mode, setMode] = useState('info');

  const addToast = () => {
    toastRef.current.addMessage({ mode, message: 'Test of Toast Notification.', id: '' });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My custom components</title>
        <meta name="description" content="My custom components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>My custom components</h1>
      <h5>These are components I created to use on my project using the minimum of third party libraries</h5>

      <main className={styles.main}>
        <ToastPortal ref={toastRef} autoClose={true} autoCloseTime={5000} />
        <div className={styles.grid}>
          <Button click={addToast} name="Toast Notification" />
          <Button click={addToast} name="Pop up" />
          <Button click={addToast} name="Sidebar" />
        </div>
      </main>

      
    </div>
  )
}
