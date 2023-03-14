import React, { useReducer } from "react";
import { SIZE } from "../../constants/sizes";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import styles from "./styles.module.css";

const initialValue = {
  name: "",
  text: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName": {
      return { ...initialValue, name: action.payload };
    }
    case "setText": {
      return { ...state, text: action.payload };
    }
    case "setRating": {
      return { ...state, rating: action.payload };
    }
    default:
      return state;
  }
};

export const NewReviewForm = () => {
  const [newRating, dispatch] = useReducer(reducer, initialValue);

  const submit = () => {
    console.log(Object.values(newRating).join(" "));
  };

  return (
    <div className={styles.new_review}>
      <Input
        label="Name"
        value={newRating.name}
        onChange={({ target: { value } }) =>
          dispatch({ type: "setName", payload: value })
        }
      />
      <Input
        label="Text"
        value={newRating.text}
        onChange={({ target: { value } }) =>
          dispatch({ type: "setText", payload: value })
        }
      />
      <div className={styles.new_review_rating}>
        <div className={styles.new_review_rating_title}>Rating</div>
        <Rating
          className={styles.new_review_rating_value}
          size={SIZE.m}
          value={newRating.rating}
          onChange={(value) => dispatch({ type: "setRating", payload: value })}
        />
      </div>
      <Button
        onClick={submit}
        disabled={!newRating.name || !newRating.text || !newRating.rating}
      >
        Submit
      </Button>
    </div>
  );
};
