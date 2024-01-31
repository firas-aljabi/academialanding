import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({ status: false, key: "" });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({ status: false, key: "" });
        } else {
            setIsActive({ status: true, key });
        }
    };

    return (
        <>
            <ul className="navigation"  style={{textAlign:'end'}}>
                <li className="active menu-item-has-children"  style={{textAlign:'end'}}>
                    <Link href="/"  style={{textAlign:'end'}}>الصفحة الرئيسية</Link>
                </li>

                <li className="menu-item-has-children">
                    <Link href="/about"  style={{textAlign:'end'}}>من نحن</Link>
                </li>

                <li className="menu-item-has-children">
                <Link href="#"  style={{textAlign:'end'}}>استشارات</Link>
                <div onClick={() => handleToggle(1)} className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"}>
                    <span className="plus-line" />
                </div>
                <ul className="sub-menu" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                <li><Link  style={{textAlign:'end'}} href="/administrativeandcommercialconsulting">الاستشارات الإداریة والتجاریة</Link></li>
                <li><Link  style={{textAlign:'end'}}  href="/Legaladvice">الاستشارات القانونیة</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/Informaticsanddigitalconsulting">الاستشارات المعلوماتیة والرقمیة</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/marketingconsulting">الاستشارات التسویقیة</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/Companyestablishmentandorganizationalstructureconsultations">استشارات تأسیس الشركات والھیكل النظیمي</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/Financialconsulting">الاستشارات المالیة</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/foreigntradeconsulting">الاستشارات التجارة الخارجیة</Link></li>
                <li><Link  style={{textAlign:'end'}} href="/humanresourcesconsulting">استشارات الموارد بشریة</Link></li>
                </ul>
            </li>

            <li className="menu-item-has-children">
            <div onClick={() => handleToggle(2)} className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"}>
                <span className="plus-line" />
            </div>

            <Link href="">تدريب</Link>
            
            <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
            <li><Link href="/business-management">إدارة الأعمال</Link></li>
            <li><Link href="/information-management">إدارة المعلومات</Link></li>
            <li><Link href="/work-skills-and-professional-development">مهارات العمل والتطوير المهني</Link></li>
            <li><Link href="/skills-and-personal-development">المهارات والتطوير الشخصي</Link></li>
            <li><Link href="/corporate-coworking-skills">مهارات العمل والتطوير الشخصي للشركات</Link></li>
            <li><Link href="/Islamic-banking-skills">مهارات الصيرفة الاسلامية</Link></li>
            <li><Link href="/humanitarian-response-skills-for-organizations">مهارات الاستجابة الإنسانية للمنظمات</Link></li>
            <li><Link href="/education-and-psychology">التربية وعلم النفس</Link></li>
            </ul>
        </li>

                <li className="menu-item-has-children">
                    <Link href="/services">IMPRESS حاضنة الاعمال الرقمیة </Link>
                </li>

               

                <li>
                    <Link href="/contact">التواصل معنا</Link>
                </li>
            </ul>
        </>
    );
}