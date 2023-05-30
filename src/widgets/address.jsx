import { useRouter } from "next/router";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const AddressForm = () => {
  const router = useRouter();
  const handleConfirm = () => {
    router.push("/confirm");
  };
  return (
    <Container className="d-flex justify-content-center my-5">
      <Form className="w-50">
        <h1 className="text-center my-5">Checkout Address</h1>
        <FormGroup row>
          <Label sm={2}>Name</Label>
          <Col sm={10}>
            <Input name="name" type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <Input name="email" type="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Phone</Label>
          <Col sm={10}>
            <Input name="phone" type="number" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Address</Label>
          <Col sm={10}>
            <Input name="address" type="textarea" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Pin</Label>
          <Col sm={10}>
            <Input name="pin" type="number" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}></Label>
          <Col sm={10}>
            <Button color="success" onClick={handleConfirm} block>
              Confirm
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default AddressForm;
