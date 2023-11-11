// import bgcontact from "../../../../public/3596.jpg";
import './Contact.css'

const Contact = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto my-20">
      <h1 className="text-3xl capitalize font-semibold text-center my-5">
        Contact with us
      </h1>
      <div>
        {/* <div className="w-full h-[60vh]">
          <img src={bgcontact} alt="bg" className="w-full h-full object-cover" />
        </div> */}
        <div className="flex items-center justify-center flex-col w-1/2 mx-auto px-5">
            <input className="inputfileld" type="text" placeholder="your name" />
            <input className="inputfileld" type="email" placeholder="email" />
            <textarea className="inputfileld md:h-40" placeholder="Type message here"></textarea>
            <button className='button-54'>send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
