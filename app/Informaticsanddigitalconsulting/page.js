import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات المعلوماتیة والرقمیة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row"> 
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">خدماتنا الاستشاریة المعلوماتیة والرقمیة تمكنك من رفع مستوى تواجدك الرقمي وخدماتك التي تقدمھا لعملائك حیث نعمل على</h2>
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
                                                            <p style={{textAlign:"end"}}>: تطویر تطبیقات المواقع الإلكترونیة و البرمجیات</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>تطبیقات وبرامج مصممة خصی ًصا لمتطلبات شركتك</li>
                                                                    <li>نعمل على الارتقاء بتجربة المستخدم في المواقف والتطبیقات</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: إنشاء مكتب المؤسسة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>إنشاء قنوات اتصال قویة من خلال إعدادات مكتب المؤسسة</li>
                                                                    <li>تعزیز التعاون والتواصل الرقمي السلس داخل مؤسستك</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: تحلیل الاحتیاجات التقنیة للشركات</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>تحلیل متعمق لمتطلباتك التقنیة لمواءمة الحلول الرقمیة مع أھداف عملك</li>
                                                                    <li>تحسین البنیة التحتیة التكنولوجیة الخاصة بعملك لتحقیق الكفاءة وقابلیة التوسع</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: تحلیل تواجدك الرقمي على مواقع الویب</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>دراسة شاملة للمحتوى الرقمي الخاص بك وإمكانیات تطویره</li>
                                                                    <li>تعزیز سھولة القراءة وإمكانیة الوصول ومشاركة المستخدم مقالات رقمیة منظمة عن عملك</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: تطویر تكنولوجیا الأمن الرقمي</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>توفیر تقنیات الأمان لمواجھة تھدیدات الأمن السیبراني</li>
                                                                    <li>حمایة الأصول الرقمیة ومالعلومات الحساسة باستخدام حلول الأمان المتطورة</li>
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
                        <h1 className="title">اطلب خدمة الاستشارات الرقمیة الان</h1>
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