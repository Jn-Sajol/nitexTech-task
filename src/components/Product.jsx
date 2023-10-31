import React from 'react';
import aboutImg from '../assets/icons/mobile-login.png';
import maecenas from '../assets/icons/Tlogo.png';

import company1 from '/src/assets/company1.png';
import company2 from '/src/assets/company2.png';
import company3 from '/src/assets/company3.png';
import company4 from '/src/assets/company4.png';
import company5 from '/src/assets/company5.png';
import company6 from '/src/assets/company6.png';

const Product = () => {
    return (
        <div >
           <div>
            {/* about text */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                            <h2 className='text-4xl text-neutralD_Grey font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                            <p className='md:3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Product;