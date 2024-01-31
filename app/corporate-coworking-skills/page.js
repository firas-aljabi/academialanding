import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="مهارات العمل والتطوير الشخصي للشركات">
                <div>
                    <section className="team__details-area">
                        <div className="container">
                            <div className="team__details-inner">
                                <div className="row align-items-center">
                                    <div className="col-36">
                                        <div className="team__details-img">
                                            <img src="/assets/img/team/team_details_img.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-64">
                                        <div className="team__details-content">
                                            <h2 className="title">المسارات التدريبية</h2>
                                            <span className="position"></span>
                                            <p> ادارة الازمات و المخاطر في المنظمات Crisis and risk management in organizations</p>
                                            <p> الجودة و الادارة الاستراتيجية QUALITY AND STRATEGIC LEADER </p>
                                            <p>KAYZEN AND CROWD MANAGEMENT</p>
                                            <p> النزاهة وجودة العمل INTEGRITY AND QUALITY OF WORK </p>
                                            <p>التخطيط الاستراتيجي في مؤسسة الجودة STRATEGIC PLANNING IN QUALITY INSTITUTION    </p>
                                            <p> جودة القيادة و الابداع الاداري LEADERSHIP QUALITY AND ADMINISTRATIVE CREATIVITY</p>
                                            <p>KAYZEN PRIORTIZE RAISING PRODUCTIVITY</p>
                                            <p>مهارات التعامل مع الاخرين للشركات THE QUALITY OF THE GUEST PERFORMANCE</p>
                                            <p>جودة البائع الفعالة EFFECTIVE SELLER QUALITY</p>
                                            <p>جودة الاخلاقيات المهنية THE QUALITY OF PROFESSIONAL ETHICS</p>
                                            <p>المهارات المطلوبة للادارة الفعالة LEADERSHIP SKILLS NEEDED TO MANAGE EFFECTIVE CHANGE</p>
                                            <p>اخالقيات العمل BUSINESS ETHICS</p>
                                            <p>العمل الجماعي TEAM WORKS</p>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>
                        </div>
                    </section>
                    <div className="section-title text-center mb-40 ">
                        <h1 className="title">تعرف على المزيد</h1>
                        <br/>
                        <div>
                        <botton><Link href="/contact" className="btn" >تواصل مع خدمة العملاء</Link></botton>
                        </div>
                        </div>
                    {/* team-details-area-end */}
                    {/* brand-area */}
                    
                </div>
            </Layout>
        </>
    )
}