import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";

function App() {

  return (
    <>
    {/* sending in props to the Header component via text="" */}
    <Header />

    <div className="container">
      <h1>My App</h1>
    <FeedbackItem />

    </div>
  </>
  )
}

export default App;
