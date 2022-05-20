import React from 'react'
import footerImg from '../../../images/images/footer.png'
export default function Footer() {
  return (
    <div style={{
        background: `url(${footerImg})`,
        backgroundSize: 'cover'
    }} className="p-10">
        <footer >
  <div className="footer p-10 font-bold">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </div>
  </div>
  <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by Darkfam</p>
            </div>
</footer>
    </div>
  )
}
