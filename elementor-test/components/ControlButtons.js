import React from 'react'
import styles from '/styles/Home.module.css'

export default function ControlButtons({ onDelete, onEdit }) {
  return (
    <div className={styles.edit} > 
        {onDelete ? <span onClick={onDelete}>Delete</span> : ''}
        {onEdit ? <span onClick={onEdit}>Edit</span> : ''}   
    </div>
  )
}
