import styles from './page.module.css';

export default function Home() {
  console.log(123);
  return (
    <main className={styles.main}>
      <h1 className={styles.post_header}>.my_blog</h1>
      <div className='posts'>
        
      </div>
    </main>
  );
}