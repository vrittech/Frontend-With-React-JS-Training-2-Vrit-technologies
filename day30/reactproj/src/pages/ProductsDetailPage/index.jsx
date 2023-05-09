import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { getProductById } from "../../services/axios.service";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProdData = async (id) => {
    const response = await getProductById(id);
    setProduct(response);
  };

  useEffect(() => {
    getProdData(id);
  }, []);

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col md="6">
            <Image src={product.thumbnail} alt={product.title} />
          </Col>
          <Col md="6">
            <h2>{product.title}</h2>
            <p className="mb-4">{product.description}</p>
            <p className="h4">Price: {product.price}</p>
            <p className="text-muted">Rating: {product.rating} out of 5</p>
            <p className="text-muted">Stock: {product.stock}</p>
            <p className="text-muted">Category: {product.category}</p>
            <Button variant="primary" className="mt-2">
              Add to cart
            </Button>
          </Col>
        </Row>
        <Row>
          {product.images &&
            product.images.map((image, index) => {
              return (
                <Col md="3" key={index} className="my-3 ">
                  <Image src={image} alt="image" className="h-100 ms-2 w-75" />
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default ProductDetailPage;
