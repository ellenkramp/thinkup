import axios from 'axios';

export const postData = (data) => {
    let url = 'https://mysterious-everglades-33844.herokuapp.com/';
    // Default options are marked with *
    axios.post(url, {
        "title": `${data.title}`,
        "content": `${data.content}`,
        "tag1": `${data.tag1}`,
        "tag2": `${data.tag2}`,
        "tag3": `${data.tag3}`,
        "category": `${data.category}`,
        "username": `${data.username}`
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
