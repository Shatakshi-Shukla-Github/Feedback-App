import React from 'react';
import Header from "./components/Header"; 
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {useState} from "react";
function App() {
  const [feedback,setFeedback]=useState(FeedbackData);
  const deleteFeedback=(id)=>{
    if(window.confirm("Are you sure you want to delete this feedback?")===true){
      setFeedback(feedback.filter((item)=>item.id!==id))
    }
  }
  return(
   <>
    <Header/>
    <div className="container">
      <FeedbackStats feedback={feedback}/>
      <FeedbackForm/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
    </>
  );
}
 
export default App;