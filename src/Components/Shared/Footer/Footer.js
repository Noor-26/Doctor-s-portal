import React from 'react'
import footerImg from '../../../images/images/footer.png'
export default function Footer() {
  return (
    <div style={{
        background: `url(${footerImg})`,
        backgroundSize: 'cover'
    }} className="p-10">
        <footer >
  <div class="footer p-10 font-bold">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a>
    <a class="link link-hover">Design</a>
    <a class="link link-hover">Marketing</a>
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact</a>
    <a class="link link-hover">Jobs</a>
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a>
    <a class="link link-hover">Privacy policy</a>
    <a class="link link-hover">Cookie policy</a>
  </div>
  </div>
  <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by Darkfam</p>
            </div>
</footer>
    </div>
  )
}
