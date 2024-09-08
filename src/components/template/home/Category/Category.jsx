import './Category.css'
import Title from '../../../modules/Title/Title'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
 const Category = ()=> {
    const [categoeies,setCategories ]= useState([]);
    
    useEffect(()=>{
        fetch('https://datacoffeemonster.liara.run/categorys')
        .then(res => res.json())
        .then(data=> setCategories(data))
    },[]);

    

  return (
    <section className="category">
        <div className="containers">
            <div className="row">
                <div className="col-12">
                    <Title title="دسته بندی"/>
                </div>
            </div>
            <div className="row mt-3">
                {categoeies.map(category =>(
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={category.id}>
                    <Link to='/' className="category_item">
                        <img src="/images/cate1.jpg" alt="category image" className="category_item_img" />
                        <h6 className="category_item_title">{category.category}</h6>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Category