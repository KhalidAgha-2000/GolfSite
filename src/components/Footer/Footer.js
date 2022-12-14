import React from 'react'
import './Style.css'
import facebook from '../../images/facebook-app-symbol.png'
import instagram from '../../images/instagram.png'
import Group89 from '../../images/Group 4089.png'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'
export default function Footer() {
    return (
        <div>
            {/**Banner Image */}
            <section className='footerBannerImage'>
                <img src={Group89} alt='Group89' />
            </section>
            {/**Subsicrebtion */}
            <section>
                <div className='footerSubsicrebtion'>
                    <h1>Subsicrebe to our Newsletter</h1>
                    <input type={'email'} placeholder='Enter your email' />
                </div>
            </section>
            {/**Links */}
            <section className='footerLinks'>
                <div className='footerLogos'>
                    <div id='facebookfooter' className='footerLogoDev'><img src={facebook} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={twitter} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={instagram} alt='footerLogoImg' /></div>
                    <div className='footerLogoDev'><img src={youtube} alt='footerLogoImg' /></div>
                </div>
                <div className='footerPrivecy'>&copy; 2022.All right Reserved</div>
                <div className='footerItems'>
                    <ul>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>help</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
