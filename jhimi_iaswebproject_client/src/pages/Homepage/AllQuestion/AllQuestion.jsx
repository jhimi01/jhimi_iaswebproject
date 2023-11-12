import { useState } from "react";
import useAllQuestions from "../../../hook/useAllQuestions";

const AllQuestion = () => {
  const { questions } = useAllQuestions();
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(questions)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + questions.length) % questions.length
    );
  };

  // Determine whether the "Next" button should be disabled
  const isNextButtonDisabled = currentIndex === questions.length - 1;

  return (
    <div className="md:w-10/12 w-11/12 mx-auto my-5">
      {questions.length > 0 ? (
        <div>
          {/* <h1 className="text-3xl capitalize font-semibold text-center">
            All questions
          </h1> */}
          <div className="p-4 md:w-5/6 mx-auto group">
        <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="h-[330px] group-hover:scale-110 transition duration-500 ease-in-out w-full object-cover object-center"
            src={questions[currentIndex]?.img}
            alt="question"
          />
          <div className="py-2 px-4">
            <h1 className=" text-[34px] font-bold tracking-tight text-gray-900">
              {questions[currentIndex]?.title}
            </h1>
            <h3 className=" text-[24px] font-bold tracking-tight text-gray-900">
              {questions[currentIndex]?.questionText}
            </h3>
            <p className=" mb-3">{questions[currentIndex]?.answer}</p>
            <div className="flex justify-between items-center bg-slate-200 py-2 px-4 capitalize rounded-md">
            <small>sub: {questions[currentIndex]?.subjectname}</small>
            <small>topic: {questions[currentIndex]?.topic}</small>
            </div>
          </div>
        </div>
      </div>

          {/* Conditionally render the "Next" and "Previous" buttons */}
          <div className="flex items-center justify-center gap-10 my-5">
            <button onClick={handlePrev} className="button-54">
              Prev
            </button>
            <button
              onClick={handleNext}
              className={
                isNextButtonDisabled ? "opacity-20 button-54" : "button-54"
              }
              disabled={isNextButtonDisabled}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <h1 className="text-4xl text-slate-500 font-bold text-center py-28" >
          No questions available
        </h1>
      )}
    </div>
  );
};

export default AllQuestion;
