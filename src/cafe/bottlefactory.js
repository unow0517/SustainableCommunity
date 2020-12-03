import React from 'react';
import title from "../image/cafe/bottlefactory/bottlefactorytitle.jpg";
import pic1 from "../image/cafe/bottlefactory/image1.jpg";
import pic2 from "../image/cafe/bottlefactory/image2.jpg";
import '../index.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faHome} from "@fortawesome/free-solid-svg-icons"

const BottleFactory = () => {
    return(
        <div className='shopinside'>
            <section className='head'>
                <img src={title} alt='thepickermain' className='shoptitle'/>
                <section className='icons'>
                    <a href='https://bottlefactory.co.kr/' target='_blank' rel='noreferrer'>
                        <FontAwesomeIcon icon={faHome} className='icon'/></a>
                    <a href='https://www.instagram.com/bottle_factory/?hl=ko' target='_blank' rel='noreferrer'>
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
                <i className='address'>주소: 서울특별시 서대문구 연희동 708번지 1층</i><br/><br/>
                <h2>일회용품을 사용하지 않는 카페 & 케이터링</h2><br/><br/>
                <p><strong>더 피커는 국내최초 제로웨이스트 플랫폼</strong>으로, 
                    포장 폐기물 감소를 중심으로 다양한 쓰레기의 발생을 관찰하고 줄여 나갑니다.<br/> 
                    지속가능한 환경이 자연스럽게 존재하던 과거와 끊임 없이 소통하며 자원의 순환과 건강한 소비문화의 
                    회복에 힘씁니다.</p><br/><br/>
                <h3>관련정보</h3>
                <p><a href="http://h21.hani.co.kr/arti/society/society_general/47184.html" target='_blank' rel='noreferrer'>
                    일회용품 없는 카페는 가능하다 - 한겨레21 이승준기자(gamja@hani.co.kr)</a></p>
                <p><a href='http://futurechosun.com/archives/46417' target='_blank' rel='noreferrer'>“친환경 카페에서 컵공유 
                    플랫폼으로 진화”…보틀팩토리, 공유컵 ‘리턴미’ 개발</a></p>
                <p><a href='http://www.greenkorea.org/activity/living-environment/zerowaste/69123/' target='_blank' rel='noreferrer'>
                    새로운 쓰레기 정책이 필요하다! 시민인터뷰 ③ 일회용 없는 카페 ‘보틀팩토리’ 대표 정다운</a></p>
                <p><a href='http://www.popsci.co.kr/news/articleView.html?idxno=8985' target='_blank' rel='noreferrer'>
                    일회용품 없이 커피를 마시자....보틀 팩토리 정다운 대표</a></p>
                <p><a href='https://www.etoday.co.kr/news/view/1800149' target='_blank' rel='noreferrer'>
                    [e기자가 간다] "텀블러 빌려가세요" 일회용품 제로 까페, '보틀팩토리'</a></p>
                <p><a href='https://news.joins.com/article/23433724' target='_blank' rel='noreferrer'>
                    [출처: 중앙일보] 비닐봉지 없고 치약 덜어서 사간다…그런데 꽤 편했던 이유</a></p>
                <br/><br/>
            </section>     
            <section>
                <img src={pic1} alt='image1' className = 'picture'/>
                <img src={pic2} alt='image2' className = 'picture'/>
            </section>
        </div>
    );
};

export default BottleFactory;