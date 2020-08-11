import React from "react";
const NavArea=()=>{
    return(
        <div className='nav'>
            
        <ul>
        <div className='nav-left'>
            
            <li>
                <a href='#'>About</a>
            </li>
            <li>
                <a href='#'>Join Us</a>
            </li>
            <li>
                <a href='#'>Contact Us</a>
            </li>
            </div>
        
        
        <div className='nav-right'>
        
            <li>
                <a href='#'>Login</a>
            </li>
            <li>
                <button>
                    <span><a href='#'>Sign Up</a></span></button>
            </li>
        </div>
        </ul>
        </div>
    )

}
export default NavArea