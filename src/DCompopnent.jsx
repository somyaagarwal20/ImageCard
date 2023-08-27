import React, { useContext } from 'react'
import DataContext from './DataContext'

const DCompopnent = () => {
    const shareData = useContext(DataContext);
  return (
 
    
    <div>
      DComponent
      <p>property recived from grand parent:{shareData}
      </p>
    </div>
   
   
  )
}

export default DCompopnent
