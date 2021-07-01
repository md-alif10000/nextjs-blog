import React from "react";
import styles from "../styles/Login.module.css";
import Link from 'next/link'

export default function Login() {
  return (
    <div className={styles.login}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <label htmlFor="">Email</label>
        <input type="text" placeholder="enter your email" />

        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" />
        <button className={styles.loginBtn}>Login</button>
        <p>
          {" Don't have an account?"}
          <Link href="/register" passHref>
            <span>Register</span>
          </Link>{" "}
        </p>
        <h5>
          <Link href="/" passHref >Forgot password?</Link>
        </h5>
      </div>
    </div>
  );
}
