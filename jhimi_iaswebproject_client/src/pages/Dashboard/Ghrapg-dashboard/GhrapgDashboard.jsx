import useAllQuestions from "../../../hook/useAllQuestions";


const GhrapgDashboard = () => {


    const { questions} = useAllQuestions()

    return (
        <div className="grid grid-cols-3 gap-10 my-20">
            <div style={{
                backgroundImage: "linear-gradient(132deg, #D1913C 0%, #FFD194 100%)"
            }}  className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 h-40 text-white">
                <h2 className="text-5xl ">{questions.length}</h2>
                <p className="text-xl capitalize text-center font-semibold">questions</p>
            </div>
            <div style={{
                backgroundImage: "linear-gradient(132deg, #ee9ca7 0%, #ffdde1 100%)"
            }} 
            className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 h-40 text-white">
            <h2 className="text-5xl ">{questions.length + 10}</h2>
            <p className="text-xl capitalize text-center font-semibold">Users</p>
        </div>
            <div style={{
                backgroundImage: "linear-gradient(132deg, #24C6DC 0%, #514A9D 100%)"
            }} 
            className="w-full flex items-center justify-center rounded-md flex-col bg-slate-100 h-40 text-white">
            <h2 className="text-5xl ">{questions.length + 5}</h2>
            <p className="text-xl capitalize text-center font-semibold">Answers</p>
        </div>
        </div>
    );
};

export default GhrapgDashboard;