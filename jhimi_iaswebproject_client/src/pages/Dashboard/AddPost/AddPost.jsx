import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Convert timestamp to a human-readable format
  };

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    // create a FormData onject and append the image file
    const formData = new FormData();
    formData.append("image", data.image[0]);
    // make a post request to Imgbb api
    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_API_KEY
    }`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      // extract the image url from the response
      const imageUrl = result?.data?.display_url;
      const PostData = {
        title: data.title,
        questionText: data.questionText,
        answer: data.answer,
        subject: data.subject,
        topic: data.topic,
        subjectname: data.subject,
        submitTime: convertTimestamp(new Date().getTime()),
        img: imageUrl,
      };

      axios
        .post("http://localhost:5000/posts", PostData)
        .then((res) => {
          console.log("post", res.data);
          navigation("/dashboard/all_questions");
          setLoading(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          console.error("Post request failed:", error);
          // Handle error if the post request fails
        });

      console.log(PostData);
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className=" mt-8">
      <h1 className="text-center text-3xl font-semibold mt-10">Add question</h1>
      <p className="text-center text-gray-600 mb-10">
        admin can add different questions through this form
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("title", { required: "Title is required" })}
                className={`border rounded-full w-full py-2 px-3 ${
                  errors.title ? "border-red-500" : ""
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
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
                {...register("questionText", {
                  required: "Question Text is required",
                })}
                className={`border rounded-full w-full py-2 px-3 ${
                  errors.questionText ? "border-red-500" : ""
                }`}
                placeholder="question"
              />
              {errors.questionText && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.questionText.message}
                </p>
              )}
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
                {...register("answer", { required: "Answer is required" })}
                className={`border rounded-full w-full py-2 px-3 ${
                  errors.answer ? "border-red-500" : ""
                }`}
              />
              {errors.answer && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.answer.message}
                </p>
              )}
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
                  {...register("subject", { required: "Subject is required" })}
                  className={`border rounded-full w-full py-2 px-3 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
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
                  {...register("topic", { required: "Topic is required" })}
                  className={`border rounded-full w-full py-2 px-3 ${
                    errors.topic ? "border-red-500" : ""
                  }`}
                />
                {errors.topic && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.topic.message}
                  </p>
                )}
              </div>
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

            <div className="form-control relative w-1/2 text-center pt-16">
              <label className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer absolute bottom-0 left-0 right-0 ml-5 mb-5">
                Browse image
                <input
                  type="file"
                  placeholder="photo URL"
                  className="input input-bordered hidden"
                  accept="image/*"
                  {...register("image", { required: "Image is required" })}
                />
              </label>
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <input
                placeholder="if you want to add url link"
                type="text"
                id="urllink"
                name="urllink"
                {...register("urllink")}
                className="border rounded-full w-full py-2 px-3"
              />
            </div>
          </div>
        </div>

        <div className="my-4 w-1/2 mx-auto">
          <button
            type="submit"
            className="LinkTiems w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-4">
                <FaSpinner className="text-2xl animate-spin" /> it might take a
                bit longer
              </span>
            ) : (
              "submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
