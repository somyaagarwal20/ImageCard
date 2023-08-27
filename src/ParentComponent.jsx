import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const [data, setData] = useState(null);
    const Handlechild = (childern) => {
        setData(childern);
    }
    return (
        <div>
            <ChildComponent onDataFromChild={Handlechild} />
            <p>{data}</p>
        </div>
    )
}

export default ParentComponent
