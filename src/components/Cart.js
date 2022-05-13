import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductPrice, Hr, Top, TopButton, TopText } from './StyledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>CHANGUITO DE COMPRAS</TitleCart>
            <Top>
                <Link to='/'><TopButton>SEGUIR COMPRANDO</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}  style={{color:"red"}}>ELIMINAR LOS PRODUCTOS</TopButton>
                    : <TopText>EL CHANGUITO ESTA VACIO</TopText>
                }
            </Top>
            <ContentCart>
                    {
                        test.cartList.length > 0 ? 
                        test.cartList.map(item => 
                        <Product key={item.idItem}>
                        <ProductDetail>
                            <ImageCart src={item.imgItem} />
                            <Details>
                            <span>
                                <b>Producto:</b> {item.nameItem}
                            </span>
                            <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}  style={{color:"red"}}>ELIMINAR</TopButton>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <div>
                            <p>{item.qtyItem} Producto(s)</p>
                            </div>
                            <ProductPrice>$ {item.costItem} cada uno.</ProductPrice>
                        </PriceDetail>
                        </Product>
                        )
                        : <TitleCart></TitleCart>
                    }
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;