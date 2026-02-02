import React from 'react';
import Header from "./components/Header"; 
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from "./components/FeedbackData";
import FeedbackForm from './components/FeedbackForm';
function App() {
  return(
  <>
    <Header/> 
    <div className="container">
      
      <FeedbackForm/>
    </div>
    </>
  );
}
 
export default App;