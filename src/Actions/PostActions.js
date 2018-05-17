import axios from 'axios';

export const postData = (data) => {
    let url = 'https://mysterious-everglades-33844.herokuapp.com/';
    // Default options are marked with *
    axios.post(url, {
        "title": data.title,
        "content": data.content,
        "tag1": data.tag1,
        "tag2": data.tag2,
        "tag3": data.tag3,
        "category": data.category,
        "username": data.username,
        "img_id": data.img_id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

export const uploadImage = (file) => {
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/djoaubs93/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'llrvxajl';
  const imageFormData = new FormData();
  imageFormData.append('file', file);
  imageFormData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  console.log(imageFormData);

  return axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: imageFormData
  })
  .then(response => {
    const data = response.data;
    return data})
  .then(data => {
    const fileURL = data.secure_url
    console.log(data);
    return fileURL;
  })
  .catch(error=>console.error(error))
  }
