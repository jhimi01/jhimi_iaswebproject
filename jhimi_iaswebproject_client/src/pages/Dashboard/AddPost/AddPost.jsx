// FormComponent.jsx

import { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const AddPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    questionText: "",
    answer: "",
    imageUrl: "",
    url: "",
    submitTime: "",
    subject: "",
    topic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setFormData({ ...formData, imageUrl: data.data.url });
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" mt-8">
      <h1 className="text-center text-3xl font-semibold mt-10">Add question</h1>
      <p className="text-center text-gray-600 mb-10">
        admin can add different question thorough this form
      </p>
      <form onSubmit={handleSubmit}>
        <div className="md:flex gap-20 items-center">
          <div className="md:w-1/2">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                placeholder=" title"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded-full w-full py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="questionText"
              >
                Question Text
              </label>
              <input
                id="questionText"
                name="questionText"
                value={formData.questionText}
                onChange={handleChange}
                className="border rounded-full w-full py-2 px-3"
                placeholder="question"
              />
            </div>

            {/* answer */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="answer"
              >
                Answer
              </label>
              <input
                placeholder=" Answer"
                type="text"
                id="answer"
                name="answer"
                value={formData.answer}
                onChange={handleChange}
                className="border rounded-full w-full py-2 px-3"
              />
            </div>

            <div className="flex justify-between mb-4 gap-3">
              {/* subject */}
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  placeholder="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border rounded-full w-full py-2 px-3"
                />
              </div>

              {/* topic */}
              <div className="w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="topic"
                >
                  Topic
                </label>
                <input
                  placeholder=" Topic"
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="border rounded-full w-full py-2 px-3"
                />
              </div>
            </div>

            {/* date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="submitTime"
              >
                Submit Time
              </label>
              <input
                placeholder="Submit Time"
                type="time"
                id="submitTime"
                name="submitTime"
                value={formData.submitTime}
                onChange={handleChange}
                className="border rounded-full w-full py-2 px-3"
              />
            </div>
          </div>

          {/* image */}
          <div className="md:w-1/2 h-full border-dashed border-2 border-gray-300 p-8 flex flex-col items-center justify-center">
            <div className="text-9xl w-full flex items-center justify-center text-gray-300 text-center">
              <AiOutlineCloudUpload />
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              select from local or just Ctrl+V and image will be pasted
            </label>

            <div className="relative w-1/2 text-center pt-16">
              <label
                htmlFor="image"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer absolute bottom-0 left-0 right-0 ml-5 mb-5"
              >
                Browse image
              </label>

              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            {formData.imageUrl && (
              <img
                src={formData.imageUrl}
                alt="Selected"
                className="h-[100px] mb-2"
              />
            )}
            <input
              id="imageUrl"
              name="imageUrl"
              placeholder="Paste Image URL or Ctrl+V to paste"
              value={formData.imageUrl}
              onChange={handleChange}
              className="border text-black text-center rounded-full w-full py-2 px-3"
            />
          </div>
        </div>

        <div className="my-4 w-1/2 mx-auto">
          <button
            type="submit"
            className="LinkTiems w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;

// export default AddPost;
