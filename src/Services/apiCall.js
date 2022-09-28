const apiCall = async(url,method,data)=>{

    const response=await fetch(`https://localhost:7152${url}`,{
        method,
        headers:{
            "content-type":"application/json"
        },
        body:data?JSON.stringify(data):undefined


    })
  return response.json ();
}

export default apiCall;