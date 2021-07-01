import React from "react";
import styles from "../styles/Register.module.css";
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.registerBox}>
        <h2>Register</h2>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Password</label>
          <input type="text" />
          <label htmlFor="">Confirm Password</label>
          <input type="text" />
          <button className={styles.registerBtn}>Register</button>
          <p>
            Already have an account?
            <Link href="/login" passHref>
              <span>Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
