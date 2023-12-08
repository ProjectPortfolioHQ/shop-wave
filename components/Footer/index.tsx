import { format } from "date-fns";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <div className={styles.section}>
          <p className={styles.title}>Contact with shop wave</p>
          <div className={styles.content}>
            <p>hotline & online chat (24/7)</p>
            <p>support center</p>
            <p>ordering guide</p>
            <p>delivery & pickup</p>
            <p>instructions for returning goods</p>
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>About shop wave</p>
          <div className={styles.content}>
            <p>about us</p>
            <p>shop wave blog</p>
            <p>shop wave contact</p>
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.title}>follow us</p>
          <div className={styles.content}>
            <p>facebook</p>
            <p>instagram</p>
            <p>twitter</p>
            <p>linkedin</p>
          </div>
        </div>
      </div>

      <span className="text-white">
        &#9400; Copyright Shop wave {format(new Date(), "yyyy")}
      </span>
    </footer>
  );
}
