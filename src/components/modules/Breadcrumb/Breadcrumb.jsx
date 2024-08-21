import { Link } from 'react-router-dom';
import './Breadcrumb.css';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Breadcrumb({title}) {
  return (
    <section className="breadcrumbs">
        <div className="containers">
            <div className="breadcrumb_wrapper">
                <Link to='/' className='breadcrumb_link'>
                <span className="breadcrumb_icon">
                    <FaArrowAltCircleRight/>
                </span>
                </Link>

                <h5 className="breadcrumb_title">{title}</h5>
            </div>
        </div>
    </section>
  )
}

export default Breadcrumb