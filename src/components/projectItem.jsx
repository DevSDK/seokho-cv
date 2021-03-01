import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const ProjectItem = (props) => {
    return (
        <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex' }}>
                <div className="project-title">{props.title} </div>&nbsp;
            <div style={{ width: '20', textAlign: 'right', display: 'table-cell' }}>{props.date}</div> &nbsp;
        </div>
            <div style={{ marginTop: '10px' }}>
                <div>&nbsp;{props.children}</div>
            </div>
        </div>
    )
}


export default ProjectItem;