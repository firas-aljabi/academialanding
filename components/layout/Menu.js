import Link from "next/link";

export default function Menu() {
    return (
        <>
            <ul className="navigation"  style={{textAlign:'end'}}>
                <li><Link href="/">الصفحة الرئيسية</Link></li>
                <li><Link href="/about">من نحن</Link></li>
                <li className="menu-item-has-children">
                <Link href="#">استشارات</Link>
                <ul className="sub-menu">
                   
                    <li><Link href="/administrativeandcommercialconsulting">الاستشارات الإداریة والتجاریة</Link></li>
                    <li><Link href="/Legaladvice">الاستشارات القانونیة</Link></li>
                    <li><Link href="/Informaticsanddigitalconsulting">الاستشارات المعلوماتیة والرقمیة</Link></li>
                    <li><Link href="/marketingconsulting">الاستشارات التسویقیة</Link></li>
                    <li><Link href="/Companyestablishmentandorganizationalstructureconsultations">استشارات تأسیس الشركات والھیكل النظیمي</Link></li>
                    <li><Link href="/Financialconsulting">الاستشارات المالیة</Link></li>
                    <li><Link href="/foreigntradeconsulting">الاستشارات التجارة الخارجیة</Link></li>
                    <li><Link href="/humanresourcesconsulting">استشارات الموارد بشریة</Link></li>
                    {/* Add more items here if needed */}
                </ul>
            </li>

            <li className="menu-item-has-children">
            <Link href="">تدريب</Link>
            <ul className="sub-menu">
               
                <li><Link href="/business-management">إدارة الأعمال</Link></li>
                <li><Link href="/information-management">إدارة المعلومات</Link></li>
                <li><Link href="/work-skills-and-professional-development">مهارات العمل والتطوير المهني</Link></li>
                <li><Link href="/skills-and-personal-development">المهارات والتطوير الشخصي</Link></li>
                <li><Link href="/corporate-coworking-skills">مهارات العمل والتطوير الشخصي للشركات</Link></li>
                <li><Link href="/Islamic-banking-skills">مهارات الصيرفة الاسلامية</Link></li>
                <li><Link href="/humanitarian-response-skills-for-organizations">مهارات الاستجابة الإنسانية للمنظمات</Link></li>
                <li><Link href="/education-and-psychology">التربية وعلم النفس</Link></li>
                {/* Add more items here if needed */}
            </ul>
        </li>

        <li><Link href="/diplom">دبلوم</Link></li>
          <li><Link href="/languag">لغات </Link></li>
                <li><Link href="/services">IMPRESS حاضنة الاعمال الرقمیة</Link></li>
                {/**
                <li className="menu-item-has-children">
                    <Link href="#">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog">Our Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
 */}
                <li><Link href="/contact">التواصل معنا</Link></li>
            </ul>
        </>
    );
}
