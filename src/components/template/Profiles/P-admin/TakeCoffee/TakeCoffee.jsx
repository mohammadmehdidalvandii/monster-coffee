import './TakeCoffee.css';
import Tables from './Tables'

function TakeCoffee() {
  return (
   <section className="takeCoffee">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <div className="takeCoffee_wrapper">
                        <h5 className="takeCoffee_title">لیست قهوه کده</h5>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                   <Tables/>
                </div>
            </div>
        </div>
   </section>
  )
}

export default TakeCoffee