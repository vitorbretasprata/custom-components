import { useRef, useState } from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { Button, DropDown, MultiSelect } from "src/components/Inputs";
import { ToastPortal } from "src/components/Toast";
import { AsyncComponent, FetchComponent, Skeleton } from "src/components/Example";

import { useDebounce } from "src/hooks";

export default function Home() {
  const toastRef = useRef(null);

  const [mode, setMode] = useState('info');
  const [count, setCount] = useState(0);
  const [selectedArray, setSelectedArray] = useState([]);
  const [selectOption, setSelectOption] = useState(["First Option", "Secound Option", "Third Option", "Fourth Option"]);

  useDebounce(() => {
    setCount(0)
    alert(`Number of time you clicked before hit the delay: ${count}`)
  }, 1000, [count]);

  const addToast = () => {
    toastRef.current.addMessage({ mode, message: 'Test of Toast Notification.', id: '' });
  }

  const handleSelection = index => e => {
    let removeElement = selectOption[index];

    let newArr = [...selectedArray, removeElement];
    
    setSelectOption(() => selectOption.filter(s => s != removeElement));
    setSelectedArray(newArr);
  }

  const handleUnselection = index => e => {
    let removeElement = selectedArray[index];

    let newArr = [...selectOption, removeElement];
    
    setSelectedArray(() => selectedArray.filter(s => s != removeElement));
    setSelectOption(newArr);
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
            <Button click={addToast} btnName="Toast Notification" />
            <Button click={addToast} btnName="Pop up" />
            <Button click={addToast} btnName="Sidebar" />
            <Button click={() => setCount(count + 1)} btnName="Debounce" />
            <DropDown buttonName="Drop Down">
              <p>Content 1</p>
              <p>Content 1</p>
              <p>Content 1</p>
            </DropDown>
            <MultiSelect 
              buttonName="Muti Select"
              selectOptions={selectOption}
              selectedOptions={selectedArray}
              onSelect={handleSelection}
              onUnselect={handleUnselection}
            />
              

          </div>  
              

          <AsyncComponent />
          <FetchComponent />
          <Skeleton />
      </main>
      
    </div>
  )
}
