import React from 'react';
import Header from "./components/Header"; 
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from './pages/AboutPage';
import Post from './pages/Post';
import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './components/context/FeedbackContext';
function App() {
  const [feedback,setFeedback]=useState(FeedbackData);
  const addFeedback=(newFeedback)=>{
    newFeedback.id=uuidv4();
    setFeedback([newFeedback,...feedback])
  }
  return(
    <FeedbackProvider>
   <Router>
    <Header/>
    <div className="container">
      <Routes>
      <Route exact path="/" element={
        <>
          <FeedbackStats/>
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackList/>
        </>
      }>
      </Route>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/post/:id/:name" element={<Post/>}/>
      <Route path="/post/*" element={<Post/>}/>
    </Routes>
    <AboutIconLink/>
    </div>
    </Router>
    </FeedbackProvider>
  );
}
 
export default App;