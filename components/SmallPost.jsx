import styles from '../styles/SmallPost.module.css'
import React from 'react'
import Image from 'next/image'
import { style } from 'dom-helpers'

export default function SmallPost() {
    return (
      <div className={styles.smallPost}>
        <div className={styles.imgContainer}>
          <Image src="https://images.prothomalo.com/prothomalo-bangla%2F2021-06%2F51136ed1-7ecc-46e0-b721-93bde6f689af%2F4a62e53f-d3b9-4bc6-9c9b-5f233108e2c1.JPG?rect=0%2C0%2C4055%2C2281&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0" alt="" width={200} height={160} />
        </div>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quae. </h3>
        </div>
      </div>
    );
}
