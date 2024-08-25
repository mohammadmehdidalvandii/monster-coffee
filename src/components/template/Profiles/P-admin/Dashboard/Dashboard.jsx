import './Dashboard.css';

function Dashboard() {
  return (
    <section className="dashboard">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="dashboard_wrapper">
                        <span className="dashboard_wrapper_text">خوش آمدید مدیر عزیز ,</span>
                        <h4 className="dashboard_wrapper_name">محمدمهدی دالوندی</h4>
                    </div>
                </div>
            </div>
            <div className="row mt-5 row-gap-4">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="boxContent">
                        <div className="dashboard_content">
                                <h5 className="dashboard_content_title">تعداد کاربران</h5>
                                <span className="dashboard_content_text">1,452</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="boxContent">
                        <div className="dashboard_content">
                                <h5 className="dashboard_content_title">تعداد فروشگاه</h5>
                                <span className="dashboard_content_text">1,452</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="boxContent">
                        <div className="dashboard_content">
                                <h5 className="dashboard_content_title">تعداد قهوه کده</h5>
                                <span className="dashboard_content_text">1,452</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="boxContent">
                        <div className="dashboard_content">
                                <h5 className="dashboard_content_title">فروش امروز</h5>
                                <span className="dashboard_content_text">1,452</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="boxContent">
                        <div className="dashboard_content">
                                <h5 className="dashboard_content_title"> تعداد کاربران جدید</h5>
                                <span className="dashboard_content_text">1,452</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard