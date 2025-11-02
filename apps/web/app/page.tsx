import styles from "./page.module.css";
import NextButton from "./_components/NextButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p>
          안녕하세요 <br />
          박다솜입니다.
        </p>
      </main>
      <footer className={styles.footer}>
        <NextButton />
      </footer>
    </div>
  );
}
