import React from 'react';
import pic1 from "../image/cafe/earthus/earthustakeout.jpg";
import title from "../image/cafe/earthus/earthustitle.jpg";
import '../index.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import Comment from 'comments/comment'


const EarthUs = (props) => {
    return(
        <div className='cafeinside'>
            <section className='head'>
                <img src={title} alt='thepickermain' className='shoptitle'/>
                <section className='icons'>
                    <a href='https://www.instagram.com/earth__us/?hl=en' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </section>
            </section>
            <section>
                <i className='address'>주소: 서울특별시 마포구 성미산로 150(지번) 서울특별시 마포구 연남동 239-49</i><br/><br/>
                <h2>어스어스</h2><br/><br/>
                <p>마포구 연남동 주민센터 근처에 위치한 '얼스어스'. 카페 이름답게 플라스틱 빨대부터 종이컵, 심지어 냅킨까지 
                    모든 일회용품을 사용하지 않는 친환경 카페.<br/>신선한 딸기가 토핑으로 올라가 있고 부드러운 크림치즈 또는 
                    요거트에 상큼한 딸기의 조화가 먹음직스러운 '얼스퀘이크'가 인기 메뉴.<br/>케이크 토핑은 제철 과일로 계절마다 
                    바뀔 수 있으며 음료, 케이크 모두 개인 용기 지참 시에만 포장 가능.<br/>매일12:00 ~ 21:00 </p><br/><br/>
                <h3>관련정보</h3>
                <p><a href='https://www.nocutnews.co.kr/news/5011072'>
                    NO 플라스틱 카페 "테이크 아웃요? 반찬통에 싸드립니다"</a></p>
                <br/><br/>
            </section>     
            <section>
                <img src={pic1} alt='image1' className = 'picture'/>
            </section>
            <Comment {...props}/>
        </div>
    )
}

export default EarthUs;