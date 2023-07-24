import { checkStatusOfDate } from "../redux/reducers/habbitReducer";
import StatusColumn from "./StatusColumn";

function StatusRow({ habbit, dates }) {
  return (
    <div className="row">
      <div className="cell">
        <div className="status-cell">{habbit.name}</div>
      </div>
      {dates.map((date, index) => {
        let status = checkStatusOfDate(
            habbit,
            date.toLocaleDateString("en-GB")
          );
        return (
          <StatusColumn
            key={index}
            habbit={habbit}
            status={status}
            target_date={date.toLocaleDateString("en-GB")}
          />
        );
      })}
    </div>
  );
}

export default StatusRow;
