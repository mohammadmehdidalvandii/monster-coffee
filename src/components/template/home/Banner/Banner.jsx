import './Banner.css';

function Banner() {
  return (
    <section className="banner">
        <div className="containers">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="banner_wrapper">
                        <img src="/images/recomand1.jpg" alt="banner image" className="banner_img" />
                        <img src="/images/recomand-logo.png" alt="banner logo" className="banner_logo" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="banner_wrapper">
                        <img src="/images/recomand2.jpg" alt="banner image" className="banner_img" />
                        <img src="/images/recomand-logo.png" alt="banner logo" className="banner_logo" />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="banner_wrapper">
                        <img src="/images/recomand3.jpg" alt="banner image" className="banner_img" />
                        <img src="/images/recomand-logo.png" alt="banner logo" className="banner_logo" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner