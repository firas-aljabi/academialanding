import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="التواصل معنا">
                <div>
                    <section className="contact__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.2778987619702!2d36.29748860416176!3d33.52136474563181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e7b96c9f2ded%3A0x78a92f9f7dfd0b12!2sAcademia!5e0!3m2!1sen!2sae!4v1706654120299!5m2!1sen!2sae" allowFullScreen loading="lazy" />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="contact__content">
                                        <div className="section-title mb-35">
                                            <h2 className="title">كيف يمكننا مساعدتك ؟</h2>
                                            
                                        </div>
                                        <div className="contact__info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">العنوان</h4>
                                                        <p> سوريا , دمشق , السبع بحرات</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">رقم الهاتف</h4>
                                                        <Link href="tel:0123456789">+48 500-130-0001</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">البريد الالكتروني</h4>
                                                        <Link href="mailto:info@gmail.com">info@gmail.com</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                  {/**       <div className="col-lg-7">
                                    <div className="contact__form-wrap">
                                        <h2 className="title">أعطنا رسالة</h2>
                                        <p>لن يتم نشر عنوان بريدك الإلكتروني</p>
                                        <form id="contact-form" action="assets/mail.php" method="POST">
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="الرسالة" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="text" name="name" placeholder="الاسم" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="email" name="email" placeholder="البريد الالكتروني" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="text" name="phone" placeholder="رقم الهاتف" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp checkbox-grp">
                                                <input type="checkbox" name="checkbox" id="checkbox" />
                                                <label htmlFor="checkbox">احفظ اسمي، بريدي الإلكتروني، والموقع الإلكتروني في هذا المتصفح لاستخدامها في المرة القادمة التي أقوم فيها بالتعليق</label>
                                            </div>
                                            <button type="submit" className="btn">إرسال الرسالة</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                                 */}  
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* call-back-area */}
                
                </div>
            </Layout>
        </>
    )
}