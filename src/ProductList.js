import React from 'react'

export const ProductList = ({products,cart,onAddToCart,onRemoveFromCart}) => {
  return (
     <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {products.map((product) => (<div key={product.id} className="col mb-5">
                        <div className="card h-100">
                          { /*Product image*/}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           { /* Product details */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                   { /* Product name */}
                                  <h5 className="fw-bolder">{product.productName}</h5>
                                   { /* Product price */}
                                    {product.price}
                                </div>
                            </div>
                            {/* Product actions */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{cart.some(p => p.id === product.id) ? (
        <button onClick={() => onRemoveFromCart(product)}>Remove from Cart</button>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}</a>
      </div>
                            </div>
                        </div>
                    </div>))}
                                    
                 </div>                     
            </div>
        </section>
  )
}
