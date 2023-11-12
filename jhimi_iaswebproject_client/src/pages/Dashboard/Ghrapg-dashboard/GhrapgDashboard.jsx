// import { useEffect } from "react";
// import { Bar } from "react-chartjs-2";
import useAllQuestions from "../../../hook/useAllQuestions";

const GhrapgDashboard = () => {
  const { questions } = useAllQuestions();

  // Sample data for the bar chart
  // const chartData = {
  //   labels: ["Questions", "Users", "Answers"],
  //   datasets: [
  //     {
  //       label: "Data",
  //       backgroundColor: ["#ee9ca7", "#D1913C", "#24C6DC"],
  //       data: [questions.length, questions.length + 10, questions.length + 5],
  //     },
  //   ],
  // };

  // const chartOptions = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  // };

  // // Use useEffect to render the chart after component mount
  // useEffect(() => {
  //   const renderChart = () => {
  //     // Render the chart here
  //     return <Bar data={chartData} options={chartOptions} />;
  //   };

  //   renderChart();
  // }, []); // Empty dependency array ensures that it runs only once after mount

  return (


    <>
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-10 md:my-20 my-10 px-2">
      <div
        style={{
          backgroundImage: "linear-gradient(132deg, #ee9ca7 0%, #ffdde1 100%)",
        }}
        className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 md:h-40 md:py-0 py-3 text-white"
      >
        <h2 className="text-5xl ">{questions.length}</h2>
        <p className="text-xl capitalize text-center font-semibold">
          questions
        </p>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(132deg, #D1913C 0%, #FFD194 100%)",
        }}
        className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 md:h-40 md:py-0 py-3 text-white"
      >
        <h2 className="text-5xl ">{questions.length + 10}</h2>
        <p className="text-xl capitalize text-center font-semibold">Users</p>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(132deg, #24C6DC 0%, #514A9D 100%)",
        }}
        className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 md:h-40 md:py-0 py-3 text-white"
      >
        <h2 className="text-5xl ">{questions.length + 5}</h2>
        <p className="text-xl capitalize text-center font-semibold">Answers</p>
      </div>



    </div>
    {/* Add the chart */}
    <div className="w-full md:h-96 h-60">
        {/* <Bar data={chartData} options={chartOptions} /> */}
      </div>
    </>
  );
};

export default GhrapgDashboard;
