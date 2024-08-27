import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard'
import Title from '../../../modules/Title/Title'
import './Coffee.css'

function Coffee({coffees}) {
  return (
    <section className="coffee">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title='قهوه امروز'/>
                </div>
            </div>
            <div className="row mt-3 row-gap-4">
                {coffees.slice(0,6).map(coffee => (
                <div className="col-lg-6 col-md-6 col-sm-12" key={coffee.id}>
                    <CoffeeCard
                        {...coffee}
                        price={coffee.sizes.find(size => size.size === 'کوچیک').price}
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Coffee