import { useDispatch } from "react-redux";
import { updateHabbitStatus } from "../redux/reducers/habbitReducer";

function HabbitItem({ habbit, status, today }) {
  const dispatch = useDispatch();

  const updateHabbitStatusHandler = (new_status) => {
    dispatch(
      updateHabbitStatus({
        habbit_id: habbit._id,
        checkDate: today,
        status: new_status,
      })
    );
  };

  return (
    <div className="habbit">
      <div className="display_name">{habbit.name}</div>
      <div className="habbit-status-options">
        <button
          className={`btn btn-sm ${status === "Done" ? "active" : ""} >`}
          onClick={() => updateHabbitStatusHandler("Done")}
        >
          Done
        </button>
        <button
          className={`btn btn-sm ${status === "Not Done" ? "active" : ""} >`}
          onClick={() => updateHabbitStatusHandler("Not Done")}
        >
          Not Done
        </button>
        <button
          className={`btn btn-sm ${status === "None" ? "active" : ""} >`}
          onClick={() => updateHabbitStatusHandler("None")}
        >
          None
        </button>
      </div>
    </div>
  );
}

export default HabbitItem;
