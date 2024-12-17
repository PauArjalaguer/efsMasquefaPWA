import React, {useState,useEffect} from 'react'
import { http_query } from '../../functions/query';

function Sponsor(props) {
    const [sponsor, setSponsor] = useState('');
    const fetchSponsor = async () => {
       let query = "SELECT * FROM sponsors order by RANDOM() ";
       let params = [];
        let response = http_query(query, params).then((res) => {
            setSponsor(res[0].results.rows[0]);
        });
    }
    useEffect(() => {
        if (props.index % 3 === 0) {
            fetchSponsor();
    
        }
    }, []);

    return (
        <div className={props.index % 3 === 0 ? 'mb-2':'hidden'} ><a href={sponsor[3]}><img src={"https://jok.cat/images/" + sponsor[2]} /></a></div>
    )
}

export default Sponsor;