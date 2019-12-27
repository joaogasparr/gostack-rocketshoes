import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdShoppingCart } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';

import { Container, Cart } from './styles';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
