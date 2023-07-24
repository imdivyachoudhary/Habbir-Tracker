import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createHabbit } from "../redux/reducers/habbitReducer";

function HabbitForm() {
    const dispatch = useDispatch();

    const habbitNameRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();
        dispatch(createHabbit({name: habbitNameRef.current.value}));
        habbitNameRef.current.value="";
    }
  return (
    <form
      method="post"
      id="add-habbit-form"
      onSubmit={submitFormHandler}
    >
      <input
        type="text"
        placeholder="Add Habbit"
        ref={habbitNameRef}
        required
      />
      <button type="submit" id="search-button">
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
}

export default HabbitForm;
