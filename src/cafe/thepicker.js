import React from 'react';
import title from "../image/cafe/thepicker/thepickertitle.png";
import pic1 from "../image/cafe/thepicker/image1.jpg";
import pic2 from "../image/cafe/thepicker/image2.jpg";
import pic3 from "../image/cafe/thepicker/image3.jpg";
import '../index.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"
import Comment from 'comments/comment';

const ThePicker = (props) => {
    return(
        <div className='shopinside'>
            <section className='head'>
                <img src={title} alt='thepickermain' className='shoptitle'/>
                <section className='icons'>
                    <a href='https://thepicker.net/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/thepicker/?hl=ko' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/></a>
                </section>
            </section>
            <section>
                <i className='address'>주소: 서울시 성동구 왕십리로 115, 헤이그라운드 9층</i><br/><br/>
                <h2>ZERO WASTE LIFESTYLE STORE IN KOREA</h2><br/><br/>
                <p><strong>더 피커는 국내최초 제로웨이스트 플랫폼</strong>으로, 
                    포장 폐기물 감소를 중심으로 다양한 쓰레기의 발생을 관찰하고 줄여 나갑니다.<br/> 
                    지속가능한 환경이 자연스럽게 존재하던 과거와 끊임 없이 소통하며 자원의 순환과 건강한 소비문화의 
                    회복에 힘씁니다.</p><br/><br/>
                <h3>관련정보</h3>
                <p><a href='http://m.segye.com/view/20190206001570' rel = 'noreferrer' target="_blank">
                    국내 제로 웨이스트 1호 매장 '더피커' 대표 인터뷰 [우리의 환경은 평등합니까]_세계일보</a></p>
                <p><a href='https://brunch.co.kr/@thefirstmedia/110' target="_blank" rel = 'noreferrer'> 더 피커,
                    쓰레기는 두고 가세요_브런치</a></p>
                <p><a href='https://www.youtube.com/watch?v=QHw9JDS8iS4' target="_blank" rel = 'noreferrer'> 
                [안쓰고 산다] 포장이 없는 잡화점, '제로웨이스트숍 더피커' 편. 환경부 유튜브</a></p><br/><br/>
            </section>     
            <section>
                <img src={pic1} alt='image1' className = 'picture'/>
                <img src={pic2} alt='image2' className = 'picture'/>
                <img src={pic3} alt='image3' className = 'picture'/>
            </section>
            <Comment {...props}/>
        </div>
    );
};

export default ThePicker;