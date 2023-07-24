import { useSelector } from "react-redux";
import {
  checkStatusOfDate,
  habbitSelector,
} from "../redux/reducers/habbitReducer";
import HabbitItem from "./HabbitItem";

function HabbitList() {
  const { habbits } = useSelector(habbitSelector);

  let today = new Date();
  let date_options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="habbits-list" id="habbits-list">
      <div className="habbit habbit-heading" id="habbit-heading">
        <div className="display_name">Habbits</div>

        <div className="habbit-status-options" id="today-date">
          {today.toLocaleDateString("en-US", date_options)}
        </div>
      </div>
      <div id="habbits">
        {habbits.map((habbit) => {
          let status = checkStatusOfDate(
            habbit,
            today.toLocaleDateString("en-GB")
          );
          return (
            <HabbitItem
              key={habbit._id}
              habbit={habbit}
              status={status}
              today={today.toLocaleDateString("en-GB")}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HabbitList;
