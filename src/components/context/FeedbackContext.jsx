import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = async (id) => {
    if (
      window.confirm("Are you sure you want to delete this feedback?") === true
    ) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };
  // addFeedback Explanation:-
  // 1) In await function only this function waits and the rest of React App continues running normally
  // 2) fetch() sends an HTTP request to the server.
  // 3) method:"POST" means that you are telling the JSON server to add this new feedback to the database
  // 4) Headers tell the server what kind of data you're sending and in this case we are sending JSON. It acts as the label indicating that this package contains JSON
  // 5) The body is the actual data you're sending to the server. But HTTP requests only send strings, not objects. So we convert the object into JSON text.
  // 6) Updating React State happens like this:- NEW ITEM(data) + OLD ARRAY(feedback) that means the new feedback always appears at the top

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item)),
    );
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
