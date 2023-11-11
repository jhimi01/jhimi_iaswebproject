import { Link, useLocation } from "react-router-dom";
import useAllQuestions from "../../../hook/useAllQuestions";
import QuestionPage from "../../QuestionsPage/QuestionsPage";


const AllQuestion = () => {
  const location = useLocation();
  const { questions } = useAllQuestions();

   // Check if the current location is a single card page
   const isSingleCardPage = location.pathname.startsWith('/questions/');

  

  // Check if the current location is "/allqsn"
  const isAllQuestionsPage = location.pathname === "/allqsn";

  // Conditionally apply slice(0, 4) based on the isAllQuestionsPage value
  const displayedQuestions = isAllQuestionsPage ? questions : questions.slice(0, 4) ;


  return (
    <div className="md:w-10/12 w-11/12 mx-auto my-20">
      <h1 className="text-3xl capitalize font-semibold text-center my-5">
        All questions
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center">
        {/* Map the questions data */}
        {displayedQuestions.map((question) => (
          <div key={question._id}>
            <Link to={`/questions/${question._id}`}>
              <div className="p-4 w-full group">
                <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-[200px] md:h-36 group-hover:scale-110 transition duration-500 ease-in-out w-full object-cover object-center"
                    src={question?.img}
                    alt="blog"
                  />
                  <div className="py-2 px-4">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">
                      {question?.topic}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900">
                      {question.title}
                    </h1>
                    <p className="leading-relaxed">{question?.answer}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Conditionally render the "See More" button */}
      {!isAllQuestionsPage && (
        <div className="text-center my-5">
          <Link to="/allqsn">
            <button className="button-54">See More</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllQuestion;
