import { useLoaderData } from "react-router-dom";

const QuestionPage = () => {
 const singleQsn = useLoaderData();
 console.log(singleQsn)

  return (
    <div className="md:w-10/12 w-11/12 mx-auto my-20">
     
    </div>
  );
};

export default QuestionPage;
