import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import ManorLogoFooter from "../images/ManorLogoFooter.png"

const Wrapper = styled.div`
position: static;
z-index: 3;
padding-top: 8em;
padding-bottom: 2em;
background-image: url("https://uploads-ssl.webflow.com/634b6fdcee461173c7bb5420/6361cb7a44c7fb7eff6768f1_gradient.jpg");
background-position: 0px 0px;
background-size: cover;
box-sizing: border-box;
font-family: Arial,sans-serif;
font-size: 14px;
line-height: 20px;
color: white;
.padding {
    padding-right: 5%;
    padding-left: 5%;
}
.container {
    /* padding-right: 5%;
    padding-left: 5%; */
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    @media screen and (min-width: 1920px){
        max-width: 80vw;
    }
    .divider {
        width: 100%;
        height: 1px;
        margin-top: 3em;
        margin-bottom: 2em;
        padding-top: 0em;
        padding-bottom: 0em;
        background-color: #cfcfcf;
    }
    .content {
        display: grid;
        grid-auto-columns: 1fr;
        -webkit-box-align: start;
        -webkit-align-items: start;
        -ms-flex-align: start;
        align-items: start;
        grid-column-gap: 8vw;
        grid-row-gap: 1rem;
        -ms-grid-columns: 0.75fr 1fr;
        grid-template-columns: 0.75fr 1fr;
        -ms-grid-rows: auto;
        @media screen and (max-width: 991px){
            grid-row-gap: 4rem;
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
        }
        .content-left{
            img {
                width: 15em;
                max-width: 100%;
                vertical-align: middle;
                display: inline-block;
            }
        }
        .content-right {
            display: grid;
            grid-auto-columns: 1fr;
            -webkit-box-align: start;
            -webkit-align-items: start;
            -ms-flex-align: start;
            align-items: start;
            grid-column-gap: 2rem;
            grid-row-gap: 1rem;
            -ms-grid-columns: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr;
            -ms-grid-rows: auto;
            grid-template-rows: auto;
            @media screen and (max-width: 767px){
            grid-column-gap: 1.5rem;
            }
            @media screen and (max-width: 479px){
                grid-row-gap: 2.5rem;
                -ms-grid-columns: 1fr;
                grid-template-columns: 1fr;
            }
            .list {
                display: -webkit-box;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -webkit-flex-direction: column;
                -ms-flex-direction: column;
                flex-direction: column;
                justify-items: start;
                -webkit-box-align: start;
                -webkit-align-items: flex-start;
                -ms-flex-align: start;
                align-items: flex-start;
                grid-auto-columns: 100%;
                -ms-grid-columns: 100%;
                grid-template-columns: 100%;
                -ms-grid-rows: auto;
                grid-template-rows: auto;
            }
            .heading {
                margin-top: 0rem;
                margin-right: 0rem;
                margin-left: 0rem;
                margin-bottom: 10px;
                width: 100%;
                font-family: Asket, sans-serif;
                color: #fff;
                font-size: 1.2em;
                font-weight: 600;
                text-transform: uppercase;
                line-height: 20px;
            }
            a {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                font-family: Montserrat, sans-serif;
                color: #fff;
                font-size: 0.875rem;
                text-decoration: none;
                line-height: 20px;
            }
        }
    }
    .foot {
        display: flex;
        justify-content: space-between;
        color: white;
        a {
            color: #cfcfcf;
            font-size: 0.875rem;
            text-decoration: underline;
        }
    }
}
`

export default function Footer(){
    return(
        <Wrapper>
            <div className='padding'>
                <div className='container'>
                    <div className='content'>
                        <div className='content-left'>
                            <Link>
                                <img src={ManorLogoFooter}/>
                            </Link>
                        </div>
                        <div className='content-right'>
                            <div className='list'>
                                <div className='heading'>Pages</div>
                                <Link to="/">Home</Link>
                                <Link to="#">Property Management</Link>
                                <Link to="/property-rentals">Rentals</Link>
                                <Link to="#">Services & Fees</Link>
                                <Link to="#">Tenants</Link>
                                <Link to="#">Make the Switch</Link>
                            </div>
                            <div className='list'>
                                <div className='heading'>Contact</div>
                                <Link to="#">info@manorrealty.co.nz</Link>
                                <Link to="#">07 390 2527</Link>
                                <Link>223 Victoria St, Hamilton CBD</Link>
                            </div>
                            <div className='list'>
                                <div className='heading'>Socials</div>
                                <a href="https://www.facebook.com/profile.php?id=100086214267270" target="_blank" class="footer1_social-link w-inline-block"><div bind="1a3e8c7a-e01a-0063-0b3e-ff0e57aef8e8" class="footer1_social-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="CurrentColor"></path>
                                </svg></div><div>Facebook</div></a>
                                <a href="https://www.instagram.com/manorrealtygroup/" target="_blank" class="footer1_social-link w-inline-block"><div bind="1a3e8c7a-e01a-0063-0b3e-ff0e57aef8ec" class="footer1_social-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
                                </svg></div><div>Instagram</div></a>
                            </div>
                        </div>
                    </div>
                    <div className='divider'/>
                    <div className='foot'>
                        <div>© 2022 Manor Realty. All right reserved.</div>
                        <div><a href="#">Privacy Policy</a></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

// export default function Footer1(){
//     return(
//         <div bind="1a3e8c7a-e01a-0063-0b3e-ff0e57aef8be" class="footer"><div class="padding-global-2"><div class="container-large-2"><div class="padding-vertical padding-xxlarge"><div class="padding-bottom padding-xxlarge"><div class="w-layout-grid footer1_top-wrapper"><div class="footer1_left-wrapper"><div class="margin-bottom margin-small centre"><a href="#" class="footer1_logo-link w-nav-brand"><img src="https://uploads-ssl.webflow.com/634b6fdcee461173c7bb5420/634ca4676668ddb5c990fa33_manor-realty-logo-white-transparent%201.png" loading="lazy" data-sizes="[{&quot;max&quot;:479,&quot;size&quot;:&quot;100vw&quot;},{&quot;max&quot;:10000,&quot;size&quot;:&quot;210px&quot;}]" sizes="(max-width: 479px) 90vw, 210px" srcset="https://uploads-ssl.webflow.com/634b6fdcee461173c7bb5420/634ca4676668ddb5c990fa33_manor-realty-logo-white-transparent%201-p-500.png 500w, https://uploads-ssl.webflow.com/634b6fdcee461173c7bb5420/634ca4676668ddb5c990fa33_manor-realty-logo-white-transparent%201.png 600w" alt="" class="image-20"/></a></div></div><div class="w-layout-grid footer1_menu-wrapper"><div class="footer1_link-list"><div class="margin-bottom margin-xsmall"><div class="text-weight-semibold-2">Pages</div></div><a href="/" class="footer1_link">Home</a><a href="/old-home" class="footer1_link">Property Management</a><a sym-bind="{&quot;children&quot;:{&quot;type&quot;:&quot;Select&quot;,&quot;val&quot;:{&quot;from&quot;:{&quot;type&quot;:&quot;Variable&quot;,&quot;val&quot;:&quot;data&quot;},&quot;prop&quot;:&quot;7f02115a-c29b-aff8-55b9-d3d1e1213e48&quot;}}}" href="/property-rentals" aria-current="page" class="footer1_link w--current">Rentals</a><a href="/services" class="footer1_link">Services &amp; Fees</a><a href="/tenants" class="footer1_link">Tenants</a><a href="/make-the-move" class="footer1_link">Make the Switch</a></div><div class="footer1_link-list"><div class="margin-bottom margin-xsmall"><div class="text-weight-semibold-2">Contact</div></div><a href="mailto:info@manorrealty.co.nz" class="footer1_link">info@manorrealty.co.nz</a><a sym-bind="{&quot;children&quot;:{&quot;type&quot;:&quot;Select&quot;,&quot;val&quot;:{&quot;from&quot;:{&quot;type&quot;:&quot;Variable&quot;,&quot;val&quot;:&quot;data&quot;},&quot;prop&quot;:&quot;bd565052-6895-a503-6527-fa68f47e37fa&quot;}}}" href="tel:073902527" class="footer1_link">07 390 2527</a><a href="https://www.google.com/maps/place/223+Victoria+Street,+Hamilton+Central,+Hamilton+3204/@-37.788831,175.2820273,17z/data=!3m1!4b1!4m5!3m4!1s0x6d6d18ba9dd8c653:0x5a575184c5279917!8m2!3d-37.788831!4d175.284216" target="_blank" class="footer1_link">223 Victoria St, Hamilton CBD</a></div><div class="footer1_link-list"><div class="margin-bottom margin-xsmall"><div class="text-weight-semibold-2">socials</div></div><a href="https://www.facebook.com/profile.php?id=100086214267270" target="_blank" class="footer1_social-link w-inline-block"><div bind="1a3e8c7a-e01a-0063-0b3e-ff0e57aef8e8" class="footer1_social-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path d="M16.5 6H13.5C12.9477 6 12.5 6.44772 12.5 7V10H16.5C16.6137 9.99748 16.7216 10.0504 16.7892 10.1419C16.8568 10.2334 16.8758 10.352 16.84 10.46L16.1 12.66C16.0318 12.8619 15.8431 12.9984 15.63 13H12.5V20.5C12.5 20.7761 12.2761 21 12 21H9.5C9.22386 21 9 20.7761 9 20.5V13H7.5C7.22386 13 7 12.7761 7 12.5V10.5C7 10.2239 7.22386 10 7.5 10H9V7C9 4.79086 10.7909 3 13 3H16.5C16.7761 3 17 3.22386 17 3.5V5.5C17 5.77614 16.7761 6 16.5 6Z" fill="CurrentColor"></path>
//         </svg></div><div>Facebook</div></a><a href="https://www.instagram.com/manorrealtygroup/" target="_blank" class="footer1_social-link w-inline-block"><div bind="1a3e8c7a-e01a-0063-0b3e-ff0e57aef8ec" class="footer1_social-icon w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
//         </svg></div><div>Instagram</div></a></div></div></div></div><div class="line-divider-2"></div><div class="padding-top padding-medium"><div class="footer1_bottom-wrapper"><div class="footer1_credit-text">© 2022 Manor Realty. All right reserved.</div><div class="w-layout-grid footer1_legal-list"><a href="#" class="footer1_legal-link">Privacy Policy</a></div></div></div></div></div></div></div>
//     )
// }