import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
function FeedbackForm() {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
    },
  ]);
  const [rating, setRating] = (useState = 10);
  return (
    <form>
      <input
        type="text"
        placeholder="Give us your Feedback"
        name="text"
        // value={feedback.text}
      />
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        // value={rating}
        // onChange={handleRating}
        autoWidth
        label="Rating"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={10}>10</MenuItem>
      </Select>
    </form>
  );
}

export default FeedbackForm;
