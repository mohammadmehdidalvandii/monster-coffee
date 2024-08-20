import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard'
import Title from '../../../modules/Title/Title'
import './Coffee.css'

function Coffee() {
  return (
    <section className="coffee">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title='قهوه امروز'/>
                </div>
            </div>
            <div className="row mt-3 row-gap-4">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <CoffeeCard/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Coffee