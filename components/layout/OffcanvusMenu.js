import Link from "next/link"

export default function OffcanvusMenu({ isOffcanvus, handleOffcanvus }) {
    return (
        <>
            <div className={`offCanvas__info ${isOffcanvus ? "active" : ""}`}>
                <div className="offCanvas__close-icon menu-close" onClick={handleOffcanvus}>
                    <button><i className="far fa-window-close" /></button>
                </div>
                <div className="offCanvas__logo mb-30">
                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div className="offCanvas__side-info mb-30">
                    <div className="contact-list mb-30">
                        <h4>عنوان المكتب</h4>
                        <p>سوريا , دمشق , السبع بحرات <br /></p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>رقم الهاتف</h4>
                        <p>+0989 7876 9865 9</p>
                        <p>+(090) 8765 86543 85</p>
                    </div>
                    <div className="contact-list mb-30">
                        <h4>البريد الالكتروني</h4>
                        <p>info@example.com</p>
                        <p>example.mail@hum.com</p>
                    </div>
                </div>
                <div className="offCanvas__social-icon mt-30">
                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                    <Link href="#"><i className="fab fa-twitter" /></Link>
                    <Link href="#"><i className="fab fa-google-plus-g" /></Link>
                    <Link href="#"><i className="fab fa-instagram" /></Link>
                </div>
            </div>
            <div className={`offCanvas__overly ${isOffcanvus ? "active" : ""}`} onClick={handleOffcanvus} />
        </>
    )
}
