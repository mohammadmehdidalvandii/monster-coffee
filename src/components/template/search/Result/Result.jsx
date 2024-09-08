import './Result.css';
import CoffeeCard from '../../../modules/CoffeeCard/CoffeeCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Result() {
    const [isSearch , setIsSearch] = useState([]);
    const [coffees , setCoffees] = useState([])
    const [isLoading ,  setIsLoading] = useState(true)
    const {value} = useParams();

 


    useEffect(()=>{
       fetch("https://datacoffeemonster.liara.run/coffees")
       .then(res=>res.json())
       .then(data=>{
        setCoffees(data)
      const items = coffees.filter((item)=>item.name.includes(value))
      setIsSearch(items);
      
    }) 
},[value , coffees])

setInterval(()=>{
  setIsLoading(false)
},4000)

  return (
    <section className="result">
        <div className="containers">
            <div className="result_wrapper">
               <div className="row row-gap-4">
                
                {isLoading ? (
                    <h3 className="isLoading_text">درحال جستجو ...</h3>
                ):(

                    
                isSearch.length === 0 ?(
                          <div className="col-12">
                    <div className="result_empty">
                        <h3 className="result_empty_text">هیچ نتیجه برای شما پیدا نشد</h3>
                    </div>
                </div> 
                ):(
                    isSearch.map((item)=>(
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={item.id}>
                    <CoffeeCard 
                        {...item}
                        price={item.sizes.find(size=>size.size === "کوچیک").price}
                    />
                </div>
                    ))
                )
                )}
               </div>
            </div>
        </div>
    </section>
  )
}

export default Result