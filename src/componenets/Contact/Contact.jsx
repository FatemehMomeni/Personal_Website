import React, {useState} from "react";
import Layout from "../Layout/Layout";
import Space from "../Space/Space";
import "./Contact.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import eitaa from "./IconSVGs/eitaa.svg";
import telegram from "./IconSVGs/telegram.svg";
import whatsapp from "./IconSVGs/whatsapp.svg";
import { MdOutlineEmail } from "react-icons/md";
import Modal from "../Modal/Modal";
import { validateSubject } from "../../utils/validation";
import validator from "validator";
import Button from "../Button/Button";
import { useMediaQuery } from 'react-responsive';
import axios from "axios";


const Contact = () => {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [openModal, setOpenModal] = useState(false);    
    const isMedum = useMediaQuery({ query: '(max-width: 670px)' });
    // const [details, setDetails] = useState([]);

    const handleSubject = (event) => {        
        if (validateSubject(event.target.value)){
            setSubject(event.target.value);
            // console.log("subject: ", subject);
            setErrors({
                ...errors,
                subject: null
            })
        } else {
            setErrors({
                ...errors,
                subject: "عنوان باید بیشتر از ۸ کاراکتر باشد"
            })
        }
    };
    
    const handelEmail = (event) => {                
        if (validator.isEmail(event.target.value)){
            setEmail(event.target.value);
            // console.log("email", email);
            setErrors({
                ...errors,
                email: null
            })
        } else {
            setErrors({
                ...errors,
                email: "ایمیل نامعتبر"
            })
        }
    };

    const handleMessage = (event) => {
        setMessage(event.target.value);
        // console.log("message: ", message);
    };
    
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmit = () => {        
        axios.post('http://localhost:8000/MIweb/', 
            {msgSubject: subject, emailAddress: email, messageText: message}).then(
                (res) => {
                    setSubject('');
                    setEmail('');
                    setMessage('');
                }).catch((err) => {})
        setOpenModal(true);        
    };

    // useEffect(() => {
    //     let data;
    //     axios.get('http://localhost:8000/MIweb/').then((res) => {
    //         data = res.data;
    //         setDetails(data);
    //     }).catch((err) => {});
    // });

    return(
        <Layout>
            <div className="Contact">            
                <Space />
                <div className='Contact--mainImg' />
                <Container className='Contact--container'>
                    <Row md={2} className='Contact--row'>                        
                        <Col className='Contact--column' id='firstFirst'>  
                            <div className="Contact--communicationContainer">                   
                                <div className="Contact--communication" id="icon">
                                    <img src={eitaa} alt="eitaa" style={{width: '30px'}} />
                                    <img src={telegram} alt="telegram" style={{width: `${!isMedum ? '35px' : '30px'}`}} />
                                    <img src={whatsapp} alt="whatsapp" style={{width: `${!isMedum ? '35px' : '30px'}`}} />
                                    <MdOutlineEmail color='#c44569' size={`${!isMedum ? '40' : '30'}`} />
                                </div>
                                <div className="Contact--communication" id="address">
                                    <a href="https://eitaa.com/ftm_moi" style={{marginBottom: '22px'}}>@ftm_moi</a>
                                    <a href="https://t.me/ftm_moi" style={{marginBottom: '25px'}}>@ftm_moi</a>                                    
                                    <span style={{marginBottom: '25px'}}>09306631300</span>                                    
                                    <span style={{marginBottom: '3px'}}>mh.mojtabaei96@gmail.com</span>
                                </div>
                            </div>
                        </Col>
                        <Col className='Contact--column' id='firstSecond' lg="2">
                            <p> راه‌های ارتباطی </p>                            
                        </Col>
                    </Row>

                    <Row md={2} className='Contact--row'>
                        <Col className='Contact--column' id='secondFirst'>
                            <div className="Contact--sendMsg"> 
                                <span>موضوع پیام :</span>
                                <input type="text" onChange={handleSubject} />                                                                                            
                            </div>
                            {errors.subject && <span className="Contact--error">{errors.subject}</span>}

                            <div className="Contact--sendMsg">    
                                <span>آدرس ایمیل :</span>
                                <input type="email" onChange={handelEmail} />                                                                                            
                            </div>
                            {errors.email && <span className="Contact--error">{errors.email}</span>}
                            
                            <div className="Contact--sendMsg">    
                                <span>متن پیام :</span>
                                <textarea onChange={handleMessage}></textarea><br/>                                
                            </div>
                            <Space />
                            <div className="ModalMsg">
                                <Button handleClick={handleSubmit} style={{marginBottom: '10px'}}>ارسال</Button>
                                <Modal isOpen={openModal} onClose={handleCloseModal}>
                                    <h4>با تشکر از پیام شما</h4>
                                </Modal>
                            </div>
                        </Col>
                        <Col className='Contact--column' id='secondSecond' lg="2">  
                            <p> ارسال پیام </p>
                        </Col>
                    </Row>
                </Container>            
            </div>
        </Layout>
    );
}

export default Contact;
