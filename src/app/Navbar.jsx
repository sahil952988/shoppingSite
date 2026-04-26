import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between mt-5 font-cinzel mx-10'>
     <h1 className=" text-3xl tracking-wide">
  UrbanStyle
</h1>

      <div className="items flex space-x-10 text-[20px]">
        <h1>Home</h1>
        <h1>Blog</h1>
        <h1>Shop</h1>
        <h1>pages</h1>
        <h1>Contact</h1>
      </div>

      <div className="cart flex space-x-5 text-[20px]">
        <h1>WishList</h1>
        <h1>cart</h1>
        <h1>login</h1>
      </div>
    </div>
  )
}

export default Navbar
