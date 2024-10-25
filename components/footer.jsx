import React from 'react'
import styles from '../styles/footer.module.css'
function footer() {

    var currentTime = new Date()
    let currentYear = currentTime.getFullYear()

  return (
    <div>
      <h1 className={styles.footer}> &copy; Dhruv Dugar {currentYear}</h1>
    </div>
  )
}

export default footer
