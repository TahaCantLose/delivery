import React from 'react'
import { IoMdLocate } from "react-icons/io";
import MyLocation from './mylocation';
import './home.css'

const Home = () => {
  return (
    <React.Fragment>
      <main className='homepage'>
        <section className='homeDecr'>
          <div className='homeSlogon'>
          <h1>It's the food and groceries you love, delivered</h1>
          </div>
          <article className='homeDecrIMGCont'>
            <div className='homeDecrIMG'></div>
          </article>
        </section>
        <section className='homeLocationCont'>
          <form className='homeLocation'>
            <input className='findFoodINP' placeholder='Your street and street number' type='search' height='100px'/>
            <div className='findFoodLocateCont' onClick={()=><MyLocation/>}><IoMdLocate/> Locate Me</div>
            <button className='findFoodBtn'>Find food</button>
          </form>
        </section>
        <section className='homeRestaurent'>
          <article style={{display:'flex',alignItems:'left',width:'100%'}}>
          <h2 style={{padding:'1.4rem'}}>You prepare the food, we handle the rest</h2>
          </article>
            <div className='listRestaurentIMG'></div>
          <article className='listRestaurentModal'>
            <h3>List your restaurant or shop on foodpanda</h3>
            <p>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!</p>
            <p>It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
            <p>Interested? Let's start our partnership today!</p>
            <button className='getStartedBtn'>Get started</button>
          </article>
        </section>
        <section className='cities'>
          <article style={{display:'flex',alignItems:'left',width:'100%'}}>
          <h2 style={{padding:'1.4rem'}}>Find us in these cities and many more!</h2>
          </article>
          <div className='citiesCont'>
            <div className='citiesIMGIsb'><div style={{padding:'0.6rem',margin:'0.5rem',backgroundColor:'white',width:'fit-content',borderRadius:'10px'}}>Islamabad</div></div>
            <div className='citiesIMGKar'><div style={{padding:'0.6rem',margin:'0.5rem',backgroundColor:'white',width:'fit-content',borderRadius:'10px'}}>Karachi</div></div>
            <div className='citiesIMGLah'><div style={{padding:'0.6rem',margin:'0.5rem',backgroundColor:'white',width:'fit-content',borderRadius:'10px'}}>Lahore</div></div>
            <div className='citiesIMGFas'><div style={{padding:'0.6rem',margin:'0.5rem',backgroundColor:'white',width:'fit-content',borderRadius:'10px'}}>Faisalabad</div></div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}

export default Home;