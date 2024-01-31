import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات التجارة الخارجیة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">نقدم خدمات استشاریة متخصصة للمستوردین والمصدرین تتعلق بالعمل التجاري و الاستیراد والتصدیر من الألف إلى الیاء، بالتعاون مع استشاریین و خبراء إداریین وقانونیین وخبراء في التخلیص الجمركي،
                                            والتكلیف الضریبي والشحن والنقل الدولي والترانزیت</h2>
                                            <div className="services__details-thumb">
                                                <img src="data:image/jpeg;base64,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" alt="" />
                                            </div>
                                            <div className="services__details-inner-two services__details-inner-four">
                                                <div className="row gutter-24 align-items-center">
                                                    <div className="col-48">
                                                        <div className="services__details-inner-img">
                                                            <img src="/assets/img/services/services_details_inner03.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-52">
                                                        <div className="services__details-inner-content-two">
                                                            <h4 className="title" style={{textAlign:"end"}}></h4>
                                                            <p style={{textAlign:"end"}}>الامتثال لقوانین وسیاسات التصدیر الدولیة لضمان عملیات تصدیر سلسة وسلیمة قانونیًا</p>
                                                            <p style={{textAlign:"end"}}>إدارة أصول الشحن بكفاءة، وضمان النقل في الوقت المناسب وبتكلفة معقولة</p>
                                                            <p style={{textAlign:"end"}}>تبسیط عملیات التخلیص الجمركي والتكلیف الضریبي</p>
                                                            <p style={{textAlign:"end"}}>دعم قضائي موثوق بھ فیما یتعلق بقضایا التجارة الخارجیة</p>
                                                            <p style={{textAlign:"end"}}>تخفیف المخاطر المرتبطة بالأنشطة التجاریة الدولیة</p>
                                                            <p style={{textAlign:"end"}}>الوكالات الخارجیة</p>
                                                            <p style={{textAlign:"end"}}>الإدخال المؤقت</p>
                                                            <p style={{textAlign:"end"}}>محاور التجارة الخارجیة</p>
                                                            <p style={{textAlign:"end"}}>الترانزیت وشركات الشحن</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-30">
                                        <aside className="services__sidebar">
                                            <div className="sidebar__widget sidebar__widget-two">
                                                <div className="sidebar__contact sidebar__contact-two" data-background="/assets/img/services/sidebar_contact_bg.jpg">
                                                    <h2 className="title">إذا كنت بحاجة إلى أي مساعدة، تواصل معنا</h2>
                                                    <Link href="tel:0123456789" className="btn"><i className="flaticon-phone-call" />+91 705 2101 786</Link>
                                                </div>
                                            </div>
                                         {/** <div className="sidebar__widget sidebar__widget-three">
                                                <h4 className="sidebar__widget-title">أرسل لنا رسالة</h4>
                                                <div className="sidebar__form">
                                                    <form action="#">
                                                        <div className="form-grp">
                                                            <input type="text" placeholder="اسمك" />
                                                        </div>
                                                        <div className="form-grp">
                                                            <input type="email" placeholder="البريد الالكتروني" />
                                                        </div>
                                                        <div className="form-grp">
                                                            <textarea name="message" placeholder="اكتب رسالتك" />
                                                        </div>
                                                        <button type="submit" className="btn btn-two">إرسال رسالة</button>
                                                    </form>
                                                </div>
                                            </div>
                                            */ } 
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-title text-center mb-40 ">
                        <h1 className="title">اطلب خدمة استشارات التجارة الخارجیة الان</h1>
                        <br/>
                        <div>
                        <botton><Link href="/contact" className="btn" >تواصل معنا الان</Link></botton>
                        </div>
                        </div>
                    </section>
                    {/* services-details-area-end */}
                    {/* brand-area */}
                  
                </div>

            </Layout>
        </>
    )
}