import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs';
import NextMatch from '../../components/01NextMatch';
import NewsItem from '../../components/02NewsItem';
import { http_query } from '../../functions/query';

const Home = () => {
  let [news, setNews] = useState([]);
  const fetchNewsData = () => {
    fetch("https://jok.cat/api/news/efs_masquefa")
      .then((response) => { return response.json(); })
      .then((data) => { setNews(data); });
  }
  const [nextMatch, setNextMatch] = useState([]);
  const fetchMatchesData = () => {
    let string = "";
    if (localStorage.getItem('teamString')) {
      const teamString = JSON.parse(localStorage.getItem('teamString'));
      string = teamString.map(item => `"${item}"`).join(',');
    }
    let query = "";
    let params = [];
    if (string.length == 0) {
      query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup  where datetime('now')  < datetime(matchDate || ' ' || matchHour) limit 0,1";
    } else {
      query = "select  idMatch,localName, visitorName, place,matchDate, matchHour, idRound, localImage,visitorImage, groupName, groupName, localResult, visitorResult, distance,travelTime,meteo,coordinates from matches m join groups g on g.idGroup=m.idGroup where (idLocal in (" + string + ") or idVisitor in (" + string + ")) and datetime('now')  < datetime(matchDate || ' ' || matchHour) limit 0,1";
    }
    params = [];
    let response = http_query(query, params).then((res) => { setNextMatch(res[0].results.rows[0]); });
  }

  useEffect(() => {
    fetchMatchesData();
    fetchNewsData();
  }, []);
  if (nextMatch[0] && news) {
    return (
      <>
        <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center">
          <div id="header" className="w-screen  p-7 text-center text-white  text-3xl font-bold">E.F.S. Masquefa</div>
          <div className='px-2 w-full'>
            <NextMatch nextMatch={nextMatch} />
            <div className='border-solid mt-2 mb-32 pb-32'>
              <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Notícies</div>
              {news.map(
                n => (
                  <NewsItem key={n['idNew']} data={n} />
                )
              )
              }
            </div>
            <BottomTabs />
          </div>
        </div>
      </>
    )
  } else {
    return (<><div className="w-screen h-screen items-content-center justify-content-center bg-azure-700 text-white font-bold">Carregant</div></>)
  }
}
export default Home;