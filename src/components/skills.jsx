import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Skills = (props) => {
    return (
        <div>
            <h3 className='.skills-title'>{props.title}</h3>
            <div className='skills-contents'>{props.children}</div>
        </div>
    )
}

export default Skills;

