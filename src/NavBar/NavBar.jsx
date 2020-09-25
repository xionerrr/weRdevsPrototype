import React from 'react';
import { NavLink } from 'react-router-dom';



function NavBar(){
    return(

        <div className = 'NavBar'>
            <img src='https://am3pap007files.storage.live.com/y4mONMBhlo8uUNxWdwXtNqbqMmCQgJYf2e2OxwrsISYMUreIa-9tfU6g47xoKsd7L1LHp9JAI7kV2xEXvJz3_qY8E_QvYwxh3rTBx1Y_F1m7yHOVIJxb2Dp6e-rK5apX6JX_ap_VC19coqlFzbBNJNNYrdVzLbvkpuom8yOkkCMRsUlDvhlxFHinaiq7Nzy7BgtyIXqGrQausO8fG3StUQv_g/Logo%20original%20RGB.svg?psid=1&width=1440&height=2048' />
            <div className='p2-1'>
                <NavLink to='/home'>
                    HOME
                </NavLink>
            </div>

            <div className='p2-2'>
                <NavLink to='/about'>
                    ABOUT US
                </NavLink>
            </div>
        </div>

    );
}

export default NavBar;