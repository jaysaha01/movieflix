
import { supabase } from "../utils/supabase";

export const sighnUp = async (mydata) => {
  let { data, error } = await supabase.auth.signUp({
    email: mydata.email,
    password: mydata.password,
  });

  if(data){
    console.log(data)
    return data
  }else{
    console.log(error)
    return error
  }
};

export const sighnIn = async (mydata) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: mydata.email,
    password: mydata.password
  })

  if(data){
    console.log(data)
    return data
  }else{
    console.log(error)
    return error
  }
};


