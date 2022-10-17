import React, {useEffect, useState} from 'react';
import './ProductItemPage.scss'
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, addToFav} from "../../redux/slices/userSlice";
import {Link, useParams} from "react-router-dom";

const ProductItemPage = () => {

    const param = +useParams().id // convert to number
    const productObj = useSelector(state => state.catalog.catalogList)
    const chosenProduct = productObj.find(item => item.id === param)
    const dispatch = useDispatch()
    const [isClicked, setIsClicked] = useState(false)
    const [isFavClicked, setIsFavClicked] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const onClickedButton = () => {
        dispatch(addToBasket(chosenProduct))
        setIsClicked(true)
    }

    const onClickedFavButton = () => {
        dispatch(addToFav(chosenProduct))
        setIsFavClicked(true)
    }

    return (
        <div className='product_page'>
            <div className='left_part'>
                <div className='img_wrap'>
                    <img alt={chosenProduct.name}
                         src={chosenProduct.img}/>
                </div>
            </div>
            <div className='right_part'>
                <div className='title'>{chosenProduct.name}</div>
                <div className='price'>{chosenProduct.price} ₽</div>
                {isClicked
                    ?
                    <Link to='/basket'>
                        <button className='button button_clicked'>
                            Перейти в корзину
                        </button>
                    </Link>
                    :
                    <button
                        className='button'
                        onClick={onClickedButton}
                    >
                        В корзину
                    </button>
                }
                {isFavClicked
                    ?
                    <Link to='/favorite'>
                        <button className='button fav clicked'>Перейти в избранные</button>
                    </Link>
                    :
                    <button className='button fav' onClick={onClickedFavButton}>В избранные</button>
                }
            </div>
        </div>
    );
};

export default ProductItemPage