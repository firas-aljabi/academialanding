import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات التسویقیة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">خدماتنا الاستشاریة التسویقیة تمكنك من تحدید الفجوات في خطتك التسویقیة وتعدیلھا بأنسب شكل، مما یضمن تمیز
                                            علامتك التجاریة في السوق التنافسي الیوم</h2>
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
                                                            <h4 className="title" style={{textAlign:"end"}}>ممیزات استشاراتنا التسویقیة</h4>
                                                            <p style={{textAlign:"end"}}>: دراسة سوق شاملة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>اكتشف رؤى قیمة حول عملائك المستھدفین و سلوكھم في السوق</li>
                                                                    <li>صمم استراتیجیاتك بناء على البیانات الدقیقة للحصول على أفضل النتائج</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: حلول تسویقیة فعالة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>استشارات خاصة بحملاتك التسویقیة ونتائج المبیعات لتعزیز فعالیة خطتك وتحقیق المزید من الأرباح</li>
                                                                    <li>استراتیجیات مصممة لتلبیة الاحتیاجات الفریدة للشركات الكبرى والمشاریع الناشئة</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: تعزیز صورة العلامة التجاریة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>بناء صورة ذھنیة قویة لعلامتك التجاریة بحیث تلقى صدى لدى جمھورك</li>
                                                                    <li>صیاغة قصة مقنعة تؤسس لتصور دائم وإیجابي للعلامة التجاریة</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: التمیز في تسویق المحتوى الرقمي</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>نساعدك في تعزیز مستوى تواجدك على الانترنت من خلال التسویق بالمحتوى الرقمي</li>
                                                                    <li>تحسین ظھور علامتك التجاریة في محركات البحث، مما یضمن بقاء عملك مرئیًا للعملاء</li>
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
                        <h1 className="title">اطلب خدمة الاستشارات التسویقیة الان</h1>
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