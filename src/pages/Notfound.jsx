import errorImg from "../img/404.png"
import { useNavigate } from "react-router-dom"
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={errorImg} alt="" />
      <div>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-danger" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

export default NotFound