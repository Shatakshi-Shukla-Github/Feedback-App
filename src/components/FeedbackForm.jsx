import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
function FeedbackForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter Your Feedback"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="primary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
