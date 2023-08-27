import React from 'react'
import DataContext from './DataContext'

import BComponent from './BComponent'

const AComponent = () => {
    const Visihatnama = "mere grand children ko 4cr deta hoon"
    return (
        <DataContext.Provider value={Visihatnama}>
            <div>
                AComponent
                <BComponent />
            </div>
        </DataContext.Provider>
    )
}

export default AComponent
