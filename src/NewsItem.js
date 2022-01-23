import{useLocation} from 'react-router-dom';
import {useEffect,useState} from'react';
import './News.css';


export default function NewsItem(){
    const data=useLocation();
    const [newsItem,setNewsItem]=useState([]);
    const [disp,setDisp]=useState([]);
    useEffect(()=>{
        console.log(data);
        let sort_data=data.state.data.sort(function(a,b){
            let date1=new Date(a.TIMESTAMP);
            let date2=new Date(b.TIMESTAMP);
            if(date1>date2){return 1}
            else if(date1<date2){return -1}
            else return 0;
        });
        setNewsItem(sort_data);

       
    },[]);
    useEffect(()=>{
        let ptemp=[];
        let temp=[];
        newsItem.forEach((d,i)=>{
            temp.push(<div key={i}  className="div-ind">{d.TITLE}</div>);
           })
           setDisp(temp);
    },[newsItem]);

    return (<div className="btn-container">{disp}</div>);
}