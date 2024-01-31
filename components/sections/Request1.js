import Link from 'next/link'

export default function Request1() {
    return (
        <>
            <section className="request-area request-bg" data-background="/assets/img/bg/request_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="request-content text-center tg-heading-subheading animation-style3">
                                <h2 className="title tg-element-title">تقديم أفضل تجربة لخدمات استشارات الأعمال</h2>
                                <div className="content-bottom">
                                    <Link href="tel:0123456789" className="btn">اضغط للتواصل على الواتس اب</Link>
                                    <div className="content-right">
                                        <div className="icon">
                                            <i className="flaticon-phone-call" />
                                        </div>
                                        <div className="content">
                                         {/** */}   <span>مكالمة مجانية</span>
                                            <Link href="tel:0123456789">+ 88 ( 9600 ) 6002</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="request-shape">
                    <img src="/assets/img/images/request_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/request_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
