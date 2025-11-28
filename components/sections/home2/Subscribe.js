import Link from "next/link"


export default function Subscribe() {
    return (
        <> 

            <section className="subscribe-section">
            <div className="auto-container">
                <div className="inner-container">
                <h2>Претплатете се на нашиот билтен</h2>
                <div className="form-inner">
                    <form action="index-2.html" method="post">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="text" name="name" placeholder="Вашето име" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Вашата е-пошта" required />
                        </div>
                    </div>
                    <div className="message-btn">
                        <button type="submit" className="theme-btn-one">Претплати се сега</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </section>
            
        </>
    )
}
