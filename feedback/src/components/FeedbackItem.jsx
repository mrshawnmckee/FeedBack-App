import { useState } from "react"

function FeedbackItem() {
    const [rating, setRating] = useState(7);        //The number in use state is the default
    const [text, setText] = useState('This is the feedback Area')

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="test-display">{text}</div>

    </div>
  )
}

export default FeedbackItem
