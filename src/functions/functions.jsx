import React from 'react'

export const transformDate = (date) => {

   let s = date.split(" ");
   if (s[1]) {
      let d = s[0].split("-");
      return d[2] + "-" + d[1] + "-" + d[0];
   } else {
      let d = s[0].split("-");
      return d[2] + "-" + d[1];
   }
}
export const shortenDate = (date) => {
  
   let s = date.split(" ");
   if(date=='AJORNAT' || date=='Suspès'){
      return date;
   }
   if (s[1]) {
      let d = s[0].split("-");
      return d[2] + "-" + d[1];
   } else {
      let d = s[0].split("-");
      return d[2] + "-" + d[1];
   }
 
}

export const truncateTeamNames = (teamName) => {
   teamName = teamName.replace("ESCOLA", "");
   teamName = teamName.replace("ASSOC.", "");
   teamName = teamName.replace("ESCOLA FUTBOL SALA", "E.F.S.");
   teamName = teamName.replace("VEDRUNA PUIGCERDÀ", "VEDRUNA");
   teamName = teamName.replace("FUTSAL ATHLETIC", "F.A.");
   teamName = teamName.replace("FUTBOL SALA", "F.S.");
   return teamName;
}

export const mapa = (map) => {

   //"http://maps.google.com/maps?z=12&t=m&q=loc:41.571312+1.603928"
   let m = map.split("loc:");
   let l = m[1].split("+");

   if (l[1]) {
      let lat = l[0];
      let lng = l[1];
      if (['iPhone', 'iPad', 'iPod'].includes(navigator.platform)) {
         const win = window.open(`maps://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`, '_top');
         return win.focus();
      }
      /* default to Google */
      const win = window.open(`https://maps.google.com/maps?daddr=${lat},${lng}&amp;ll=`, '_top');
      return win.focus();
   }
}
