import React from 'react'

const transformDate = (date) => {

   let s = date.split(" ");
   if(s[1]){
    let d = s[0].split("-");
    return d[2] + "-" + d[1]+"-"+d[0];

   }else{
   
    let d = s[0].split("-");
    return d[2] + "-" + d[1];
   }


}
export default transformDate;