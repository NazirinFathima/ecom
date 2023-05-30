import { Container, Table } from "reactstrap";

const AdminCarousel = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between my-3">
        <h3>Home Carousel</h3>
        <div>
          <button className="btn btn-xm btn-warning mx-1">Add new</button>
        </div>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Index</th>
            <th className="text-center">Image</th>
            <th>Url</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((each, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td className="d-flex justify-content-center">
                <div className="admin-table-image">
                  <img
                    className="full-img"
                    src="https://www.dealntech.com/wp-content/uploads/2022/05/iPhone-Wallpaper.jpg"
                    alt=""
                  />
                </div>
              </td>
              <td>/</td>
              <td>
                <div className="d-flex">
                  <img
                    className="mx-2 pointer"
                    src="https://img.icons8.com/small/16/create-new.png"
                  />
                  <img
                    className="mx-2 pointer"
                    src="https://img.icons8.com/material/16/filled-trash.png"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminCarousel;
