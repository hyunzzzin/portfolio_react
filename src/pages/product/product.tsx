import React from 'react';
import './product.css'

import defaultImg from '../../image/default.jpg'
const Product = () => {
    return (
        <>
            <section className={' section container-fluid mt-3'}>
                <h1>작업물</h1>
                <div className={"cardSection d-flex justify-content-center mt-3"}>
                    <div className="card" style={{ width: '18rem', borderRadius: '16px' }}>
                        <img src={defaultImg} className="cardImg card-img-top" alt="wooriBank" />
                        <div className="card-body">
                            <h5 className="card-title">우리은행</h5>
                            <p className="card-text">우리은행 index 클론코딩</p>
                            <a href="https://wooribank.netlify.app/" target={"_blank"} className="btn btn-primary">
                                Woori bank
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', borderRadius: '16px' }}>
                        <img src={defaultImg} className="cardImg card-img-top" alt="netfilx" />
                        <div className="card-body">
                            <h5 className="card-title">넷플릭스</h5>
                            <p className="card-text">넷플릭스 Index clone</p>
                            <a href="https://netflix6874.netlify.app/ "target={"_blank"} className="btn btn-danger">
                                NetFilx
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', borderRadius: '16px' }}>
                        <img src={defaultImg} className="cardImg card-img-top" alt="lab" />
                        <div className="card-body">
                            <h5 className="card-title">UNIV. LAB</h5>
                            <p className="card-text">UNIV. Web</p>
                            <a href="https://eces.netlify.app/"target={"_blank"} className="btn btn-secondary">
                               ECES WEB
                            </a>
                        </div>
                    </div>
                    <div className="card" style={{ width: '18rem', borderRadius: '16px' }}>
                        <img src={defaultImg} className="cardImg card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Klaymint</h5>
                            <p className="card-text">NFT의 합성 서비스 및 KIP17 토큰의 스왑 서비스 제공</p>
                            <a href="https://www.klaymint.io/" target={"_blank"} className="btn btn-warning">
                                klaymint
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Product