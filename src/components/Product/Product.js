import "../Product/Product.css";

function Product({
  image,
  subtitle,
  price,
  discount,
  availability,
  bucketImage,
  plusImage,
	productCount,
	minusImage,
	increaseCounter,
	decreaseCounter
}) {
  return (
    <article className="product__item">
      <img className="product__image" alt="Товар" src={image} />
      <div className="product__item-info">
        <p className="product__subtitle">{subtitle}</p>
        <div className="product__price-container">
          <p className="product__price">{price} &#x20bd;</p>
          <p className="product__price-discount">{discount} &#x20bd;</p>
        </div>
        <p className="product__text">{availability}</p>
      </div>
      <div className="product__change-container">
        <img className="product__delete-image" alt="Удалить" src={bucketImage} />
        <div className="product__item-counter">
          <img
            className="product__counter-image"
            alt="Добавить"
            src={plusImage}
            onClick={increaseCounter}
          />
          <p className="product__item-quantity">{productCount}</p>
          <img
            className="product__counter-image"
            alt="Удалить"
            src={minusImage}
            onClick={decreaseCounter}
          />
        </div>
      </div>
    </article>
  );
}

export default Product;
