import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="التربية وعلم النفس">
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
                                            <p>EXECUTIVE PH.D EDUCATION</p>
                                            <p>EXECUTIVE PH.D PSYCHOLOGY COUNSELING</p>
                                            <p>PSYCHOLOGICAL COUNSELING</p>
                                            <p>DIPLOMA IN EDUCATION</p>
                                            <p>EDUCATIONAL MANAGEMENT AND PLANNING</p>
                                            <p>PHILOSOPHY OF EDUCATION</p>
                                            <p>PHILOSOPHICAL PSYCHOLOGICAL COUNSELING</p>
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