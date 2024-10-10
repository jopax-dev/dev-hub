import Image from 'next/image'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer>
      <section className={styles.footer}>
        <article className={styles['footer-zarzalejo']}>
          <span>Inspirado (copiado vilmente) de</span>
          <Link href='https://community-dev.vercel.app/' target='_blank'>
            <Image
              alt='Arturo Zarzalejo'
              width={250}
              height={75}
              src='/arturozarzalejo.svg'
            />
          </Link>
        </article>
        <article className={styles['footer-profile']}>
          <span>Made with love by a coding dog </span>
          <Link href='https://jopax.dev/' target='_blank'>
            <Image
              src='/profile.webp'
              width={75}
              height={75}
              alt='Jopax'
              className={styles['footer-profile-image']}
            />
          </Link>
        </article>
        <article>
          <Link href='https://github.com/Afordin' target='_blank'>
            <Image
              alt='Afordin'
              width={305}
              height={75}
              src='/afordin.png'
            />
          </Link>
        </article>
      </section>
    </footer>
  )
}
