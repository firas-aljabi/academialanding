import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="مهارات الاستجابة الإنسانية للمنظمات">
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
                                            <p>إدارة المأوى و المستوطنات البشرية/Shelter and Human Settlements Management</p>
                                            <p>إدارة الامداد بالماء والإصحاح / Water Sanitation Management</p>
                                            <p>إدارة الأمن الغذائي / Food Security Administration</p>
                                            <p>إدارة التغذية الطارئة / Emergency Feeding Management </p>
                                            <p>إدارة التوزيع الطارئ / Emergency Distribution Management  </p>
                                            <p>إدارة اللوجستيات غير الغذائية/  Non-food Logistics Management</p>
                                            <p>إدارة صحة طوارئ/ Emergency Health Management</p>
                                            <p>إدارة برامج الحماية الإنسانية/ Managing Humanitarian Protection Programs </p>
                                            <p>إدارة المخيمات/ Camp Management </p>
                                            <p>إدارة التقييم والمراقبة للمنظمات غير الربحية / E&M for NGOs</p>
                                            <p>إدارة المانحين / management Donor</p>
                                            <p>إدارة سبل المعيشة / Livelihood management </p>
                                            <p>إدارة التعليم المراعي لظروف النزاعات/ INEE management </p>
                                            <p>إدارة الامدادواللوجستيات/Supply and logistics management</p>
                                            <p>إدارة الامن و السلامة المهنية/Occupational Safety and Security Administration</p>
                                            <p>إدارة الدعم النفسي/ Psychological Support Department </p>
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