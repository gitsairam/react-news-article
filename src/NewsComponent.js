import {useState,useEffect} from 'react';
import axios from 'axios';
import './News.css';
import {useNavigate} from 'react-router-dom';

export default function NewsComponent(){

    const[news,setNews]=useState([]);
    const [disp,setDisp]=useState([]);
    const [publisher,setPublisher]=useState([]);
    //const[groupData,setGroupData]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{
       
            axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json").then((response) =>{
                console.log(response.data);
                setNews(response.data);

                localStorage.setItem("news",response.data);
                
            })
        
       
    },[])

    useEffect(()=>{
        let temp=[];
        let ptemp=[];
      
      
       
       news.forEach((newr,i)=>{
            if(ptemp.indexOf(newr.PUBLISHER)<0){
                ptemp.push(newr.PUBLISHER);
            }
           //temp.push(<button key={i} onClick={()=>{navigateTo(newr)}} className="btn-ind">{newr.PUBLISHER}</button>);
       });
       ptemp.forEach((d,i)=>{
        temp.push(<button key={i} onClick={()=>{navigateTo(d)}} className="btn-ind">{d}</button>);
       })
       setDisp(temp);

       
    },[news])
  
   function navigateTo(newObj){
    let gdata= groupByPublisher(news,"PUBLISHER");
        const tdata=gdata[newObj];
        console.log(tdata);
       navigate(newObj,{state:{data:tdata}});
    }
    function groupByPublisher(array,key){
        return array.reduce((objectsByKeyValue, obj) => {
            const value = obj[key];
            objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
            return objectsByKeyValue;
          }, {});
    }
return(
    <div className="btn-container">{disp}</div>
)
}