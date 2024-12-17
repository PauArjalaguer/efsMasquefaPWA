import React, { useEffect, useState } from 'react'
import BottomTabs from '../../components/bottomTabs'
import { useParams } from 'react-router-dom';



const Noticia = (p) => {
  let { idNew } = useParams();

  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(1);
  const fetchNewsData = () => {
    setLoaded(1);
    fetch("https://jok.cat/api/news/efs_masquefa/" + idNew)
      .then((response) => { return response.json(); })
      .then((data) => { setNews(data[0]);});
  }


  useEffect(() => {
    setNews([]);
    fetchNewsData();
  }, []);
  if (news) {
    return (
      <>
        <div className="w-screen h-screen bg-slate-700 bg-[url('/public/images/app_back.jpg')] bg-cover bg-center pt-6">
          <div id="header" className="w-screen  p-7 text-center text-white text-2xl font-bold">E.F.S. Masquefa</div>
          <div className=' w-full bg-azure-600'>
            <img className='w-full ' src={"http://jok.cat/" + news['newsImage']} />
          </div>
          <div className='bg-azure-700 text-xs font-bold p-2 text-white '>{news['newsTitle']}</div>
          <div className='p-2 w-full text-xs pb-32 '>
            <p className='whitespace-pre-line'>
              {news['newsContent']}
            </p>
            <p className='whitespace-pre-line mt-5 font-italics'>
              Publicada el {news['newsDatetime']}
            </p>
          </div>
          <BottomTabs />
        </div>
      </>
    )
  }
}

export default Noticia