import React from "react";
import TopnavComponent from "../components/Header/TopnavComponent";
import Carousel from "react-bootstrap/Carousel";
import PromotionComponent from "../components/PromotionComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const HomeClient = () => (
  <div>
    <TopnavComponent />
    <Carousel
      className="carousel_client top-space"
      indicators={false}
      interval={null}
    >
      <Carousel.Item className="carousel_client_item">
        <div className="carousel_client_product_display">
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-1.jpg"
              alt="Product 1"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 1</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-2.png"
              alt="Product 2"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 2</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-3.png"
              alt="Product 2"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 3</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carousel_client_item">
        <div className="carousel_client_product_display">
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-4.png"
              alt="Product 4"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 4</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-5.png"
              alt="Product 5"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 5</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
          <div className="carousel_client_product_card">
            <img
              className="carousel_client_product_img"
              src="./img/product-6.png"
              alt="Product 6"
            />
            <div className="carousel_client_product_text">
              <div>
                <p className="carousel_client_product_title">Produto 6</p>
                <p className="carousel_client_product_description">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="carousel_client_product_butons">
                <Button variant="warning">+WishList</Button>
                <Button variant="success">Comprar</Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
    <PromotionComponent />
    <Carousel>
      <Carousel.Item>
        <Card className="bg-dark text-white">
          <Card.Img src="./img/promo1.jpg" height="400px" alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="bg-dark text-white">
          <Card.Img src="./img/promo2.jpg" height="400px" alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
        <Card className="bg-dark text-white">
          <Card.Img src="./img/promo3.jpg" height="400px" alt="Card image" />
          <Card.ImgOverlay></Card.ImgOverlay>
        </Card>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default HomeClient;
