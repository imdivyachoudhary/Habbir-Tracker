import { useDispatch } from "react-redux";
import { updateHabbitStatus } from "../redux/reducers/habbitReducer";
import { useState } from "react";

function StatusColumn({ habbit, status, target_date }) {
  const dispatch = useDispatch();

  const [showStatusOptions, setShowStatusOptions] = useState(false);

  const updateHabbitStatusHandler = (new_status) => {
    dispatch(
      updateHabbitStatus({
        habbit_id: habbit._id,
        checkDate: target_date,
        status: new_status,
      })
    );
  };

  return (
    <div className="cell">
      <div
        className="status-cell status-cell-icon"
        onClick={() => {
          setShowStatusOptions(!showStatusOptions);
        }}
      >
        <div className="status-icon">
          {status === "Done" ? (
            <i className="fas fa-check" style={{ color: "#09b106" }}></i>
          ) : status === "Not Done" ? (
            <i className="fas fa-times" style={{ color: "#cf2507" }}></i>
          ) : (
            <i className="fas fa-minus"></i>
          )}
        </div>
        {showStatusOptions && (
          <div className="status-options">
            <div
              className={`status-option ${status === "Done" ? "active" : ""}`}
              onClick={() => updateHabbitStatusHandler("Done")}
            >
              Done
            </div>
            <div
              className={`status-option ${
                status === "Not Done" ? "active" : ""
              }`}
              onClick={() => updateHabbitStatusHandler("Not Done")}
            >
              Not Done
            </div>
            <div
              className={`status-option ${status === "None" ? "active" : ""}`}
              onClick={() => updateHabbitStatusHandler("None")}
            >
              None
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatusColumn;
