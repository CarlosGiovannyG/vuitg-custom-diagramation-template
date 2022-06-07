import React, { ReactNode } from 'react'
import styles from './styles.css'

type PropsCustomGridItemSmall={
  elementOne:ReactNode
  elementTwo:ReactNode
}


const CustomGridItemSmall = ({elementOne,elementTwo}:PropsCustomGridItemSmall) => {

  return (
    <div className={styles.grid_item_small}>
      {elementOne}
      {elementTwo}
    </div>
  )
}

export default CustomGridItemSmall
