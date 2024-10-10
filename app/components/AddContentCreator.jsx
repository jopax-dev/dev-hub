'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './contentcreator.module.css'
export default function AddContentCreator () {
  const [opneModal, setModalOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const handleClickButton = () => {
    setModalOpen((prevState) => !prevState)
  }
  return (
    <>
      <div onClick={handleClickButton} className={styles.button}>
        ➕
      </div>

      {opneModal &&
        <div className={styles['modal-wrapper']}>
          <div className={styles.modal} ref={modalRef}>
            <label htmlFor='name'>Nombre de tu streamer favorito</label>
            <input type='text' id='name' />

            <label htmlFor='name'>Link a su canal de twitch</label>
            <input type='text' id='twitch' />

            <label htmlFor='name'>Link a su canal de Youtube</label>
            <input type='text' id='youtube' />

            <label htmlFor='name'>Vamos a ver sus fotos no?</label>
            <input type='text' id='instagram' />

            <label htmlFor='name'>Vamos a cotillearle su fb</label>
            <input type='text' id='facebook' />

            <label htmlFor='name'>Y sus tweets?</label>
            <input type='text' id='twitter' />

            <label htmlFor='name'>Pon su web/portfolio/github</label>
            <input type='text' id='web' />
          </div>
        </div>}
    </>
  )
}
