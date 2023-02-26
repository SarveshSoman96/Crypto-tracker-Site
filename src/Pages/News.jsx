import { useState, useEffect } from "react";
import NewsInfo from "../components/NewsInfo";
import "./News.css";

const News = () => {

  const [newsData, setNewsData ] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNewsData = async () => {
    await fetch("https://newsdata.io/api/1/news?apikey=pub_1789466e1171ff6df393e6e3261582b677e75&q=crypto&language=en")
    .then(res => res.json())
    .then(data => console.log(data))
  };

   useEffect(() => {
    setLoading(true)
    getNewsData()
    setTimeout(() => {
        setLoading(false)
    }, 500);
  
  }, [])
  

  return (
    <div className='container news_container'>
        <h2 style={{color: "#fff", marginBottom: "1.5rem"}}>Latest Market News</h2>

        {
          loading ? <p>Loading...</p> : (
            <div className="latest_news_block">
            
            <NewsInfo>
                <div style={{width: "30%", background: "red"}}>
                    <img src="" alt="" />
                </div>
                <div className="news_detail" style={{width: "70%"}}>
                    <p>NewsTitle will go here</p>
                    <p>publish Date</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis molestias laboriosam ab velit totam magnam labore ea aut accusantium repudiandae cumque porro...</p>
                    <button style={{all: "unset", display: "inline-block", width: "100px", padding: "10px 20px", background: "red", textAlign: "center" }}>Read More</button>
                </div>
            </NewsInfo>
            <NewsInfo>
                <div style={{width: "30%", background: "red"}}>
                    <img src="" alt="" />
                </div>
                <div className="news_detail" style={{width: "70%"}}>
                    <p>NewsTitle will go here</p>
                    <p>publish Date</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis omnis molestias laboriosam ab velit totam magnam labore ea aut accusantium repudiandae cumque porro...</p>
                    <button style={{all: "unset", display: "inline-block", width: "100px", padding: "10px 20px", background: "red", textAlign: "center" }}>Read More</button>
                </div>
            </NewsInfo>
        </div>
          )
        }
        
    </div>
  )
}

export default News