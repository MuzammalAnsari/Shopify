import { CartContext } from 'Contexts/CartContext'
import { SidebarContext } from 'Contexts/SidebarContext'
import React, { useContext } from 'react'
import { BsArrowBarRight, BsTrash } from 'react-icons/bs'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const { isOpen, handleClose } = useContext(SidebarContext)
    const { cart, clearCart, total, itemAmount } = useContext(CartContext)
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-md
            md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            {/* <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-x-2
            md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}> */}
            <div className='flex items-center justify-between py-6 border-b'>

                <div className='upper-case text-sm font-semibold'>Shopping Bag ({itemAmount})</div>

                <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
                    <BsArrowBarRight className='text-2xl' />
                </div>

            </div>




            <div className='flex flex-col gap-y-3 mb-3 pb-3 border-b'>
                <div className='flex w-full justify-between items-center' onClick={clearCart}>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                    </div>
                    <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <BsTrash />
                    </div>
                </div>
                <Link to="/" className='bg-gray-200 flex justify-center items-center p-4 text-primary w-full font-medium'>View cart</Link>
                <Link className='bg-primary flex justify-center items-center p-4 text-white w-full font-medium'>Add to cart</Link>
            </div>





            {/* <div className=' flex flex-col gap-y-2  overflow-y-auto overflow-x-hidden border-b'> */}
            <div className=' flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
                {cart.map(item => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>



            <div className='flex flex-col gap-y-3 py-7 mt-4 overflow-y-auto'>
                <div className='flex w-full justify-between items-center' onClick={clearCart}>
                    {/* <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
                    </div>
                    <div className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <BsTrash />
                    </div> */}
                    <h1>hello</h1>
                </div>
            </div>


        </div>
    )
}
