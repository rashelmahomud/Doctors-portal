import React from 'react';
import footers from '../../../assets/images/footer.png';

const Footer = () => {
    return (

        <section  style={{
           
            background: `url(${footers})`
        }} >
            <footer class=" p-10 px-10 lg:px-40">
                <div className='footer justify-center grid-cols-2'>
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

                <div className='flex justify-center mt-12'>
                    <p>Copyright © 2022 - All right reserved by Rashel Mahomud</p>
                </div>

            </footer>
        </section>


    );
};

export default Footer;