import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ProductLister = ({ product }) => {
  const navigate = useNavigate();

  const viewProducthandler = (id) => {
    navigate(`/products/${id}`);
  };

  const returnTitle = (title) => {
    if (title.length > 20) {
      return title.slice(0, 20).concat("...");
    } else {
      return title;
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={product.thumbnail}
        alt="test-img"
        className="h-75"
      />
      <Card.Body>
        <Card.Title>{returnTitle(product.title)}</Card.Title>
        <Card.Text>
          {product.description.length > 30
            ? product.description.slice(0, 30) + "..."
            : product.description}
        </Card.Text>
      </Card.Body>
      <Button variant="primary" onClick={() => viewProducthandler(product.id)}>
        View Product
      </Button>
    </Card>
  );
};

export default ProductLister;
