import style from "./Page404.module.css";

import { useNavigate } from "react-router-dom";
function Page404() {
  const navigate = useNavigate();

  return (
    <div className={style.errorPage}>
      <h1>Oops! Something went Wrong.</h1>
      
      {/* <h4>
        The page <code>{location.pathname}</code> does not exist.
      </h4> */}
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default Page404;
