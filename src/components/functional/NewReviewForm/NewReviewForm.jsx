import React, { useReducer } from "react";
import { initialValue, reducer, newReviewActions } from "../../../store/newReviewForm/reducer"
import { SIZE } from "../../constants/sizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";


export const NewReviewForm = () => {
  const [newRating, dispatch] = useReducer(reducer, initialValue);

  const submit = () => {
    console.log(Object.values(newRating).join(" "));
  };

  const isSubmitDisabled = !newRating.name || !newRating.text || !newRating.rating

  const handleNameChange = ({ target: { value } }) => dispatch({ type: newReviewActions.setName, payload: value })

  const textChangeCallback = ({ target: { value } }) => dispatch({ type: newReviewActions.setText, payload: value })

  const ratingChangeCallback = (value) => dispatch({ type: newReviewActions.setRating, payload: value })

  return (
    <div className={styles.new_review}>
      <Input
        label="Name"
        value={newRating.name}
        onChange={handleNameChange}
      />
      <Input
        label="Text"
        value={newRating.text}
        onChange={textChangeCallback}
      />
      <div className={styles.new_review_rating}>
        <div className={styles.new_review_rating_title}>Rating</div>
        <Rating
          className={styles.new_review_rating_value}
          size={SIZE.m}
          value={newRating.rating}
          onChange={ratingChangeCallback}
        />
      </div>
      <Button
        className={styles.new_review_btn}
        onClick={submit}
        disabled={isSubmitDisabled}
      >
        Submit
      </Button>
    </div>
  );
};
