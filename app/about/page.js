import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Counter1 from "@/components/sections/Counter1"
import Counter2 from "@/components/sections/Counter2"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function About() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="من نحن ؟">
                <div>
                    <section className="about__area-four">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-md-9 col-sm-10">
                                    <div className="about__img-wrap-four">
                                        <img src="/assets/img/images/inner_about01.jpg" alt="" />
                                        <img src="/assets/img/images/inner_about02.jpg" alt="" />
                                      {/**  <div className="about__award-box">
                                            <div className="icon">
                                                <i className="flaticon-trophy" />
                                            </div>
                                            <div className="content">
                                                <h2 className="title">15+</h2>
                                                <p>World Best Agency <br /> Award Got</p>
                                            </div>
                                        </div>
                                        */} 
                                        <div className="shape">
                                            <img src="/assets/img/images/inner_about_shape.jpg" alt="" className="alltuchtopdown" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about__content-four">
                                        <div className="section-title mb-30">
                                            <span className="sub-title"></span>
                                            <h2 className="title">أكادیمیا للتّدریب والاستشارات</h2>
                                        </div>
                                        {/*<div className="about__content-inner-three">
                                            <div className="about__list-box">
                                                <ul className="list-wrap">
                                                    <li><i className="flaticon-arrow-button" />Medicare Advantage Plans</li>
                                                    <li><i className="flaticon-arrow-button" />Analysis  Research</li>
                                                    <li><i className="flaticon-arrow-button" />100% Secure Money Back</li>
                                                </ul>
                                            </div>
                                            <div className="about__list-img-two">
                                                <img src="/assets/img/images/about_list_img02.png" alt="" />
                                            </div>
                                        </div>*/}
                                        <p>شركة سور ّیة تعمل في مجال تقدیم الاستشارات المالیّة، والإدار ّیة، وتأھیل، وتدریب الموارد البشر ّیة، مركزھا في مدینة دمشق.وھي شركة مسجلّة في الّسجّل التّجارّي تحت رقم 1289 تاریخ 2004/07/18 ، ومعتمدة كجھة وطنّیة ، من قبل
                                        وزارة التّنمیة الإداریة في سوریة، بموجب قرار رقم 190 تاریخ 2020/6/21</p>
                                        <p>نعمل على إبداع و تطویر برامج مھنیة تخصصیة ذات حرفیة عالیة موجھة لتزوید المقبل على سوق العمل أو العاملین فیھا بالمھارات الجوھریة المتخصصة لولوج سوق العمل أو ترقیة مسارھم المھني محلیاً و عالمیاً .و لتحقیق ھذه الأھداف تم
                                        توقیع مجموعة اتفاقیات و مذكرات تفاھم مع عدة جھات حكومیة و أكادیمیة</p>
                                        <Link href="/contact" className="btn">تواصل معنا</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* about-area-end */}
                    {/* brand-area 
                    <div className="brand__area-four">
                        <div className="container">
                            <div className="swiper-container brand-active">
                                <BrandActiveSlider />
                            </div>
                        </div>
                    </div>
                    */}
                    {/* brand-area */}
                    {/* choose-area */}
                    <section className="choose__area-four">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="choose__content-four">
                                        <div className="section-title white-title mb-20">
                                            <span className="sub-title"></span>
                                            <h2 className="title">نلتزم في شركة أكادیمیا للتّدریب والاستشارات</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="choose__list-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">بناء علاقة ثقة مع المستفیدین من خدماتنا المقدّمة،لنكون المساھم الحقیقّي في تحقیق طموحاتھم</h4>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-financial-profit" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">العمل على توفیر بیئة تدریبیّة، واستشاریة تحفیزیة للتّقدم، والنّموّ للأفراد، والشّركات</h4>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-investment-1" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title"> المساھمة في عملیّة التّنمیة الاقتصادیة، والاجتماعیّة المستدامة في سوریة</h4>
                                                        
                                                    </div>
                                                </div>
                                            </li>
                                    {/*<li>
                                                <div className="choose__list-box-two">
                                                    <div className="choose__list-icon-two">
                                                        <i className="flaticon-report" />
                                                    </div>
                                                    <div className="choose__list-content-two">
                                                        <h4 className="title">Business Solutions</h4>
                                                        <p>Semper egetuis kelly for tellus urna area condition.</p>
                                                    </div>
                                                </div>
                                    </li>*/}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="choose__shape-wrap-four">
                            <img src="/assets/img/images/inner_choose_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                            <img src="/assets/img/images/inner_choose_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        </div>
                    </section>
                    {/* choose-area-end */}
                    {/* counter-area */}
                    <Counter1 /> 
                    {/* counter-area-end */}
                    
                    {/* call-back-area */}
                 
                </div>
            </Layout>
        </>
    )
}