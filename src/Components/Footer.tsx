import React from 'react';
import Image from '../assets/logo-text.png';

const Footer = () => {
    return (
        <div>
            <div className='container flex justify-between mt-4 pl-26'>
                <div>
                    <img src={Image} alt="" className='mt-10 mb-5' />
                    <p className='mb-5'>
                        Curated tools, technologies, and resources <br />
                        for developers building modern software.
                    </p>

                    <input
                        type="reset"
                        value="Github"
                        className="btn rounded-[5px]"
                    />
                    <input
                        type="reset"
                        value="Twitter"
                        className="btn rounded-[5px]"
                    />
                    <input
                        type="reset"
                        value="LinkedIn"
                        className="btn rounded-[5px]"
                    />
                </div>

                <div className='mt-10 mb-5'>
                    <h2 className='font-bold text-[16px] mb-5'>PRODUCTS</h2>
                    <h4>Home</h4>
                    <h4>Technologies</h4>
                    <h4>Projects</h4>
                </div>

                <div className='mt-10 mb-5'>
                    <h2 className='font-bold text-[16px] mb-5'>COMPANY</h2>
                    <h4>About</h4>
                    <h4>Contacts</h4>
                    <h4>Careers</h4>
                </div>

                <div className='mt-10 mb-5'>
                    <h2 className='font-bold text-[16px] mb-5'>LEGAL</h2>
                    <h4>Privacy Policy</h4>
                    <h4>Terms of Services</h4>
                </div>
            </div>

            
            <div className='flex justify-between mt-10 ml-25 mb-15'>
                <div>© 2026 DevStack All Rights Reserved</div>
                <div className='mr-25'>
                    <input type="reset" value="Privacy"className="btn rounded-[5px]" />
                    <input type="reset" value="Terms" className="btn rounded-[5px]" />
                </div>
            </div>
        </div>
    );
};

export default Footer;