import { useRouter } from "next/router";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";

const ProductDetails = () => {
  const router = useRouter();
  const handleBuy = () => {
    router.push("/address");
  };
  return (
    <div className="mt-5 ms-5">
      <h1>name</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
        perferendis ex, mollitia similique facere praesentium recusandae
        repellendus iste sit sequi quisquam assumenda!
      </p>
      <br />
      <h3>Rs. 3000</h3>
      <br />
      <Row>
        <Col lg="8">
          <FormGroup>
            <Input name="quantity" type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <Button onClick={handleBuy} className="btn-success" block>
              Buy now
            </Button>
          </FormGroup>
        </Col>
        <Col lg="2">
          <FormGroup>
            <Button className="btn btn-warning" block>
              <img src="https://img.icons8.com/material/26/like--v1.png" />
            </Button>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <div className="d-flex my-2">
        <img
          className="me-3"
          src="https://img.icons8.com/material/36/get-cash--v1.png"
        />
        <h6 className="mt-2">Cash on delivery </h6>
      </div>
      <div className="d-flex my-2">
        <img
          className="me-3"
          src="https://img.icons8.com/material/36/refund-2.png"
        />
        <h6 className="mt-2">10 day refund </h6>
      </div>
    </div>
  );
};

export default ProductDetails;
