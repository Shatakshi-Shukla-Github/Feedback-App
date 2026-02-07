function FeedbackStats({ feedback }) {
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // const decimal = (num) => {
  //   return Number.parseFloat(num).toFixed(1);
  // };
  average = average.toFixed(1); //It will display average with only 1 digit after the decimal
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating:- {isNaN(average) ? 0 : average}/10</h4>
    </div>
  );
}

export default FeedbackStats;
