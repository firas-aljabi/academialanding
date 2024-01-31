import Link from 'next/link'

export default function About1() {
    return (
        <>
            <section id="about" className="about-area pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img-wrap">
                                <div className="mask-img-wrap">
                                    <img src="/assets/img/images/about_img01.jpg" alt="" />
                                </div>
                                <div className="shape">
                                    <img src="/assets/img/images/about_shape01.png" alt="" />
                                </div>
                                <div className="experience-year">
                                    <div className="icon">
                                        <i className="flaticon-trophy" />
                                    </div>
                                    <div className="content">
                                        <h6 className="circle rotateme"> سنوات طويلة من الخبرة   </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-32 tg-heading-subheading animation-style3" style={{textAlign:'end'}}>
                                    <span className="sub-title"></span>
                                    <h2 className="title tg-element-title">  اربعة أسباب لتختار خدمات أكادیمیا </h2>
                                </div>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-target" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">نقدم خدمات رجال الأعمال داخل سوریة وخارجھا</h4>
                                            </div>
                                        </li>
                                    <li>
                                    <div className="icon">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">ندیر العملیات والمؤسسات التجاریة والانتاجیة وفق أنظمة الجودة العالمیة</h4>
                                    </div>
                                </li>
                                    </ul>
                                </div>
                                <div className="about-list">
                                    <ul className="list-wrap">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-target" />
                                            </div>
                                            <div className="content">
                                                <h4 className="title">نقدم حلول فعالة للأعمال والمشاریع المتعثرة</h4>
                                            </div>
                                        </li>
                                    <li>
                                    <div className="icon">
                                        <i className="flaticon-profit" />
                                    </div>
                                    <div className="content">
                                        <h4 className="title">نساعدك في تحدید استراتیجیات العمل والتطویر ودعم خطط الأعمال</h4>
                                    </div>
                                </li>
                                    </ul>
                                </div>
                                <div className="about-shape-wrap">
                                    <img src="/assets/img/images/about_shape03.png" alt="" />
                                    <img src="/assets/img/images/about_shape04.png" alt="" className="ribbonRotate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-left-shape">
                    <img src="/assets/img/images/about_shape02.png" alt="" />
                </div>
            </section>
        </>
    )
}
