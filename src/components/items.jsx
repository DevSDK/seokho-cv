import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const Items = (props) => {
    return (
        <div className='contents-divider'>
            <div className='contents-title titles'><span className="contents-title-deco">{props.title[0]}</span>{props.title.substring(1)}</div>
            <div className='text-content'>
                {props.children}
            </div>
        </div>

    )
}

export default Items;