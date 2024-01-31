import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات القانونیة">
                <div> 
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">نعمل على تقدیم الاستشارات القانونیة لجمیع الشركات الخارجیة التي ترغب بالعمل في مرحلة إعادة الإعمار في سوریة، وشركات التطویر العقاري، والشركات القائمة والراغبة بالتحول إلى شركات مساھمة، أو التي ترغب بطرح جزء من أسھمھا للتداول او استشارات الإقامة والتوظیف وقوانین الشركات. نوفر لك جمیع الخدمات القانونیة التي تحتاجھا ومنھا</h2>
                                            <div className="services__details-inner-two services__details-inner-four">
                                                <div className="row gutter-24 align-items-center">
                                                    <div className="col-48">
                                                        <div className="services__details-inner-img">
                                                            <img src="data:image/jpeg;base64,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" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-52">
                                                        <div className="services__details-inner-content-two">
                                                            <p style={{textAlign:"end"}}>ضمان الامتثال لقوانین العمل والتأمین المتطورة</p>
                                                            <p style={{textAlign:"end"}}>ضمان بیئة عمل عادلة وحمایة كل من أصحاب العمل والموظفین</p>
                                                            <p style={{textAlign:"end"}}>صیاغة عقود تأسیس الشركات العائلیة والمساھمة المغفلة</p>
                                                            <p style={{textAlign:"end"}}>إصدار التراخیص والامتثال التنظیمي. لضمان مسار سلس وقانوني لمساعیك التجاریة</p>
                                                            <p style={{textAlign:"end"}}>صیاغة الأطر القانونیة للوكالات وعقود العمل والمعاملات التجاریة</p>
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
                        <h1 className="title">اطلب خدمة الاستشارات القانونیة الان</h1>
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