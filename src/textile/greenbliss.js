import React from 'react';
import title from '../image/textile/greenbliss/greenblisstitle.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import greenblissbear from '../image/textile/greenbliss/greenblissbear.jpg';
import greenblissmask from '../image/textile/greenbliss/greenblissmask.jpg';
import greenblisssocks from '../image/textile/greenbliss/greenblisssocks.jpg';
import '../index.css';

const GreenBliss = () => {
    return (
        <div>
            <section className='head'>
                <img src={title} alt='thepickermain' className='title'/>
                <section className='icons'>
                    <a href='http://greenbliss.co.kr/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/greenbliss7/' target='_blank' rel='noreferrer'>
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
                <i className='address'>주소: 서울시 강남구 신사동 545-18 가로골목 3층</i><br/><br/>
                <h2>그린블리스 GreenBliss</h2><br/><br/>
                <p>예쁘고 편안한 양말, 마스크, 티셔츠 등 라이프스타일 제품을
                    식물성 오가닉 소재로 환경에 해를 최소화하여 만들고,
                    자연과 동물의 소중함을 이야기하고 행동하려 노력하는 자연주의 브랜드입니다.<br/>
                    그린블리스는 자연이 주는 무한한 행복감을 담은, 예쁘고 편안한 양말, 마스크, 
                    타월, 손수건, 티셔츠를 만듭니다.</p><br/><br/>
                <h3>관련정보</h3>
                <p><a href='http://kfem.or.kr/?p=207819'>[후원 후기] 그린블리스(GREEN BLISS), 
                    해양포유류보호법과 어구관리법 제정을 위한 활동에 후원해주셨습니다!</a></p>
                <br/><br/>
            </section>     
            <section>
                <img src={greenblissbear}  alt='그린블리스 곰' className='picture'/>
                <img src={greenblisssocks} alt="그린블리스 양말" className='picture'/>
                <img src={greenblissmask} alt='그린블리스 마스크' className='picture'/>
            </section>
        

       
        <i></i>
        <br/>
        <br/>
        <p></p>
        <br/>
        <h3>관련정보</h3>
         
        </div>
    );
};

export default GreenBliss;