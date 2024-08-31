import { useEffect, useState } from "react";
import Breadcrumb from "../../components/modules/Breadcrumb/Breadcrumb"
import Details from "../../components/template/shopDetails/Details/Details"
import HeadTitle from "../../utils/HeadTitle"
import { useParams } from "react-router-dom";

function ShopDetails() {
    HeadTitle("فروشگاه - جزئیات محصول");
    const {id} = useParams();
    const [detailsCoffees , setDetailsCoffees] = useState([]);
 
    useEffect(()=>{
      fetch(`http://localhost:3000/coffees/${id}`)
      .then(res => res.json())
      .then(data => setDetailsCoffees(data))
    },[])


  return (
    <>
    <Breadcrumb title='جزئیات محصول'/>
    <Details coffees={detailsCoffees}/>
    </>
  )
}

export default ShopDetails