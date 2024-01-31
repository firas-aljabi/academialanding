import Link from 'next/link'

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <span className="sub-title" data-aos="fade-up" data-aos-delay={0}></span>
                                <h2 className="title" data-aos="fade-up" data-aos-delay={200}>أكادیمیا للتدریب و الاستشارات</h2>
                                <p data-aos="fade-up" data-aos-delay={400}>شركة استشارات سوریة معتمدة لدى وزارة التنمیة الإداریة، نقدم مجموعة واسعة من خدمات الاستشارات والتدریب ملتزمون بریادة الأعمال ودعم المشاریع الناشئة والصغیرة، لتحقیق أداء احترافي یعزز تجربة العمیل</p>
                                <Link href="/about" className="btn" data-aos="fade-up" data-aos-delay={600}>معرفة المزيد</Link>
                            </div>
                            <div className="banner-shape">
                                <img src="/assets/img/banner/banner_shape01.png" alt="" className="rightToLeft" />
                                <img src="/assets/img/banner/banner_shape02.png" alt="" className="ribbonRotate" />
                            </div>
                        </div>
                    </div>
                    <div className="banner-social">
                        <h5 className="title">Follow us</h5>
                        <ul className="list-wrap">
                            <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                            <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                        </ul>
                    </div>
                    <div className="banner-scroll">
                        <Link href="#about">النزول للأسفل <span><i className="fas fa-arrow-right" /></span></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
