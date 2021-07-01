import React from "react";
import Header from "../../components/Header";
import styles from "../../styles/SinglePost.module.css";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../urlConfig";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch(`${api}/posts`);
  console.log(res);
  const data = await res.json();
  const paths = await data.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch(`${api}/post/${slug}`);
  const data = await res.json();

  return {
    props: { post: data.post },
  };
};

export default function SinglePost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.meta}`} />
      </Head>
      <Header />
      {console.log(post)}
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <div className={styles.imgContainer}>
                <Image
                  src="https://i.ytimg.com/vi/FGbwKYiQyGQ/maxresdefault.jpg"
                  width={600}
                  height={400}
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
            </div>
            <div className={styles.topRight}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.shortDesc}>
                {post.body.slice(0,150)}
              </p>
              <div className={styles.buttons}>
                <button className={styles.button}>Buy from Amazon</button>
              </div>
            </div>
          </div>
          {/* Middle Section */}
          <div className={styles.middle}>
            <h4 className={styles.title}>Configuration</h4>
            <table className={styles.table}>
              <tr>
                <th className={styles.th}>Company</th>
                <th className={styles.th}>Contact</th>
              </tr>{" "}
              <tr>
                <td>Alfreds Futterkiste</td>
                <td> Maria Anders</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
              </tr>
              <tr>
                <td>Ernst Handel</td>
                <td>
                  Roland Mendel Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Mollitia expedita architecto reiciendis
                  impedit praesentium at molestias.
                </td>
              </tr>
              <tr>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
              </tr>
            </table>
          </div>

          {/* Bottom section */}
          <div className={styles.bottom}>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </div>
      </div>
    </>
  );
}
