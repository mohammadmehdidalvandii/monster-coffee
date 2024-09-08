import './Result.css';
import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard';

function Result() {
  return (
    <section className="result">
        <div className="containers">
            <div className="result_wrapper">
               <div className="row row-gap-4">
               {/* <div className="col-12">
                    <div className="result_empty">
                        <h3 className="result_empty_text">هیچ نتیجه برای شما پیدا نشد</h3>
                    </div>
                </div> */}
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <CoffeeCard/>
                </div>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Result