

import { useLoaderData, useParams, Link } from "react-router-dom";

const QuestionPage = () => {
  const { id } = useParams();
  console.log(id)
  const questions = useLoaderData();

  return (
    <div className="md:w-9/12 w-11/12 mx-auto my-20">
      <img src={questions?.img} alt="img" className="w-full object-cover h-[500px] rounded-md" />
      <div>
        <h1 className="text-3xl font-bold my-5">{questions?.title}</h1>
        <h3 className="text-xl font-bold mb-3">{questions?.questionText}?</h3>
        <p className="text-lg mb-5">Ans:  {questions?.answer}</p>
        <div>
  
          {/* Display small subject and topics here */}
          <p className="text-lg mb-3">Subject: {questions?.subject}</p>
          <p className="text-lg mb-3">Topics: {questions?.topic}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-20 my-5">
        {/* <Link to={}> */}
          <button className="button-54">&lt; Previous</button>
        {/* </Link> */}
        {/* <Link to={`/questions/}`}> */}
          <button className="button-54">Next &gt;</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default QuestionPage;
