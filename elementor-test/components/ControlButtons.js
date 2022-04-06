import React from 'react'
import styles from '/styles/Home.module.css'

export default function ControlButtons({ onDelete, onEdit }) {
  return (
    <div className={styles.edit} > 
        <span onClick={onDelete}>Delete</span>
        <span onClick={onEdit}>Edit</span>    
    </div>
  )
}
