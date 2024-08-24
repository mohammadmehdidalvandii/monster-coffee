import { Link } from 'react-router-dom';
import WishlistCard from '../WishlistCard/WishlistCard';
import './Wishlist.css';


function Wishlist() {
  return (
   <section className="wishlist">
        <div className="containers">
            <div className="row row-gap-4">
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>
                    <WishlistCard/>

                    {/* <div className="col-12">
                        <div className="wishlist_empty">
                                <h5 className="wishlist_empty_title">مورد علاقه های شما خالی است !</h5>
                                <Link to='/Shop' className='wishlist_empty_link'>سبد خرید </Link>
                        </div>
                    </div> */}
            </div>
        </div>
   </section>
  )
}

export default Wishlist