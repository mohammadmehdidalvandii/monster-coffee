import { Link } from 'react-router-dom';
import WishlistCard from '../WishlistCard/WishlistCard';
import './Wishlist.css';


function Wishlist() {
  const items = JSON.parse(localStorage.getItem("wishlist") || "[]");
  
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
                  <WishlistCard key={item.id} {...item}/>
                ))
              )}
                   

            </div>
        </div>
   </section>
  )
}

export default Wishlist