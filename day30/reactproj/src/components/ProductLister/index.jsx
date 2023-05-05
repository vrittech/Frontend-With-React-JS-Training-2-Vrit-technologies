import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductLister = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.thumbnail} alt="test-img" />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductLister;
