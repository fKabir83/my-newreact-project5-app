
import React from 'react';
import Logo from "../assets/logo-text.png";

const Nav = () =>{
    return (
            <nav className='bg-amber-50 pt-5 pb-5'>
                <div className=' max-auto flex justify-around'>
                  <img src={Logo} alt="logo-text"/>
                  
                <ul className="flex gap-6 items-center ">
                    <li>Home</li>
                   <li>Technologies</li>
                   <li>Projects</li>
                   <li>About</li>
                   <li>Contact</li>
                 </ul>

                        <div>
                           <input type="reset" value="Sign In" className="btn rounded-[5px]" />
                           <button className="btn btn-secondary rounded-[25px]">Sign Up</button>
                        </div>
                </div>
        </nav>
    );
};

export default Nav;