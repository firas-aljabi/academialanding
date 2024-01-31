import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function ServicesDetails3() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="الاستشارات المالیة">
                <div>
                    <section className="services__details-area">
                        <div className="container">
                            <div className="services__details-wrap">
                                <div className="row">
                                    <div className="col-70 order-0 order-lg-2">
                                        <div className="services__details-content services__details-content-two">
                                            <h2 className="title">نقدم أفضل خدمات الاستشارات المالیة للشركات والمؤسسات المحلیة الدولیة الناشئة والمتعثرة، والتي تطمح في توسیع أعمالھا والوصول إلى الریادة، وإلى أصحاب المشاریع الصغیرة والمتوسطة، باستخدام أفضل الكفاءات وأفضل البرامج المعتمدة عالمیا في بناء نظام عملیات على أسس مالیة سلیمة، ومسك الدفاتر المحاسبیة وفق الأصول
                                            التي تسھل الحركة المالیة وإخراجھا في تقاریر محاسبیة، ورفعھا إلى الآدارة العلیا والجھات العامة</h2>
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
                                                            <p style={{textAlign:"end"}}>: الوضع المالي الاستراتیجي</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>تحدید الوضع المالي لشركتك وإمكاناتھا لتطویر مشاریع جدیدة</li>
                                                                    <li>مواءمة استراتیجیتك المالیة مع أھداف عملك لتحقیق النمو المستدام</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: آلیة مراقبة ومراقبة الإنتاج</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>إنشاء آلیة قویة لمراقبة عملیات الإنتاج بكفاءة، تخفیض التكالیف ورصد الخسائر</li>
                                                                    <li>تعزیز الفعالیة التشغیلیة وتحسین استخدام الموارد لتحقیق أقصى قدر من الإنتاج</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: إنشاء نظام مالي مستقر</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>التخطیط المالي الاستراتیجي لتحدید الفرص المتاحة وتحقیق أقصى قدر من الربح</li>
                                                                    <li>تطبیق آلیات تقییم الأداء لضمان الاستقرار المالي والتحسین المستمر</li>
                                                                </ul>
                                                            </div>
                                                            <p style={{textAlign:"end"}}>: ھیكلة رأس المال والدیون</p>
                                                            <div className="about__list-box about__list-box-three">
                                                                <ul>
                                                                    <li>تحسین الھیكل المالي لشركتك من خلال رأس المال الخبیر وھیكلة الدیون</li>
                                                                    <li>تحقیق التوازن مع الحفاظ على الاستقرار المالي</li>
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
                        <h1 className="title">اطلب خدمة الاستشارات المالیة الان</h1>
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