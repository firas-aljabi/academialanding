import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Services() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Impress تعرف على حاضنة الأعمال الرقمیة">
                <section className="services__area-five services__bg-five" data-background="/assets/img/bg/inner_services_bg02.jpg">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title text-center mb-40">
                                    <span className="sub-title">ھدفنا تعزیز ابتكار تكنولوجیا المعلومات بین فئة الشباب ومؤسسي المشاریع الصغیرة من خلال توفیر فرص العمل والبرامج التدریبیة الخاصة والإرشاد والاستشارات الإداریة</span>
                                    <h2 className="title">نساعدك في</h2>
                                </div>
                            </div>
                        </div>
                        <div className="services-item-wrap">
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img01.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-profit" />
                                            </div>
                                            <h4 className="title">استقطاب المستثمرین</h4>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img02.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-investment-1" />
                                            </div>
                                            <h4 className="title">تقدیم الدعم الاستشاري</h4>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img03.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-pie-chart" />
                                            </div>
                                            <h4 className="title">تسھیلات الحصول على تمویلات</h4>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img04.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-light-bulb" />
                                            </div>
                                            <h4 className="title">تسھیلات الحصول على امتیاز تجاري</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img05.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-investment" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">خدمات استخراج التراخیص والسجلات الحكومیة</Link></h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                                <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img06.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-piggy-bank" />
                                            </div>
                                            <h4 className="title">دعم المبیعات والتسویق</h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                            <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img07.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-financial-profit" />
                                            </div>
                                            <h4 className="title">اعتماد العلامة التجاریة وتأھیلھا</h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                        <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                           <img src="/assets/img/services/services_img08.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-budget" />
                                            </div>
                                            <h4 className="title">دعم حصة إیرادات الشركات</h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img08.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-budget" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">تقدیم الدعم الاداري للشركة والموارد البشریة</Link></h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img08.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-budget" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">تنسیق المؤتمرات والفعالیات والمعارض</Link></h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img08.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-budget" />
                                            </div>
                                            <h4 className="title"><Link href="/service-details">إقامة برامج التدریب و ورش عمل</Link></h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item shine-animate-item">
                                        <div className="services-thumb">
                                            <img src="/assets/img/services/services_img08.jpg" alt="" />
                                        </div>
                                        <div className="services-content">
                                            <div className="icon">
                                                <i className="flaticon-budget" />
                                            </div>
                                            <h4 className="title">تفعیل شراكات تنمویة مستدامة مع القطاع الأھلي والخاص</h4>
                                            {/*<p>Morem ipsum dolor sittemet consectetur adipiscing.</p>
                                    <Link href="/services-details" className="btn">Read More</Link>*/}
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="section-title text-center mb-40 ">
                                <h1 className="title">لدیك مشروع جدید؟؟</h1>
                                <br/>
                                <div style={{display:"flex",justifyItems:"center" , alignItems:"center" , justifyContent:"space-around" }}>
                                <botton><Link href="/contact" className="btn" >تواصل معنا الان</Link></botton>
                                <botton><Link href="/services-6" className="btn" style={{marginLeft:"5px"}}> تعرف على المزید</Link></botton>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}