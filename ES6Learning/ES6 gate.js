//test zero
console.log('Zero');
console.log('-----------------------------------------');
/*Create a function extractUserData(user, fields) that takes a user 
object and an array of fields and uses destructuring to extract specific
 fields from a user object. The function should handle nested objects. The 
 function should return a new object with the properties specified in the fields array.*/

 // Sample Test Code
const user = {
  id: 1,
  profile: {
    name: "John Doe",
    email: "john@example.com",
    preferences: {
      theme: "dark",
      notifications: true
    }
  },
};


function extractUserData(user={},array)
{   
    
    // const {id,profile:{name,preferences:{theme}}}=user;
    // return {id:id,name:name,them:theme};


    let output={};
    for(let a of array){
        if(!a.includes('.')){
        if(user[a]){
            output[a]=user[a];
        }
        }
        else{

             let fields=a.split('.');
             
            // let value=0;
            // for(let v of fields){
            //     value=value==0?user[v]:value[v];
            //     console.log(v)
            // }
            // console.log(value);
            
            
        }
    }
    return output;

}

// Test casesu
console.log(extractUserData(user, ['id', 'profile.name', 'profile.preferences.theme']));
// Expected: { id: 1, name: "John Doe", theme: "dark" }

