import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="مهارات الصيرفة االسالمية">
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
                                            <p>مصرفي إسلامي معتمد / Certified Islamic Banker</p>
                                            <p>مدير مصرفي إسلامي معتمد / Certified Islamic Bank Manager</p>
                                            <p>اختصاصي إسلامي معتمد في إدارة المخاطر /Certified Islamic Specialist in Risk Management</p>
                                            <p>اختصاصي إسلامي معتمد في الحوكمة و الامتثال/Certified Islamic Specialist in Governance and Compliance</p>
                                            <p>اختصاصي إسلامي معتمد في الأسواق المالية / Certified Islamic Specialist in Capital Markets</p>
                                            <p>اختصاصي إسلامي معتمد في المحاسبة/ Certified Islamic Specialist in Accounting</p>
                                            <p>اختصاصي إسلامي معتمد في التكافل/  Certified Islamic Specialist in Takaful  </p>
                                            <p>اختصاصي إسلامي معتمد في التأمين التكافلي / Certified Islamic Specialist in  Takaful Insurance </p>
                                            <p>مهارات الصيرفة الاسالمية</p>
                                            <p>اختصاصي إسلامي معتمد في التجارة الدولية/Certified Islamic Specialist in Trade Finance</p>
                                            <p>اختصاصي إسلامي معتمد في التدقيق الشرعي / Certified Islamic Specialist in Shariah Auditing </p>
                                            <p>اختصاصي إسالمي معتمد في التدقيق الشرعي المتقدم / Certified Islamic Specialist in Advanced Sharia Auditing </p>
                                            <p>الدبلوم المهني في المحاسبة المصرفية / Professional Diploma in Accounting</p>
                                            <p>الدبلوم المهني المتقدم في المالية الاسلامية / Professional Advanced  Diploma in Islamic Finance </p>
                                            <p>الدبلوم المهني في إدارة المخاطر/Professional Diploma in Risk Management</p>
                                            <p>الدبلوم المهني في التدقيق الشرعي/ Professional Diploma in Shariah Auditing</p>
                                            <p>لدبلوم المهني في التأمين التكافلي/ Professional Diploma in Takaful Insurance</p>
                                            <p>الماجستير المهني التنفيذي في المالية الاسلامية/Executive Professional Master in Islamic Finance</p>
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