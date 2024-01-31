import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="المهارات والتطوير الشخصي ">
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
                                            <p>مهارات تواصل - إدارة الفعاليات و المؤتمرات/Communication skills - event and conference management</p>
                                            <p>التسويق الشخصي و اتيكيت العالم الرقمي/Personal Marketing and Etiquette of the Digital World</p>
                                            <p>لغة إدارة الجسد و الحشود/Body language and crowd management</p>
                                            <p>  مهارات التفاوض باستخدام الكايزن/Negotiation skills by kaizen</p>
                                            <p>إدارة الاولويات والتحكم في ضغوط العمل / Managing priorities and controlling  work stress </p>
                                            <p>مهارات التخطيط الشخصي و المؤسسي / Personal and institutional planning skills </p>
                                            <p>إدارة المهام المتوازيةوتخطيط الوقت/Managing parallel tasks and planning time</p>
                                            <p>صناعة القرار و حل المشكلات الادارية/Decision making and solving administrative problems</p>
                                            <p>إدارة األداء عبر الذكاء العاطفي / Managing performance through emotional intelligence </p>
                                            <p>القيادة و الادارة الرشيقة باستخدام 6سيجما/Lean leadership and management by 6 sigma</p>
                                            <p>ادارة التميز في العمليات الادارية/Department of Excellence in Administrative Operations</p>
                                            <p>القيادة اإلدارية عبر الهندرة / Administrative leadership through reconstruction </p>
                                            <p>ادارة التكيف وفض النزاعات في العمل/Adaptation and conflict resolution management at work</p>
                                            <p>التحفيز المستدام و بناء ثقافة الفريق/Sustainable motivation and building a team culture</p>
                                            <p>المهارات الادارية لقيادة التغيير الفعال/Leadership skills to manage effective change</p>
                                            <p>التخطيط وإدارة األداء باستخدام المؤشرات الرئيسية / Plan and manage performance by KPIs </p>
                                            <p>استراتيجيات النجاح في مقابلات التوظيف/Strategies for success in job interviews</p>
                                            <p>إدارة المشروع الشخصي وريادة األعمال الرقمية / Personal project management &  digital entrepreneurship     </p>
                                            <p>استراتيجيات التعلم السريع و بناء شخصية الطفل/Rapid learning strategies and building the child's personality</p>
                                            <p>التدقيق و كشف الاحتيال باستخدام تكنولوجيا المعلومات/Audit and detection of fraud by IT</p>
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