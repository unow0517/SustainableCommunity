import React from 'react';
import title from "../image/others/superbin/superbintitle.png";
import '../index.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import Comment from 'comments/comment';

const Superbin = (props) => {
    return(
        <div className='shopinside'>
            <section className='head'>
                <img src={title} alt='Superbinmain' className='shoptitle'/>
                <section className='icons'>
                    <a href='http://www.superbin.co.kr/new/index.php' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/superbin_official/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </section>
            </section>
            <section>
                <i className='address'>주소: 경기도 성남시 황새울로 216, 5층, 
                    대전광역시 유성구 문지로 193 진리관 T329호 (문지동, 문지캠퍼스)</i><br/><br/>
                <h2>로봇과 디자인이 만나 지속가능한 순환경제를 만들어갑니다</h2><br/>
                <br/> Tel: 1600-6217 <br/> Fax: 031-605-6219 <br/> E-mail : info@superbin.co.kr
            </section>
            <Comment {...props}/>
        </div>
    );
};

export default Superbin;