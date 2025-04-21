import React, {useState} from "react";
import Layout from "../Layout/Layout";
import Space from "../Space/Space";
import "./Portfolio.css";
import websites from "./websites";
import { PROJECT_URL } from "../../configs/general";
import { useMediaQuery } from 'react-responsive';


const Portfolio = () => {
    const [data, setData] = useState(websites);
    const isMedum = useMediaQuery({ query: '(max-width: 992px)' });

    return(
        <Layout>
            <div className="Portfolio">            
                <Space />
                <div className='Portfolio--mainImg' />
                <div className="Portfolio--container">
                    {data.map((item, index) => (
                        <div className={`Portfolio--${index % 2 === 0 ? `primary` : `secondary`} outer`} 
                        id={!isMedum ? `${index % 2 === 0 ? `left` : `right`}` : ''}
                        // id={`${index % 2 === 0 ? `left` : `right`}`}
                        style={{ borderTop: index === 0 ? '1px solid #2c3e50' : 'none',
                            borderBottom: index === data.length -1 ? 
                            index % 2 === 0 ? '2px solid #2c3e50' : '2px solid #c44569'
                            : 'none'
                        }}
                        >
                            <h4 className={`Portfolio--${index % 2 === 0 ? `secondary` : `primary`} inner`}
                            style={{ borderTop: index === 0 ? 'none' : '' }}
                            >
                                <a href={item.url}>{item.name}</a>
                            </h4>                            
                            <p>{item.description}</p>
                            <img src={`${PROJECT_URL}/assets/images/sites/${item.image}`} alt={item.name}></img>                            
                        </div>
                    ))}                    
                </div>            
            </div>
        </Layout>


        // <Layout>
        //     <div className="Portfolio">            
        //         <Space />
        //         <div className='Portfolio--mainImg' />
        //         <div className="Portfolio--container">
        //             <div className="Portfolio--row">
        //                 <div className="Portfolio--primary outer" id="left"
        //                 style={{borderTopRightRadius: 0}}>
        //                     <div className="Portfolio--secondary inner">
        //                         <h3>۲ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>           
        //                 <div className="Portfolio--secondary outer" id="right"
        //                 style={{borderTopLeftRadius: 0}}>
        //                     <div className="Portfolio--primary inner">
        //                         <h3>۱ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>                
        //             </div>

        //             <div className="Portfolio--row">
        //                 <div className="Portfolio--secondary outer" id="left">                            
        //                     <div className="Portfolio--primary inner">
        //                         <h3>۴ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>           
        //                 <div className="Portfolio--primary outer" id="right">
        //                     <div className="Portfolio--secondary inner">
        //                         <h3>۳ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>                
        //             </div>

        //             <div className="Portfolio--row">
        //                 <div className="Portfolio--primary outer" id="left"
        //                 style={{borderBottomRightRadius: 0}}>
        //                     <div className="Portfolio--secondary inner">
        //                         <h3>۶ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>           
        //                 <div className="Portfolio--secondary outer" id="right"
        //                 style={{borderBottomLeftRadius: 0}}>
        //                     <div className="Portfolio--primary inner">
        //                         <h3>۵ سایت شماره</h3>
        //                     </div>
        //                     <p>
        //                         لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
        //                     </p>
        //                     <img src={portfolio} alt="website1"></img>
        //                 </div>                
        //             </div>
                    
        //         </div>            
        //     </div>
        // </Layout>
    );
}

export default Portfolio;
