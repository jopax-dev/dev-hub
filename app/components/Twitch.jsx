import Link from 'next/link'
import twitch from '../misc/twitch.json'
import styles from './videos.module.css'
import Image from 'next/image'

export default function Twitch () {
  const { videos } = twitch
  return (
    <div className={styles.video_category}>
      <div className={styles.video_category_banner}>
        <span>{twitch.streamerData ? 'Esta en directo!' : 'Últimos directos!'}</span>
        {twitch.streamerData &&
          <Image
            alt='Twitch'
            src='/twitch.svg'
            width={25}
            height={25}
          />}

      </div>

      <div className={styles.video_wrapper}>
        {videos.map((video, key) => {
          return (
            <div key={video.url} className={styles.video}>
              <Link href={video.url} target='_blank'>
                <Image
                  alt={video.title}
                  width={240}
                  height={135}
                  src={twitch.streamerData && key === 0 ? '/twitch.svg' : video.imageUrl}
                />
                {twitch.streamerData && key === 0 && <span className={styles.video_category_banner_live}>Live!!</span>}
              </Link>
              <p>{video.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
