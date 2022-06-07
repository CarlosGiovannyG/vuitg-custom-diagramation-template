import React, { ReactNode } from 'react'
import styles from './styles.css'

type PropsCustomGridItemBig = {
  element: ReactNode
}

const CustomGridItemBig = ({ element }: PropsCustomGridItemBig) => {
  return (
    <div className={styles.grid_item_big} >
      {element}
    </div>
  )
}

export default CustomGridItemBig
