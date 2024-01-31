import CounterUp from "../elements/CounterUp";

export default function Counter1() {
    return (
        <>
            <section className="counter-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-trophy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={145} />+</h2>
                                    <p>مشروع مكتمل <br /> بنجاح</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-happy" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={292} /></h2>
                                    <p>شريك سعيد<br /> بخدماتنا </p>
                                </div>
                            </div>
                        </div>
                <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-china" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={19} />+</h2>
                                    <p>استشاراتنا تصل <br /> لجميع أنحاء العالم</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="counter-item">
                                <div className="icon">
                                    <i className="flaticon-time" />
                                </div>
                                <div className="content">
                                    <h2 className="count"><CounterUp count={25} />+</h2>
                                    <p>سنوات من الخبرة <br /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-shape-wrap">
                    <img src="/assets/img/images/counter_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/counter_shape02.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                    <img src="/assets/img/images/counter_shape03.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
