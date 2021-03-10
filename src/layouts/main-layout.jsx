import React from "react";

import { Link } from "gatsby"
import i18next from 'i18next'
import './../styles/layout.css'
import Contacts from './../shared/contacts'
import { library } from '@fortawesome/fontawesome-svg-core' 
import { fas } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/footer";

library.add(fas)
i18next.init({
    lng:'en',
    debug:false,
    resources: {
        en:{
            translation:{
                print:'Print'   
            }
        },
        ko:{
            translation:{
                print:'인쇄하기'

            }
        }
    }
})

class MainLayout extends React.Component {
    constructor(props) {
        super(props)
        i18next.changeLanguage(this.props.lng,function(){})
        
    }
    render() {
        var tags =<Link to='/ko'>한글 버전</Link>
        if(this.props.lng === 'ko')
            tags = <Link to= '/'>English</Link>
        return(

    <div>
        <Helmet>
            <title>Seokho Song</title>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"></link>
        </Helmet>
            <div className='print-hidden' style={{fontWeight:'bold'}}>
                    {tags}
                    <a onClick={()=>window.print()} style={{float:"right"}}>
                 <FontAwesomeIcon  style={{width:'16px'}} icon={['fas', 'print']} />
                  {i18next.t('print')}
                </a>
            </div>

            <h1 className='name'><span className='name-deco'>S</span>eokho <span className='title-deco'>S</span>ong</h1>
            <div className="center status">"Be Limitless"</div> 

            <div className='mainLayout'>
                <div className='header'>
                <Contacts/>
                <div className='header-information'> Computer Science And Engineering in Pai Chai University</div>
                <div className='header-information'> GPA 4.35</div>
                </div>
                <div>
                     {this.props.children}
                </div>
            </div>
            <Footer></Footer>
        </div>
        )
    }

}

export default MainLayout;