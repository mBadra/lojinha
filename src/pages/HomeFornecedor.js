import React from "react";
import TopnavComponent from "../components/Header/TopnavComponent";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./style.scss"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



const HomeFornecedor = () => (
  <div>
    <TopnavComponent />
    <div className="top-space">
    <Container>
  <Row>
    <Col><img src="./img/product-1.jpg" className="Prod1" alt="logo" width="200"/><p>Camiseta</p><Button variant="primary">Comprar</Button>{' '}</Col>
    <Col><img src="./img/product-2.png" className="Prod2" alt="logo" width="200"/><p>Caneca</p><Button variant="primary">Comprar</Button>{' '}</Col>
    <Col><img src="./img/product-3.png" className="Prod3" alt="logo" width="200"/><p>Camiseta</p><Button variant="primary">Comprar</Button>{' '}</Col>
    <Col><img src="./img/product-8.png" className="Prod8" alt="logo" width="200"/><p>PATO</p><Button variant="primary">Comprar</Button>{' '}</Col>
  </Row>
  
</Container>
        <h2>Meus Produtos</h2>
        <h2>Promoções</h2>
        <h2>Solicitar design</h2>
        <h2>Produtos mais vendidos</h2>
    </div>
  </div>
);

export default HomeFornecedor;
