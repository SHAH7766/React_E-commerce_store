import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const dispatch = useDispatch()
  const {Cart} = useSelector(state=>state.name)
  return (
    <>
  <nav style={{backgroundColor:"#1B9CFC"}} className="navbar navbar-expand-lg navbar-dark ">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/pro' className="nav-link active" aria-current="page" >Products</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
       
        <Link to='/cart'><button className="btn btn-dark" >
     <i class="fa-solid fa-cart-shopping"><span className='mx-2 text-warning'>{Cart.length}</span></i>
        </button></Link>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
