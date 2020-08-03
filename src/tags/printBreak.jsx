

import React from "react";
import i18next from 'i18next'
import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab)


class PrintBreak extends React.Component {
    constructor(props) {
        super(props)

      
        
    }
    render() {
        return <div className='page-break'></div>;
    }

}

export default PrintBreak;