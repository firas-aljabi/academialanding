import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="استشارات الموارد البشریة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">من خلال استشاراتنا في الموارد البشریة لشركتك، نساعدك على مواءمة القوى العاملة لدیك مع الأھداف التنظیمیة، تطویر السیاسات
                                            والآلیات التي تعزز الأداء، وتسھیل اجراءات التوظیف مما یضمن استمرار نمو شركتك وتواجدك في السوق</h2>
                                            <div className="services__details-thumb">
                                                <img src="data:image/jpeg;base64,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" alt="" />
                                            </div>
                                            <div className="services__details-inner-two services__details-inner-four">
                                                <div className=" gutter-24 align-items-end">
                                                    
                                                    <div className="col-52">
                                                        <div className="services__details-inner-content-two">
                                                            <h4 className="title" style={{textAlign:"end"}}></h4>
                                                            <p style={{textAlign:"end"}}>صیاغة استراتیجیة قویة للموارد البشریة تتماشى مع أھداف عملك</p>
                                                            <p style={{textAlign:"end"}}>وضع سیاسات وآلیات مخصصة للتقییم الشامل للموارد البشریة</p>
                                                            <p style={{textAlign:"end"}}>تعزیز ثقافة الأداء المتمیز والتحسین المستمر</p>
                                                            <p style={{textAlign:"end"}}>تدریس وتطویر الموارد البشریة</p>
                                                            <p style={{textAlign:"end"}}>تمكین فریق الموارد البشریة الخاص بك بالمعرفة والمھارات المتطورة</p>
                                                            <p style={{textAlign:"end"}}>تصمیم خطط تدریبیة مخصصة لتعزیز قدرات المتخصصین في الموارد البشریة لدیك</p>
                                                            <p style={{textAlign:"end"}}>التوظیف وإدارة الرواتب</p>
                                                            <p style={{textAlign:"end"}}>إدارة كشوف المرتبات بكفاءة، وضمان الدقة والامتثال</p>
                                                            <p style={{textAlign:"end"}}>إجراء تقییمات شاملة لتحدید نقاط الضعف الرئیسیة في الموارد البشریة</p>
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
                        <h1 className="title">اطلب خدمة استشارات الموارد البشریة الان</h1>
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