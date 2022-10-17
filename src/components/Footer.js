import React from 'react'
import Instagramicon from "@material-ui/icons/Instagram"
import Twittericon from "@material-ui/icons/Twitter"
import Facebookicon from "@material-ui/icons/Facebook"
import LinkedInicon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagramicon />
            <Twittericon  />
            <Facebookicon />
            <LinkedInicon />
        </div>
        <p> &copy; 2022 thisite.url</p>
    </div>
  )
}

export default Footer