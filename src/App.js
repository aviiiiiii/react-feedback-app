import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm";
import {FeedbackProvider} from "./contexts/FeedbackContext"

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App(){


    return (
    <FeedbackProvider>
    <Router>
    <Header/>
        <div className="container">
        <Routes>
            <Route exact path="/" element={
                <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                </>
            } />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        </div>
        <AboutIconLink />
    </Router>
    </FeedbackProvider>
    )
}

export default App;