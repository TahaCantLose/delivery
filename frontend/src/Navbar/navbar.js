import React, { useState } from 'react'
import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoGlobeOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import './navbar.css'

const Navbar = () => {
    const [accountClick,setAccountClick] = useState(false);
  return (
    <main className='navbar'>
        <section className='navbarCont'>
            <RiAccountCircleLine onClick={()=>setAccountClick(!accountClick)} className='accountDisp'/>
            <div className='logo'>
                <h2>DeliveryEats</h2>
            </div>
            <div className='navbarRest'>
                <article className='navbarDispNONE'>
                <button className='login'>Log in</button>
                <button className='signup' style={{backgroundColor:'rgb(255, 59, 92)'}}>Sign up</button>
                <label style={{
                    display:'flex',
                    alignItems:'center',
                    marginLeft:'0.3rem',
                    color:'black'
                }}><IoGlobeOutline/>EN</label>
                <select className='languageSelect'>
                    <option value='EnglishUs'>English US</option>
                    <option value='EnglishUk'>English UK</option>
                    <option value='EnglishAus'>English (AUS)</option>
                    <option value='Arabic'>Arabic</option>
                </select>
                </article>
                <button className='shoppingCart'><LiaShoppingBagSolid style={{height:'18px',width:'18px',color:'rgb(255, 59, 92)'}}/></button>
            </div>
        </section>
        <div className={accountClick ? 'accountModel' : 'accountModelHide' }>
            <section className='accountModelCont'>
                <button onClick={()=>setAccountClick(!accountClick)} className='closeModal'>X</button>
                <p style={{fontSize:'22px',fontWeight:'bold'}}>Welcome!</p>
                <p style={{fontSize:'14px'}}>Sign up or log in to continue </p>
                <button className='facebookBtn'><FaFacebook style={{fontSize:'25px',marginLeft:'0.6rem',color:'white'}}/><article className='accountBtns'>Continue with Facebook</article></button>
                <button className='googleBtn'><FcGoogle style={{fontSize:'25px',marginLeft:'0.6rem'}}/><article className='accountBtns'>Continue with Google</article></button>
                <button className='appleBtn'><FaApple style={{fontSize:'25px',marginLeft:'0.6rem',color:'white'}}/><article className='accountBtns'>Continue with Apple</article></button>
                <p style={{textAlign:'center'}}>or</p>
                <button className='loginModelBtn'>Log in</button>
                <button className='signupModelBtn'>Sign up</button>
            </section>
        </div>
    </main>
  )
}

export default Navbar;