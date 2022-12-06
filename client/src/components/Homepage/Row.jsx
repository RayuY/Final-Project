import { Link } from "react-router-dom";


export default function Row(restaurantData, start, end) {



  let arr = [];
  return (
    restaurantData.slice(start, end).map((restaurant, index) => {
      let review = '⭐'
      let noReview = 'No reviews'
      return (
        <div key={index} className='card'>
          <Link to={`/restaurants/${restaurant.id}`}>
            {/* <button onClick={routeChange}> */}
            <div className="card-top">
              <img className='img' src={restaurant.img} alt='rest-img' />
              <h1 className='restaurant__title' >{restaurant.title}</h1>
              <p className="category"></p>
            </div>
            {/* </button> */}
          </Link>
          <div className="card-bottom">
            <div>
              <h3 className='p__opensans'>Average Price: ${restaurant.avg_price}</h3>
              <h3 className='p__opensans'>Reviews: {restaurant.review ? review.repeat(restaurant.review) : noReview}</h3>
            </div>
            <div>
              <Link to={`/restaurants/${restaurant.id}`}>
                <button className="p__opensans glow-on-hover" type="button">Reserve Now</button>
              </Link>
            </div>
          </div>
        </div>
      )
    }))

}