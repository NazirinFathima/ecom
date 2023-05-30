import Footer from "@all/widgets/footer";
import NavbarWid from "@all/widgets/navbar";
import ProductDetails from "@all/widgets/productDetails";
import ProductImgs from "@all/widgets/productImages";
import { Col, Container, Row } from "reactstrap";

export default function Home() {
  return (
    <>
      <NavbarWid />
      <Container>
        <Row>
          <Col>
            <ProductImgs />
          </Col>
          <Col>
            <ProductDetails />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
