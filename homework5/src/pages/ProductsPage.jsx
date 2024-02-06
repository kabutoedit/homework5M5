import {useDispatch, useSelector} from "react-redux";
import {marketAction} from "../store/marketAction.js";
import "../../src/index.css"

export const ProductsPage = () => {
    const dispatch = useDispatch()
    const getPost = useSelector(state => state.marketState.post)

    const handleClick = (selectProduct) => {
        dispatch(marketAction({payload: selectProduct}))
    }

        return (
        <div className="MarketBlock">
            {getPost.map((item) => (
                <div className={'product'} key={item._id}>
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button onClick={() => handleClick(item)}>BUY</button>
                </div>
                ))}
        </div>
    );
};