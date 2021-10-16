import { useEffect, useState, useRef } from 'react';
import { useFetch } from "src/hooks";

import { Button } from "src/components/Inputs";
import styles from "src/styles/Home.module.css";

import Image from "next/image";

interface fetchProps {
    error: any,
    loading: boolean,
    value: Array<any>
}

function Skeleton() {

    const gridRef = useRef(null);
    const cardTemplateRef = useRef(null);
    
    const { error, loading, value } : fetchProps = useFetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
            method: 'GET'
        },
        []
    );

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            gridRef.current.append(cardTemplateRef.current.cloneNode(true));
        }
    }, [])

    useEffect(() => {
        if(!loading) {
            gridRef.current.innerHTML = '';

            value.slice(0, 10).forEach((v) => {
                const div = cardTemplateRef.current.cloneNode(true);
                div.querySelector('[data-title]').textContent = v.title;
                div.querySelector('[data-body]').textContent = v.body;
                gridRef.current.append(div)

                return;

            });            
        }      
    }, [loading, value])
  
    return (
        <div>
            <h4>Skeleton Template</h4>
            <div className={styles.gridSkeleton} ref={gridRef}>
                <div className={styles.card} ref={cardTemplateRef}>
                    <div className={styles.header}>
                        <div className={styles.cardImg}>
                            <img 
                                className={`${styles.cardImg} ${styles.skeleton}`}
                                src="https://source.unsplash.com/100x100/?nature" 
                                height={50} 
                                width={50}                             
                                alt="card-image" 
                            />
                        </div>                        
                        <div className={styles.title} data-title>
                            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                        </div>
                    </div>
                    <div data-body>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                        <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default Skeleton;
