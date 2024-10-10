import Image from 'next/image'
import styles from './comunity.module.css'
import devs from '../misc/devs.json'
import Youtube from './Youtube'
import Link from 'next/link'
import Twitch from './Twitch'

export default function Comunity () {
  return (
    <section className={styles['dev-community']}>
      <ul className={styles['list-developers']}>
        {devs.map(dev => {
          return (
            <li key={dev.name}>
              <article className={styles.dev}>
                <figure>
                  <Image
                    src={dev.image}
                    width={240}
                    height={240}
                    alt='Manz'
                  />
                </figure>
                <div>
                  <span className={styles['content-creator-name']}>@{dev.name}</span>
                  <section>
                    <span>
                      {dev.links?.url && <p>🔗 URL <Link href={dev.links.url} target='__blank'>{dev.links.url}</Link></p>}
                      {dev.links?.twitch && <p>🎙 Streamer en <Link href={dev.links.twitch}>{dev.links.twitch}</Link></p>}
                      {dev.links?.youtube && <p>🎥 Vids <Link href={dev.links.youtube}>{dev.links.youtube}</Link></p>}
                    </span>
                    <p className={styles.description}>
                      {dev.description}
                    </p>
                  </section>
                </div>
              </article>
              <div className={styles.videos}>
                <Twitch />
                <Youtube />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
