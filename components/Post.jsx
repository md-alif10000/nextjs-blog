import React from "react";
import styles from "../styles/Post.module.css";
import Image from "next/image";
import Link from 'next/link'
import moment from "moment";

export default function Post({post}) {
  return (
    <div className={styles.post}>
      <div className={styles.postImgContainer}>
        <Image
          src="https://images.prothomalo.com/prothomalo-bangla%2F2021-06%2F51136ed1-7ecc-46e0-b721-93bde6f689af%2F4a62e53f-d3b9-4bc6-9c9b-5f233108e2c1.JPG?rect=0%2C0%2C4055%2C2281&auto=format%2Ccompress&fmt=webp&format=webp&w=576&dpr=1.0"
          width={300}
          height={250}
          objectFit="cover"
        />
      </div>
      <div className={styles.postInfo}>
        <h3 className={styles.postTitle}>
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <span className={styles.postTime}>
          {moment(post.createdAt).add(3, "days").calendar()}
        </span>
        <p className={styles.postDesc}>{post.body.slice(0,250)}</p>
      </div>
    </div>
  );
}
