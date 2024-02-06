import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Basket = () => {
	const getPosts = useSelector(state => state.basketState.basketProducts)

	return (
		<div>
			<div className={'basketProduct'}>
				{getPosts.map(item => {
					return (
						<div className='basketProducts'>
							<span>{item.product.name}</span>
							<span>{item.product.price}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Basket
