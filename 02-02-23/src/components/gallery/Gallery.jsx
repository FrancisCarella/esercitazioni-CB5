import Image from "next/image";
import styles from "./index.module.scss";

 function randomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
 }

function Gallery() {
  return (
    <>
      <div className={styles.title}>
        <h1>
          Benvenuto<br></br>sul nostro sito
        </h1>
      </div>
      <div className={styles.gallery}>
        <div className={styles.section}>
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=1"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=2"
            alt="random pic"
            width={300}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=3"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={styles.section}>
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=4"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=5"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=6"
            alt="random pic"
            width={300}
            height={500}
            priority
          />
        </div>
        <div className={styles.section}>
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=7"
            alt="random pic"
            width={300}
            height={500}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=8"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=9"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
        </div>
        <div className={styles.section}>
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=10"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=11"
            alt="random pic"
            width={300}
            height={300}
            priority
          />
          <Image
            className={styles.image}
            src="https://picsum.photos/800/800?random=12"
            alt="random pic"
            width={300}
            height={500}
            priority
          />
        </div>
      </div>
    </>
  );
}

export default Gallery;
