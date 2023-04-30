const COHORT_NAME = '2301-ftb-et-web-pt';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`
   export const registerUser = async (user) => {
        
        try {
          const response = await fetch(
            `${BASE_URL}/users/register`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user
            })
          });
          const result = await response.json();
   
          return result
          console.log('*****************index.js',result)
        } catch (err) {
          console.error(err);
        }
      } ;
 //LOGIN ***************
 export const loginUser = async (user) => {
  
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user
        }),
      });
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };
  
    
          export const myData = async (token) => {
            try {
              const response = await fetch(`${BASE_URL}/users/me`, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              });
              const result = await response.json();
              // console.log(result);
              return result;
            } catch (err) {
              console.error(err);
            }
          };
    

//Posts **************
    export  const fetchPosts = async (token) => {
        try {
          const response = await fetch(`${BASE_URL}/me`,{
            headers:{
                'Content-type':'application/json',                
                Authorization:'Bearer ${token}'
            },
          });
      
          const result = await response.json();
        //  console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      };

     export const makePost = async (post,token) => {
console.log(post,token)
       
       
        try {
          const response = await fetch(`${BASE_URL}/posts`, {
            method: "POST",
           
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
              post
              }),
            
          });
          const result = await response.json();
         // console.log(result);
          return result
        } catch (err) {
          console.error('this is a problem',err);
        }
      }
     
    //***************Delete * just a sample delete is not working/
    const deletePost = async () => {
        try {
          const response = await fetch(`${BASE_URL}/posts/5e8d1bd48829fb0017d2233b`, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
          });
          const result = await response.json();
          console.log(result);
          return result
        } catch (err) {
          console.error(err);
        }
      }