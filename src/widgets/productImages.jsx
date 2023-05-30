const ProductImgs = () => {
  return (
    <div>
      <img
        className="single-product-img"
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
      <div className="single-product-sub">
        <img
          className="imgs"
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
        <img
          className="imgs"
          alt="Sample"
          src="https://picsum.photos/300/200"
        />
      </div>
    </div>
  );
};

export default ProductImgs;
