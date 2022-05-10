import React from 'react';
import footers from '../../../assets/images/footer.png';

const Footer = () => {
    return (

        <section  style={{
           
            background: `url(${footers})`
        }} >
            <footer className=" p-10 px-10 lg:px-40">
                <div className='footer justify-center grid-cols-2'>
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

                <div className='flex justify-center mt-12'>
                    <p>Copyright © 2022 - All right reserved by Rashel Mahomud</p>
                </div>

            </footer>
        </section>


    );
};

export default Footer;