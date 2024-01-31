import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="إدارة المعلومات">
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
                                            <p>إدارة الامن السيبراني / Cyber Security Department</p>
                                            <p>إدارة الشبكات / Network management </p>
                                            <p>التسويق الرقمي / Digital marketing </p>
                                            <p>إدارة البيانات الضخمة / Big management data </p>
                                            <p>دارة المحتوى الرقمي/ Digital content management  </p>
                                            <p>Python Programming Language Python</p>
                                            <p>Machine Learning via Python </p>
                                            <p>C# Programming Language Basic</p>
                                            <p>C# Programming Language Advanced</p>
                                            <p>DATA SCIENTIST </p>
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