const About = () => {
  return (
    <section className="text-gray-600 md:w-10/12 mx-auto w-11/12 body-font">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://t4.ftcdn.net/jpg/02/67/08/09/360_F_267080924_aHzz3sjmAUbwTCstbOublIt7ls4okYyA.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Empowering Your Learning Journey
          </h1>
          <p className="mb-3 leading-relaxed">
            Welcome to our platform, where learning meets innovation. We believe
            in the power of education to transform lives and shape the future.
            Our mission is to provide accessible and engaging learning
            experiences for everyone, anywhere...... experiences for everyone, anywhere......
          </p>

          <p className="text-sm mb-5 text-gray-500 w-full">
            Stay updated with the latest educational content, resources, and
            insights.
          </p>

          <button className="button-54">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default About;
