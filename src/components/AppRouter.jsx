import React from 'react';
import {Route, Routes} from "react-router-dom";
import CatalogPage from "../page/CatalogPage/CatalogPage";
import MainPage from "../page/MainPage/MainPage";
import FavoritePage from '../page/FavoritePage/FavoritePage'
import ProductItemPage from "../page/ProductItemPage/ProductItemPage";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage";
import BasketPage from "../page/BasketPage/BasketPage";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/catalog/:id' element={<CatalogPage />}/>
                <Route path='/catalog/' element={<CatalogPage />}/>
                <Route path='/favorite/' element={<FavoritePage />}/>
                <Route path='/basket' element={<BasketPage/>}/>
                <Route path='/category/:id' element={<CatalogPage/>}/>
                <Route path='/product/:id' element={<ProductItemPage/>}/>
                <Route path='/*' element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;