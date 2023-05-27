import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../features/user/userSlice";
import { ROUTES } from "../../utils/routes";

import styles from "../../styles/Product.module.css";

const SIZES = [4, 4.5, 5];

const Product = (item) => {
  const { title, images, price, description } = item
  const dispatch = useDispatch();
  const [currentImage, setCurrentImage] = useState();
  const [currentSize, setCurrentSize] = useState();

  useEffect(() => {
    if (!images.length) return;
    setCurrentImage(images[0]);
  }, [images]);

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <section className={styles.product}>
      <div className={styles.images}>
        <div
          className={styles.current}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
        <div className={styles["images-list"]}>
          {images.map((image, index) => (
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${image})` }}
              key={index}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.price}>{price}$</div>
        <div className={styles.color}>
          <span>Color:</span> Green
        </div>
        <div className={styles.sizes}>
          <span>Sizes:</span>
          <div className={styles.list}>
            {SIZES.map((size) => (
              <div
                className={`${styles.size} ${
                  currentSize === size ? styles.active : ""
                }`}
                key={size}
                onClick={() => setCurrentSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <button
            className={styles.add}
            disabled={!currentSize}
            onClick={addToCart}
          >
            Add to cart
          </button>
          <button className={styles.favourite}>Add to favorites</button>
        </div>
        <div className={styles.bottom}>
          <div className={styles.purchases}>
            {Math.floor(Math.random() * 100 + 1)} people purchased
          </div>
          <Link className={styles.purchases} to={ROUTES.HOME}>
            Find in a store
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
