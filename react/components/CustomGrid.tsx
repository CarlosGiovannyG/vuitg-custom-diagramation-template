import React, { ReactNode } from 'react'
import { customGridSchema } from '../schemas/custom-grid-schemas'
import CustomGridItemBig from './CustomGridItemBig'
import CustomGridItemSmall from './CustomGridItemSmall'
import styles from './styles.css'

type PropsCustomGrid = {
  gridType: number
  children: [
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode,
    ReactNode
  ]
}

const CustomGrid = ({ gridType = 4, children }: PropsCustomGrid) => {

  const gridTypeClass:string = `grid__${gridType}`

  return (
    <div>
      <h1>Custom Grid </h1>
      <div className={styles[gridTypeClass]}>
      <CustomGridItemBig
        element={children[0]} />
      <CustomGridItemSmall
        elementOne={children[1]}
        elementTwo={children[2]}
      />
      <CustomGridItemSmall
        elementOne={children[3]}
        elementTwo={children[4]}
      />
    </div>
    </div>
  )
}

CustomGrid.schema = customGridSchema
export default CustomGrid
