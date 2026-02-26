import Card from "../components/shared/Card";
import { useParams } from "react-router-dom";
function Post() {
  const params = useParams();
  return (
    <Card>
      <h1>Post {params.id}</h1>
      <h3>From {params.name}</h3>
    </Card>
  );
}

export default Post;
