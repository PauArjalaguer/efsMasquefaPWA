import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import NewsItem from '../../components/02NewsItem';
import Sponsor from '../../components/05Sponsor';



const Noticies = () => {
  let [news, setNews] = useState([]);
  const fetchNewsData = () => {
    fetch("https://jok.cat/api/news/efs_masquefa/25")
      .then((response) => { return response.json(); })
      .then((data) => { setNews(data); });
  }
  useEffect(() => {
    fetchNewsData();
  }, []);
  return (
    <>
      <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
        <div id="header" className="w-screen  p-7 text-center text-white text-2xl lg:text-4xl font-bold">E.F.S. Masquefa</div>
        <div className='px-2 w-full'>
          <div className='border-solid mb-32 pb-32'>
            <div className='bg-azure-700 p-2 font-bold rounded-t-lg text-white'>Notícies</div>
            {news.map(
              (n, index) => (<>
                <Sponsor key={index + 1} index={index + 1}></Sponsor>
                <NewsItem key={n['idNew']} data={n} /></>
              )
            )
            }
          </div>
        </div>
        <BottomTabs />
      </div>
    </>
  )
}

export default Noticies