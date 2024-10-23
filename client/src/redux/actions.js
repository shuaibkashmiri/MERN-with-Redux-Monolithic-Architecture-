import axios from "axios";

const apiCall =
  (request, success, error, route, formData) => async (action) => {
    try {
      action({
        type: request,
      });

      // method post
      if (formData) {
        const  baseUrl = "http://localhost:5000"
        const res  = await axios.post(`${baseUrl}/${route}`, formData);


        if (res.status === 200) {
          action({
            type: success,
            payload: res.data.payload,
            message: res.data.message,
          });
        } else {
          action({
            type: error,
            message: res.data.message,
          });
        }

        // method get
      } else {
         const  baseUrl = "http://localhost:5000"
        const res = await axios.get(`${baseUrl}${route}`);
     

        if (res.status === 200) {
          action({
            type: success,
            payload: res.data.payload,
            message: res.data.message,
          });
        } else {
          action({
            type: error,
            message: res.data.message,  
          });
        }
      }
    } catch (err) {
      console.log(err);
      action({
        type: error,
        message: "NetWork Error , Server Down!",
      });
    }
  };








export const userDataRequest = () => apiCall("userDataRequest", "userDataSuccess", "userDataError", "getUser");
export const productDataRequest = () =>apiCall("productDataRequest","productDataSuccess","productDataError","getProducts");
export const registerRequest = (formData) =>apiCall("registerRequest","registerSuccess","registerError","api/v1/user/register",formData);
