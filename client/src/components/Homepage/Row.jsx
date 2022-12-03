import { Link, useNavigate } from "react-router-dom";


export default function Row(arrData, start, end) {

  let arr = [];
  let navigate = useNavigate(); 


  console.log("arrData:", arrData);
  return (
  arrData.slice(start, end).map((item, index) => {
    const routeChange = () =>{ 
      console.log("itemId:", item.id)
      let path = `/restaurants/${item.id}`; 
      navigate(path);
    }
    return (
       <div key={index} className='card'>
        <Link to={`/restaurants/${item.id}`}>
        {/* <button onClick={routeChange}> */}
          <div className="card-top">
            <img className='img' src={item.img} alt='rest-img' />
            <h1 className='p__opensans' >{item.title}</h1>
            <p className="category"></p>
          </div>
          {/* </button> */}
        </Link>
        <div className="card-bottom">
          <div>
            <h3 className='p__opensans'>Price Range: $$$</h3>
            <h3 className='p__opensans'>Reviews: ⭐⭐⭐</h3>
          </div>
          <div>
            <Link to={`/restaurants/${item.id}`}>
              <button className="p__opensans glow-on-hover" type="button">Reserve Now</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }))
  
}