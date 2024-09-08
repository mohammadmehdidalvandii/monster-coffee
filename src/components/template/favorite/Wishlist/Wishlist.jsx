import { Link } from 'react-router-dom';
import WishlistCard from '../WishlistCard/WishlistCard';
import './Wishlist.css';


function Wishlist() {
  const items = JSON.parse(localStorage.getItem("wishlist") || "[]");

  // logic removed Coffee Wishlist
  const handlerRemovedWishlist = (coffeeID)=>{
    swal({
      title:"آیا از حذف قهوه در لیست اطمینان دارید ؟",
      icon:"warning",
      buttons:["نه","اره"]
    })
    .then((result)=>{
      if(result){
        const newWishlist = items.filter((item)=>item.id !== coffeeID);
        localStorage.setItem("wishlist" , JSON.stringify(newWishlist))
        swal({
          title:"قهوه مورد نظر از لیست شما حذف شد",
          icon:"success",
          buttons:"فهمیدم"
        })
        .then(()=>{
          window.location.reload()
        })
      }
    })
  }
  
  return (
   <section className="wishlist">
        <div className="containers">
            <div className="row row-gap-4">

              {items.length == 0 ?(      
                 <div className="col-12">
                        <div className="wishlist_empty">
                                <h5 className="wishlist_empty_title">مورد علاقه های شما خالی است !</h5>
                                <Link to='/Shop' className='wishlist_empty_link'>سبد خرید </Link>
                        </div>
                    </div> 
              ):(
                items.map(item=>(
                  <WishlistCard
                   key={item.id}
                    {...item}
                      handlerRemovedWishlist={()=>handlerRemovedWishlist(item.id)}
                    />
                ))
              )}
                   

            </div>
        </div>
   </section>
  )
}

export default Wishlist