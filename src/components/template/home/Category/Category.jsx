import './Category.css'
import Title from '../../../modules/Title/Title'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <section className="category">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title="دسته بندی"/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">قهوه فوری</h6>
                        <span className="category_item_number">128</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category