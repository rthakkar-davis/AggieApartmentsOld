import { colors } from '../../colors';
import '../css/QnA.css';

function QnA({qna}) {

    return (
      <div>
        <h1>Questions & Answers</h1>
        <div className="QnAContainer">
          {qna.map((q) => (
            <div style={{marginBottom: "15px"}}>
              <p><b style={{paddingRight: "10px"}}>Question:</b> {q["question"]}</p>
              <p><b style={{paddingRight: "18px"}}>Answer:</b> {q["answer"]}</p>
              <p style={{marginLeft: "80px", color: colors["darkGray"]}}>By {q["name"]} on {q["time"]}</p>
            </div>
          ))}
        </div>
        <button style={{marginLeft: "80px", fontSize: "20px"}}>See more answered questions</button>
      </div>
    );
  }
  
  export default QnA;
  