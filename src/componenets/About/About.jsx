import React from 'react';
import Layout from '../Layout/Layout';
import avatar from './avatar.jpg';
import './About.css';
import 'bootstrap/dist/css/bootstrap.css';
import Space from '../Space/Space';

const About = () => {
    return(
        <Layout>
            <div className="About">               
                <Space /> 
                <div className='About--mainImg' />                
                <div className='About--container'>
                    <div className='About--column' id='firstCol'>
                        <img src={avatar} alt='avatar' className='About--avatarImg' />
                        <p> مهدیه مجتبائی </p>
                    </div>
                    <ul className='up'>
                        <li style={{marginLeft: '30px'}}> <span>back-end</span> برنامه‌نویس </li>
                        <li style={{marginLeft: '30px', paddingTop: '7px'}}> لیسانس مهندسی کامپیوتر </li>
                        <li style={{marginLeft: '30px', paddingTop: '7px'}}> مدیر پروژه </li>
                    </ul>
                    <ul className='down'>
                        <li style={{marginRight: '30px'}}> برنامه‌نویس <span>front-end</span> </li>
                        <li style={{marginRight: '30px', paddingTop: '7px'}}> فوق لیسانس مهندسی نرم‌افزار </li>
                        <li style={{marginRight: '30px', paddingTop: '7px'}}> ایده‌پرداز </li>
                    </ul>
                    <div className='About--column' id='secondCol'>  
                        <p> فاطمه مؤمنی </p>
                        <img src={avatar} alt='avatar' className='About--avatarImg' />                              
                    </div>
                </div>
            </div>
        </Layout>        
    );
}

export default About;
