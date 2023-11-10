import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';

const Form = () => {
  const {
    handleSubmit,
    control,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Handle form submission here
    console.log(data);

    // Upload image to ImgBB
    // if (data.image) {
      const formData = new FormData();
      formData.append('image', data.image[0]);

      try {
        const response = await axios.post(
          'https://api.imgbb.com/1/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            params: {
              key: 'YOUR_IMGBB_API_KEY',
            },
          }
        );

        const imageUrl = response.data.data.url;
        console.log('Image URL:', imageUrl);
      } catch (error) {
        console.error('Image upload failed:', error);
      }
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Title:</label>
        <input {...register('title', { required: 'Title is required' })} />
        {errors.title && <span>{errors.title.message}</span>}
      </div>

      {/* Repeat similar pattern for other form fields */}

      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={(e) => {
            setValue('image', e.target.files);
          }}
        />
        {errors.image && <span>{errors.image.message}</span>}
      </div>

      <div>
        <label>Image URL:</label>
        <input {...register('imageUrl')} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
