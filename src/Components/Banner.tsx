import React from 'react';
import Stack from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className='container flex justify-between p-15'>
            <div className='flex flex-col justify-l items-l gap-6 pt-26 ml-20'>
                
                <h1 className="text-6xl font-bold">
                        Build Your Ideal{" "}
                            <span className="bg-gradient-to-r from-red-700 to-purple-700 bg-clip-text text-transparent">
                                  Development Stack
                                      </span>
                 </h1>
                <p>Explore frontend, backend,database, and tooling optcion,<br></br>ompare them side by side, and put together the stack that fits your <br></br>next project</p>
                <div className='flex gap-4'>
                           <button className="btn btn-secondary rounded-[10px]">Explore Technologies</button>
                           <input type="reset" value="Learn More" className="btn rounded-[8px]" />
                           
                        </div>
            </div>
            <div>
                <img src={Stack} alt="banner-stack" />
            </div>
        </div>
    );
};

export default Banner;