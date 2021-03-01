import React from "react";

import './../styles/layout.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const PrintBreak = () =>  <div className='page-break'></div>;

export default PrintBreak;