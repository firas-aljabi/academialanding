import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="حاضنة الاعمال الرقمیة IMPRESS">
                <div>
                    <section className="blog__details-area">
                        <div className="container">
                            <div className="blog__inner-wrap">
                                <div className="row">
                                    <div className="col-70">
                                        <div className="blog__details-wrap">
                                            <div className="blog__details-thumb">
                                                <img src="/assets/img/blog/blog_details01.jpg" alt="" />
                                            </div>
                                            <div className="blog__details-content">
                                                <h2 className="title">حاضنة الاعمال الرقمیة IMPRESS</h2>
                                                <p>ھي حاضنة أعمال افتراضیة لتسھیل ممارسة الأعمال وتوفیر التكلفة المالیة لاستئجار مقر واقعي بشكل متطور وأكثر مرونة دون التقید بمساحات معینة، حیث نقدم للشركات مساحة مكتبیة مجانیة ، ودعما فنیا ، وتدریبا ، وتوجیھا ، ومرشدین یمكنھم مساعدة الشركات أو المشاریع الناشئة على تجنب الأخطاء الشائعة، بالإضافة إلى الترویج و تعریفھم بشبكة حاضنة الأعمال الرقمیة </p>
                                                <p>تبحث حاضنة الأعمال الرقمیة عن رواد أعمال قادرین على تسخیر التقنیات الناشئة لإنشاء منتجات أو حلول أو خدمات مبتكرة من شأنھا أن تساھم في الاقتصاد الرقمي لتعزیز الابتكار في مجال تكنولوجیا المعلومات والاتصالات ، خاصة بین فئة الشباب في مراحلھم المبكرة من بدء أو تطویر شركاتھم الرقمیة</p>
                                                <div className="blog__details-inner">
                                                    <div className="row align-items-center">
                                                        <div className="col-46 order-0 order-lg-2">
                                                            <div className="blog__details-inner-thumb">
                                                                <img src="/assets/img/blog/blog_details02.jpg" alt="" />
                                                                <VideoPopup/>
                                                            </div>
                                                        </div>
                                                        <div className="col-54">
                                                            <div className="blog__details-inner-content">
                                                                <h4 className="title">أھداف حاضنة الأعمال الرقمیة</h4>
                                                                <br/>
                                                                <div className="about__list-box">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="flaticon-arrow-button" />تفعیل شراكات تنمویة مستدامة مع القطاع الأھلي والخاص</li>
                                                                        <li><i className="flaticon-arrow-button" />تفعیل أطر العمل للمسؤولیة المجتمعیة</li>
                                                                        <li><i className="flaticon-arrow-button" />تحفیز الشركات من خلال وضع سیاسة عامة للامتیازات</li>
                                                                        <li><i className="flaticon-arrow-button" style={{marginTop:"15px"}}/>العمل على استقطاب الداعمین وتوفیر الملاحظات والاستفسارات حول مساھماتھم</li>
                                                                        <li><i className="flaticon-arrow-button" style={{marginTop:"15px"}}/>التسویق الاجتماعي لمشاریع وبرامج المسؤولیة المجتمعیة التي توائم بین الاحتیاج المجتمعي والعمل المؤسسي</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog__details-inner">
                                                    <div className="row align-items-center">
                                                        <div className="col-46 order-0 order-lg-2">
                                                            <div className="blog__details-inner-thumb">
                                                                <img src="/assets/img/blog/blog_details02.jpg" alt="" />
                                                                <VideoPopup/>
                                                            </div>
                                                        </div>
                                                        <div className="col-54">
                                                            <div className="blog__details-inner-content" >
                                                                <h4 className="title">الفئة المستفیدة من حاضنة الأعمال الرقمیة</h4>
                                                                <br/>
                                                                <div className="about__list-box">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="flaticon-arrow-button"/>الراغبین في دخول مجال ریادة الأعمال بتكالیف منخفضة لاكتساب الخبرة</li>
                                                                        <li><i className="flaticon-arrow-button" />المشاریع التي لیست بحاجة إلى مقر دائم (انشطة محددة) في سوریة والمحافظات</li>
                                                                        <li><i className="flaticon-arrow-button" />دعم الشباب كل من لدیه مشروع ویحتاج إلى الخدمات التي تقدمھا الحاضنة لیصبح مشروع ربحي ومستدام
                                                                        لتعزیز الاكتفاء الذاتي للطالب أو الخریج </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog__details-inner">
                                                    <div className="row align-items-center">
                                                        <div className="col-46 order-0 order-lg-2">
                                                            <div className="blog__details-inner-thumb">
                                                                <img src="/assets/img/blog/blog_details02.jpg" alt="" />
                                                                <VideoPopup/>
                                                            </div>
                                                        </div>
                                                        <div className="col-54">
                                                            <div className="blog__details-inner-content">
                                                                <h4 className="title">شروط الانضمام لـحاضنة الأعمال الرقمیة</h4>
                                                                <br/>
                                                                <div className="about__list-box">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="flaticon-arrow-button" />أن تكون ملكیة المشروع "سوري" یملك ویدیر المشروع بنفسه + شروط العضویة</li>
                                                                        <li><i className="flaticon-arrow-button" />أن یكون المشروع ضمن الأنشطة الاقتصادیة التي تحددھا المؤسسة بالتنسیق مع ھیئة المشروعات الصغیرة – ھیئة
 
                                                                        الاستثمار السوریة – مؤسسة ضمان القروض والمخاطر (دائرة التنمیة الاقتصادیة)</li>
                                                                        <li><i className="flaticon-arrow-button" />توفیر البیانات المالیة سنویاً من صاحب المشروع لمراجعتھا من قبل المؤسسة كمرحلة أولى ثم شركة الحسابات مرحلة
 
                                                                        ثانیة</li>
                                                                        <li><i className="flaticon-arrow-button"/>لا یحق للمستفید من الحاضنة تأجیر وبیع مساحتھ الافتراضیة</li>                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog__details-inner">
                                                    <div className="row align-items-center">
                                                        <div className="col-46 order-0 order-lg-2">
                                                            <div className="blog__details-inner-thumb">
                                                                <img src="/assets/img/blog/blog_details02.jpg" alt="" />
                                                                <VideoPopup/>
                                                            </div>
                                                        </div>
                                                        <div className="col-54">
                                                            <div className="blog__details-inner-content">
                                                                <h4 className="title">Impress مزایا وتسھیلات حاضنة الأعمال</h4>
                                                                <br/>
                                                                <div className="about__list-box">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="flaticon-arrow-button" /> یعفى المشروع من كامل رسوم الورشات التوعویة والبرامج التدریبیة التي تنظمھا المؤسسة + یمنح خصم بنسبة 50%
 
                                                                        من رسوم المشاركة في برامج الدبلوم والبرامج المتخصصة</li>
                                                                        <li><i className="flaticon-arrow-button" /> یمنح المشروع الأولویة للمشاركة في المعارض والمؤتمرات التي تنظمھا المؤسسة + المعارض والمؤتمرات التي تنظمھا
 
                                                                        الجھات الحكومیة وفقا للإمكانیات المتاحة للمؤسسة حسب نشاط المشروع</li>
                                                                        <li><i className="flaticon-arrow-button" />خلق وتعزیز فرص التبادل التجاري من خلال مبادرة ریادي بلادي</li>
                                                                        <li><i className="flaticon-arrow-button"/> توفیر البرنامج المحاسبي للمشاریع المدعمة من (erd)المؤسسة برسوم اشتراك رمزیة</li> 
                                                                        <li><i className="flaticon-arrow-button"/> الحصول على مجموعة من الامتیازات المقدمة من الشركاء والجھات الخاصة</li>   
                                                                        <li><i className="flaticon-arrow-button"/> إمكانیة استخراج إقامات للعمالة على الرخصة المدعمة بحد أقصى 3 إقامات بشرط أن تكون متوفرة في الدولة وبحسب الأنشطة

                                                                        الاقتصادیة المعتمدة في الحاضنة</li>   
                                                                        <li><i className="flaticon-arrow-button"/>  إمكانیة دمج وإشراك فئة غیر المواطنین من أصحاب المھارات والتخصصات المھنیة والأكادیمیة ضمن المشاریع
                                                                        المدعمة لاكتساب وتبادل الخبرة من خلال دخول فئة غیر المواطنین كشركاء في الرخصة بعد انقضاء فترة الدعم شرط ألا 
                                                                        یتجاوز سن الشریك غیر المواطن 35 عام</li>
                                                                        <li><i className="flaticon-arrow-button"/>یعفى المشروع من رسوم الجھات الحكومیة من الضرائب المالیة لمدة سنة میلادیة واحدة اعتباراً من تاریخ تأسیس
 
                                                                        المشروع وبحال كان المشروع قائماً ولم یكمل ال 3 سنوات یعفى المشروع من المدة المتبقیة</li>  
                                                                        <li><i className="flaticon-arrow-button"/>منح نسبة لا تقل عن 10% من المشتریات السنویة للجھات الحكومیة لصالح أعضاء المؤسسة</li>                                                                        
                                                                        </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-30">
                                        <aside className="blog__sidebar">
                                            <div className="sidebar__widget sidebar__widget-two">                                        
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-title text-center mb-40 ">
                        <h1 className="title">لدیك مشروع جدید؟؟</h1>
                        <br/>
                        <div>
                        <botton><Link href="/contact" className="btn" >تواصل معنا الان</Link></botton>
                        </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}