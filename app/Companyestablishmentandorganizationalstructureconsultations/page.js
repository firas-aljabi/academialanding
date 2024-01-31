import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="استشارات تأسیس الشركات والھیكل النظیمي">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">نقدم استشارات تأسیس الشركات بإشراف أفضل الاختصاصیین والاكادیمیین لتأسیس الأنشطة التجاریة والإنتاجیة
                                            والخدمیة. لنساعدك في معالجة التحدیات التي تواجھھا شركتك الناشئة</h2>
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
                                                            <p style={{textAlign:"end"}}>: تأسیس الشركات</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>تبسیط الاجراءات و التراخیص التجاریة</li>
                                                                    <li>تأمین أساس شركتك الناشئة من خلال العقود والقواعد واللوائح المعدة والمعدلة بدقة</li>
                                                                    <li>التخفیف من المخاطر القانونیة وتعزیز بیئة عمل آمنة منذ البدایة</li>
                                                                    <li>ترتیب عملیات الاندماج والاستحواذ</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: الھیكل التنظیمي</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li> (SMO) تأسیس ودعم تشغیل مكتب إدارة الاستراتیجیة</li>
                                                                    <li>(PMO) تأسیس ودعم تشغیل مكتب إدارة المشاریع</li>
                                                                    <li> (VRO)تأسیس ودعم تشغیل مكتب تحقیق الرؤیة</li>
                                                                    <li>إدارة التغییر التنظیمي</li>
                                                                    <li>(TMO) تأسیس ودعم تشغیل مكتب إدارة ومتابعة التحول الاستراتیجي</li>
                                                                    <li>تصمیم استراتیجیة مبادرات التحول</li>
                                                                </ul>
                                                            </div>
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
                        <h1 className="title">اطلب خدمة استشارات تأسیس الشركات والھیكل التنظیمي الان</h1>
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