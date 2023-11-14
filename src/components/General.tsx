import React, { useState } from "react";
import { useQuery } from 'react-query';
import styled from "styled-components";

interface Product{
    name: string
    description: string
    photo: string
    price: string
    quantity?:number 
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garantiza que el contenido cubra al menos el 100% de la altura de la ventana */
`;
const Navbar = styled.div`
  background-color: #0F52BA;
  display: flex;
  flex-direction: column; /* Cambiar a columna en pantallas pequeñas */
  align-items: center;
  padding: 10px;

  @media (min-width: 600px) {
    flex-direction: row; /* Volver a fila en pantallas más grandes */
    justify-content: space-between;
  }
`;
const Title = styled.h1`
margin-left: 100px;
width: 128px
height: 44px
font-family: Montserrat;
font-size: 40px;
font-weight: 600;
line-height: 19px;
color: #FFFFFF;
`
const Text = styled.h2`
width: 200px
font-family: Montserrat;
font-size: 20px;
font-weight: 300;
line-height: 19px;
color:#FFFFFF;
margin-left: 190px;
margin-top: -30px;
`
const Button = styled.button`
    display:flex;
    flex-direction:row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #FFFFFF;
    border: none;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    width: 65px; 
    height: 40px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    margin-right:80px;
    `
    const Grilla = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 100%); /* Cambiar a una columna en pantallas pequeñas */
    gap: 20px;
    max-width: 800px;
    width: 100%;
    margin-left: 100px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(4, 200px);
      gap: 50px;
      max-width: 800px;
      width: 100%;
      margin: auto;
      margin-left: 450px;
    }
  `;
const Prodcard = styled.div`
display:flex;
flex-direction:column;
width: 218px;
height: 285px;
flex-shrink: 0;
align-items:center;
border-radius: 8px;
background: #FFF;
box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
margin: 15px;
@media (min-width: 600px) {
  width: 218px;
}
`;
const Proddata = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items: center;
`;
const Img = styled.img`
height:140px;
margin-bottom: auto;
`
const Button2 = styled.button`
width: 100%;
height:32px;
margin-top:auto;
border:none;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
background-color:#0F52BA;
color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
display:flex;
flex-direction: row; 
justify-content: center;
align-items: center;
gap: 10px;
`
const Prodname = styled.h2`
width: 124px;
flex-shrink: 0;
color: #2C2C2C;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 19px; 
`
const Price = styled.div`
display: flex;
align-items: center;
padding: 2px;
width: 64px;
height: 26px;
border-radius: 5px;
background-color: #373737;
color: #FFF;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px;
`
const Text2 = styled.p`
width: 192px;
height: 20px;
margin-bottom: 30px;
flex-shrink: 0;
color: #2C2C2C;
font-family: Montserrat;
font-size: 10px;
font-style: normal;
font-weight: 300;
line-height: 12px;
`
const Footer = styled.footer`
width: 100%;
text-align: center;
margin-top: auto;
padding: 10px;
color: #000;
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Cart = styled.div`
  position: fixed;
  top: 0;
  right: -300px; 
  width: 100%; 
  height: 100vh; 
  background-color: #0F52BA;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
  overflow-y: auto;
  &.show {
    right: 0; 
  }
  #precioTotal{
    position:relative;
    right: 50px;
  }
  @media (min-width: 600px) {
    /* Estilos para pantallas más grandes (mayores a 600px) */
    position: fixed;
    top: 0;
    right: -600px; 
    width: 600px;
    height: 100%;
    background-color: #0F52BA;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    overflow-y: auto;
    &.show {
      right: 0; 
    }
    #clsCart {
      position: relative;
      left: 400px;
      opacity: 0.5;
    }
    .total {
      display:flex;
      flex-direction:row;
      justify-content: center;
    }
  }

  h2 {
    margin-left: 50px;
    margin-top: 40px;
    width: 128px;
    height: 44px;
    font-family: Montserrat;
    font-size: 27px;
    font-weight: 600;
    line-height: 19px;
    color: #FFFFFF;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #clsCart {
    position: relative;
    left: 530px;
    opacity: 0.5;
  }

  .total {
    display: flex;
    justify-content: space-between;
    margin-top: 55vh;
    margin-left: 50px;
    margin-right: 50px;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFF;
  }

  #fin {
    padding: 20px;
    padding-right: 197px;
    padding-left: 197px;
    font-family: Montserrat;
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: center;
    color: #FFF;
    background-color: #000;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  padding: 10px;
  margin: 20px;
  margin-left: 50px;
  width: 80%;
  height: 95px;
  flex-shrink: 0;
  
  img {
    height: 90px;
    margin-right: 10px;
  }
  h3{
    color: #2C2C2C;
font-family: Montserrat;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: 17px; /* 130.769% */
  }
  div {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  #add{
    border-left: 0.2px solid #BFBFBF
  }
  #delete{
  position: relative;
  bottom: 40px;
  left: 20px;
  opacity: 0.5;
  }
  #dec{
    border-right: 0.2px solid #BFBFBF
  }
  #qdc2{
    font-size:10px;
    position:relative;
    left:130px;
    bottom:25px;

  }
  #price{
font-family: Montserrat;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0px;
text-align: left;
color: #000000;
  }
  @media (max-width: 600px) {
    

    width: 70%; 
    height: 60px;
    margin-right: 5px;
    img {
      height: 50px; 
      margin-right: 5px; 
    }

    h3 {
      font-size: 12px; 
    }

    
  }
`;

const fetchProducts =async (): Promise<Product[]> => {
    const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC");
    const data = await response.json();
    const prodsData = data.products;
    prodsData.map((prod: Product) =>{
      prod.quantity = 0
      return 0;
    })
    return prodsData;
  }

const General: React.FC = () => {
    const { data: products = [], isLoading, isError } = useQuery<Product[]>(['products'], fetchProducts);
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const [carrito, setCarrito] = useState<Product[]>([]);
    const [precioTotal, setPrecioTotal] = useState(0);

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };
  
  const comprarProd: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const product = JSON.parse(event.currentTarget.dataset.product || '{}');
    const existingProduct = carrito.find((obj) => obj.name === product.name);
  
    if (existingProduct) {
      existingProduct.quantity !== undefined? existingProduct.quantity += 1: existingProduct.quantity = 1 ;
      setPrecioTotal((prevPrecioTotal) => prevPrecioTotal + ( parseInt(existingProduct.price)))
    } else {
      product.quantity += 1;
      addToCart(product);
    }
  };

  const addToCart = (product: Product) => {
    setCarrito((prevCarrito) => [...prevCarrito, product]);
    setPrecioTotal((prevPrecioTotal) => prevPrecioTotal + ( parseInt(product.price)));
    console.log(carrito)
    console.log(precioTotal)
  };
  const updateCart = (name: string, caso: number) => {
    const indiceProducto = carrito.findIndex((producto) => producto.name === name);
  
    if (indiceProducto !== -1) {
      const nuevoCarrito = [...carrito];
      const productoActual = nuevoCarrito[indiceProducto];
  
      if (productoActual) {
        switch (caso) {
          case 1:
            nuevoCarrito[indiceProducto] = {
              ...productoActual,
              quantity: (productoActual.quantity || 0) + 1,
            };
            setPrecioTotal((prevPrecioTotal) => prevPrecioTotal + ( parseInt(productoActual.price)))
            break;
          case 2:
            nuevoCarrito.splice(indiceProducto, 1);
            setPrecioTotal((prevPrecioTotal) => prevPrecioTotal - (productoActual.quantity !== undefined? parseInt(productoActual.price) * productoActual.quantity:0))
            break;
          case 3:
            nuevoCarrito[indiceProducto] = {
              ...productoActual,
              quantity: Math.max((productoActual.quantity || 0) - 1, 0),
            };
            setPrecioTotal((prevPrecioTotal) => prevPrecioTotal - ( parseInt(productoActual.price)))
            break;
        }
       
        if (productoActual.quantity !== undefined? productoActual.quantity < 1 && caso !== 2 : false) {
          nuevoCarrito.splice(indiceProducto, 1); 
       }
        
      }
      setCarrito(nuevoCarrito);
    }
  };
   
  

  
    return <>
{isLoading && <Wrapper>Carregando</Wrapper>}
{isError && <Wrapper>Houve um erro</Wrapper>}
<Wrapper>
<Navbar>
    <div>
        <Title>MKS</Title>
        <Text>Sistemas</Text>
    </div>
    <Button onClick={toggleCarrito}><img src="./Vector.svg"  alt="carrito"/>{carrito.length}</Button>
</Navbar>

<Grilla>
{products.map((product) => (
            <Prodcard>
                <Img src={product.photo}/>
                <Proddata>
                <Prodname>{product.name}</Prodname>
                 <Price>
                 R${product.price}
                 </Price>
                </Proddata>
                <Text2>{product.description}</Text2>
                <Button2 onClick={(event) => comprarProd(event)} data-product={JSON.stringify(product)}><img src="./shopping-bag.svg" alt="shopping-bag"/><h3>COMPRAR</h3></Button2>
               
            </Prodcard>))}
</Grilla>

<Footer>
    <p>MKS sistemas © Todos os direitos reservados</p>
</Footer>

{mostrarCarrito &&   <Cart className={mostrarCarrito ? 'show' : ''}>
    <div>
      <h2>Carrinho de compras</h2>
      <button onClick={toggleCarrito} id="clsCart"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="white">
  <circle cx="19" cy="19" r="19" fill="black"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">X</text></svg></button>
      {carrito.map((cart) => (
        <Card key={cart.name}>
          <Img src={cart.photo} alt={cart.name} />
          <div>
            <h3>{cart.name}</h3>
            <p id="qdc2">Qtd:</p>
            <div id="qdc">              
            <button onClick={() => updateCart(cart.name, 3)} id="dec">-</button>
              <p id="quant">{cart.quantity}</p>
              <button onClick={() => updateCart(cart.name, 1)} id="add">+</button>
            </div>
            <p id="price">R${cart.quantity !== undefined ? cart.quantity * parseInt(cart.price) : 0}</p>
          </div>
          <button onClick={() => updateCart(cart.name, 2)} id="delete"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="19" fill="black"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">X</text></svg></button>
        </Card>
      ))}
    </div>
    <div className="total"><p>Total:R$</p><p id="precioTotal">{carrito.length !== 0 ? precioTotal : 0}</p></div>
    
    <button id="fin">Finalizar Compra</button>
  </Cart>}
</Wrapper>
     </>;
  };
  
  export default General;
