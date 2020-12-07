import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import jigu from '../image/dailygoods/jigu/jigutitle.png'
import Comment from 'comments/comment';

const Jigu = (props) => {
    console.log(props)
    return (
        <div className='cafeinside'>
            <section className='head'>
                <img src={jigu} alt='jigumain' className='shoptitle'/>
                <section className='icons'>
                    <a href='https://smartstore.naver.com/peaceontable' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/zerowaste_jigu/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </section>
            </section>
            <section>
                <div>제로웨이스트샵 '지구'</div>
                <i className='address'>주소: 서울시 동작구 성대로 1길 16</i><br/>
                Tue- Sat / 1-8 pm<br/>
                <h2>지구를 위한 낭비없는 가게</h2><br/><br/>
                <p>Zero waste shop & cafe for the earth</p><br/><br/>
            </section>
            <Comment {...props}/>
        </div>
    );
};

export default Jigu;