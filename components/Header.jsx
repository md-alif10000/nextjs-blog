import React from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { ArrowForward, Search } from "@material-ui/icons";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        {" "}
        <div className={styles.headerLeft}>
          <Link href="/" passHref>
            <Image
              src="https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic.png"
              width={120}
              height={60}
              className={styles.logo}
              alt='Image'
            />
          </Link>
        </div>
        <div className="headerCenter">
          <form action="">
            <div className={styles.searchContainer}>
              <input type="text" placeholder="Search here" />
              <Search className={styles.searchIcon} />
            </div>
          </form>
        </div>
        <div className="headerRight">
          <button className={styles.loginBtn}>Login</button>

          <Link href="/register" passHref >
            <button className={styles.registerBtn}>Register</button>
          </Link>
          {/* <button className={styles.logoutBtn}>Logout <ArrowForward/> </button> */}
        </div>{" "}
      </div>
    </div>
  );
}
