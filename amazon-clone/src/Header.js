/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
//This is a component, so H is capitalized

import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {

const [{basket}] = useStateValue();


  return (
    <div className = "header">
        <Link to="/">
        <img 
            className="header__logo" 
            src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>
        

        
        <div
            className="header__search" >
            <input className="header__searchInput" type = "text"/>
            <SearchIcon 
                className="header__searchIcon"/>
        </div>

        <div className="header__nav">
            <Link to={"/login"}>
            <div className="header__option">
                <span className = "header__optionLineOne">Hello</span>
                <span className = "header__optionLineTwo">Sign In</span>
            </div>
            </Link>
            <div className="header__option">
                <span className = "header__optionLineOne">Returns</span>
                <span className = "header__optionLineTwo">& Orders</span>
            </div>
            <div className="header__option">
                <span className = "header__optionLineOne">Your</span>
                <span className = "header__optionLineTwo">Prime</span>  
            </div>
            <div classname="header__option">
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket?.length}
                        </span>
                        </div>
                </Link>
            
           
            </div>

        </div>

    </div>
  )
}

export default Header