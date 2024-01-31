import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات الإداریة والتجاریة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">نقدم خدمات استشاریة متنوعة منھا الإداریة والھندسیة والمصرفیة وھندسة العملیات لدعم المشاریع وخطط الأعمال. وتقدیم دراسات الجدوى الاقتصادیة لأي مشروع صغیر أو كبیر أو استثماري وخلق مراكز جدیدة ورؤیة
                                            مبتكرة لآلیة العمل التجاري والوقوف إلى جانب رجال الأعمال</h2>
                                            <div className="services__details-thumb">
                                                <img src="https://ar.lpcentre.com/new_storage/images/posts//DigitalConsulting21677968070_1697583343.jpg" alt="" />
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
                                                            <p style={{textAlign:"end"}}>: دراسات الجدوى الاقتصادیة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>نساعدك في اتخاذ قرارات عمل مستنیرة من خلال دراسات الجدوى الاقتصادیة الشاملة</li>
                                                                    <li>احصائیات كافیة حول جدوى مشاریعك، مما یضمن التخصیص الأمثل للموارد</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: دراسات وأبحاث السوق</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>دراسة شاملة للسوق والمنافسین</li>
                                                                    <li>نساعدك في فھم سلوكیات المستھلك لتحسین استراتیجیة العمل الخاصة بك</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: البحوث والدراسات الاجتماعیة والاقتصادیة</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>ضمان مواءمة عملك مع الاتجاھات المجتمعیة من خلال البحوث الاجتماعیة والاقتصادیة</li>
                                                                    <li>تحدید التأثیر الأوسع لعملیاتك والمساھمة في المشاركة المجتمعیة الإیجابیة</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: تخطیط استراتیجي</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>التخطیط الاستراتیجي لمشروعك وتحدید نقاط الضعف والقوة وكیفیة النمو</li>
                                                                    <li>تحدید أھداف واضحة وخطط قابلة للتنفیذ لتحقیق النمو المستدام</li>
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
                        <h1 className="title">اطلب خدمة الاستشارات الاداریة الان</h1>
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