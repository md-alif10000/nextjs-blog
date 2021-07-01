
import styles from "../styles/HomeSidebar.module.css"
import SmallPost from "./SmallPost"

export default function HomeRightbar() {
    return (
      <div className={styles.HomeRightbar}>
        <SmallPost />
        <SmallPost />
        <SmallPost />
        <SmallPost />
      </div>
    );
}
