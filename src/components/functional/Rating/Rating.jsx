import Star from "../../../assets/images/star.svg";
import GoldStar from "../../../assets/images/star-gold.svg";

import styles from "./styles.module.css";
import classnames from "classnames";
import { SIZE } from "../../constants/sizes";

const maxRatingCount = 5;

export const Rating = ({
  value,
  size = SIZE.m,
  onChange,
  maxRating = maxRatingCount,
  className,
}) => {
  return (
    <div className={className}>
      {maxRating > 0 &&
        new Array(maxRating)
          .fill(null)
          .map((_, index) => (
            <img
              src={index >= value ? Star : GoldStar}
              className={classnames(styles.star, styles[size])}
              onClick={() => onChange?.(index + 1)}
              alt={index >= value ? "black" : "gold"}
            />
          ))}
    </div>
  );
};
