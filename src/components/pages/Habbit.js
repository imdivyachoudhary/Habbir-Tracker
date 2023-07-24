import "./Habbit.css";
import { Link } from "react-router-dom";
import HabbitForm from "../Habbit/HabbitForm";
import HabbitList from "../Habbit/HabbitList";
import { useSelector } from "react-redux";
import { habbitSelector } from "../redux/reducers/habbitReducer";
import Loader from "../Loader/Loader";

function Habbit() {
  const { habbits, isLoading } = useSelector(habbitSelector);
  return (
    <>
      <HabbitForm />
      {isLoading && <Loader />}
      {habbits.length > 0 && (
        <>
          <div className="weekly-report-link" id="weekly-report-link">
            <div className="link">
              <Link to="weekly-report">Weekly Report</Link>
            </div>
          </div>
          <HabbitList />
        </>
      )}
      {!isLoading && habbits.length===0 && (
      <p className="show-failure-message">
        Nothing To Show!!! <br /> Add Habbits
      </p>
      )}
    </>
  );
}

export default Habbit;
