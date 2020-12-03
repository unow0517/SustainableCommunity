import React from 'react';
import title from "../image/others/zerodesign/zerodesigntitle.png";
import '../index.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"

const ZeroDesign = () => {
    return(
        <div className='cafeinside'>
            <section className='head'>
                <img src={title} alt='thepickermain' className='shoptitle'/>
                <section className='icons'>
                    <a href='https://thepicker.net/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/thepicker/?hl=ko' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </section>
            </section>
            <section className='comment'>
                    <form>
                        <input type='text' maxLength='500' placeholder='leave Comments'/>
                        <input type='submit'/>
                    </form>
            </section>
            <section>
                <i className='address'>주소: 서울시 성동구 왕십리로 115, 헤이그라운드 9층</i><br/><br/>
                <h2>제로 디자인/000간</h2><br/><br/>
                <p>ZERO DESIGN은 공공공간의 지속가능한(sustainable) 패션&리빙 브랜드입니다. 환경을 생각하는 디자인,
                    오래 입을 수 있는 질 좋은 옷, 지역의 생산자들과 함께 만드는 지속 가능한 패션으로 낭비 없는 삶을 지향합니다.
                    슬로우 라이프를 지향하는 미니멀리스트들에게 가치있는 소비를 도와줍니다.</p><br/><br/>
            </section>     
        </div>
    );
};

export default ZeroDesign;