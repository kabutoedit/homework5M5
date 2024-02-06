import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasket, marketAction } from '../store/action.js'

const ProductsPage = () => {
	const dispatch = useDispatch()
	const getPost = useSelector(state => state.marketState.post)

	const handleClick = product => {
		dispatch(addBasket({ product })), dispatch(marketAction({ product }))
	}

	return (
		<div>
			{getPost.map(item => (
				<div className={'product'}>
					<span>{item.name}</span>
					<span>{item.price}</span>
					<button onClick={() => handleClick(item)}>BUY</button>
				</div>
			))}
		</div>
	)
}

export default ProductsPage
