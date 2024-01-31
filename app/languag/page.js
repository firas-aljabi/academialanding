import Layout from "@/components/layout/Layout"
import BrandActiveSlider from "@/components/slider/BrandActiveSlider"
import Link from "next/link"

export default function TeamDetails() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="لغات">
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
                                            <h2 className="title">نقدم لكم دبلوم في كل ما يلي</h2>
                                            <span className="position"></span>
                                            <br/>
                                            <p>ARABIC LANGUAGE</p>
                                            <p>FRENCH LANGUAGE</p>
                                            <p>DUTCH LANGUAGE</p>
                                            <p>ENGLISH LANGUAGE</p>
                                            <p>RUSSIAN LANGUAGE</p>
                                            <p>IELTS</p>
                                            <p>TOEFL</p>
                                            <p>English for Business</p>
                                            {/* <p>Lingui-Sticks</p> */}
                                        </div>
                                    </div>
                                </div>
                                            <br/>
                              
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