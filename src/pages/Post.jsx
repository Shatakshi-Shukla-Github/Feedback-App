import Card from "../components/shared/Card";
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };
  return (
    <Card>
      <h1>Post {params.id}</h1>
      <h3>From {params.name}</h3>
      <button onClick={handleClick}>Click Me</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </Card>
  );
}

export default Post;
