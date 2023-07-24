import { habbitSelector } from "../redux/reducers/habbitReducer";
import "./Report.css";
import { useSelector } from "react-redux";
import StatusRow from "../Report/StatusRow";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

function Report() {
  const { habbits, isLoading } = useSelector(habbitSelector);

  const [dates, setDates] = useState([]);

  const getDayOfWeek = (date) => {
    let dayOfWeek = date.getDay();
    return isNaN(dayOfWeek)
      ? null
      : ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"][dayOfWeek];
  };

  const getDates = () => {
    let today = new Date();
    let arr = [];
    for (let i = 6; i >= 0; i--) {
      arr.push(new Date(today - i * 86400000));
    }
    setDates(arr);
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <div className="report-header">
        <h1>WEEKLY REPORT</h1>

        <Link to="/">
          <button className="btn btn-primary back-btn">Back</button>
        </Link>
      </div>
      {isLoading && <Loader />}
      {habbits.length > 0 && (
        <div className="weekly_report">
          <div className="report-table">
            <div className="row">
              <div className="cell">
                <div className="status-cell">Habbits/Days</div>
              </div>

              {dates.map((date, i) => (
                <div key={i} className="cell">
                  <div className="date-cell">
                    {getDayOfWeek(date)}
                    <br />
                    {date.toLocaleDateString("en-GB")}
                  </div>
                </div>
              ))}
            </div>

            {habbits.map((habbit) => (
              <StatusRow key={habbit._id} habbit={habbit} dates={dates} />
            ))}
          </div>
        </div>
      )}
      {!isLoading && habbits.length===0 && (
      <p className="show-failure-message">
        No Information Available!!!
      </p>
      )}
    </>
  );
}

export default Report;
