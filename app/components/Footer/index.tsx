import { format } from "date-fns";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      &#9400; {format(new Date(), "yyyy")} Copyright Reversed
    </footer>
  );
}
