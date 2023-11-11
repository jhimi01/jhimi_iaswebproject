import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import useAllQuestions from "../../../hook/useAllQuestions";

const AdminAllquestion = () => {
  const { questions } = useAllQuestions();
  console.log(questions.length);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mt-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            All Questions
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Banh mi cornhole echo park skateboard authentic crucifix neutra
            tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon
            twee
          </p>
        </div>
        <div className="w-full mx-auto overflow-auto mb-10">
         {
            questions.length >= 0 ?  <table className="table-auto w-full text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  #
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Items
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm text-center bg-gray-100">
                  Subject
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm text-center bg-gray-100">
                  Topic
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm text-center bg-gray-100">
                  Submit Time
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm text-center bg-gray-100">
                  Update
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm text-center bg-gray-100">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {questions.map((qsn, index) => (
                <tr key={qsn._id}>
                  <td className="border-t-2 border-gray-200 px-4 py-3">
                    {index + 1}
                  </td>
                  <td className="border-t-2 border-gray-200 px-4 py-3 flex items-center gap-2">
                    <img
                      src={qsn.img}
                      alt="img"
                      className="h-[40px] w-[40px] object-cover rounded-md"
                    />
                    <div>
                      <h2 className="font-semibold">{qsn?.title}</h2>
                      <p></p>
                    </div>
                  </td>
                  <td className="border-t-2 text-center border-gray-200 px-4 py-3">
                    {qsn?.subject}
                  </td>
                  <td className="border-t-2 border-gray-200 text-center">
                    {qsn?.topic}
                  </td>
                  <td className="border-t-2 border-gray-200 text-center">
                    {qsn?.submitTime}
                  </td>
                  <td className="border-t-2 border-gray-200 text-center">
                    <button title="edit"><FaRegEdit className="text-xl text-yellow-600" /></button>
                  </td>
                  <td className="border-t-2 border-gray-200 text-center">
                    <button title="delete"><AiFillDelete className="text-xl text-red-500" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> : <h1 className="text-4xl font-bold text-center my-10">There is no data available</h1>
         }
        </div>
      </div>
    </section>
  );
};

export default AdminAllquestion;
