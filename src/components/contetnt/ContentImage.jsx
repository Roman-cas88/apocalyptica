import { useLocation } from "react-router-dom";

export const ContentImage = () => {
  const location = useLocation();
  const path = location.pathname;
  const imgStyle = {width: '100%', height:'22vw', maxheight:'350px'}

  return (
    <div className='d-none d-lg-block'>
      {path === "/tickets" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/b8/c2/10/Unbenannt-2.jpg' style={imgStyle}/>}
      {path === "/shirts" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/ac/1c/a0/Unbenannt-4.jpg' style={imgStyle}/>}
      {path === "/girls" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/92/b5/c4/Unbenannt-5.jpg' style={imgStyle}/>}
      {path === "/hoods" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/7d/51/61/Unbenannt-6.jpg' style={imgStyle}/>} 
      {path === "/music" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/ba/09/60/Unbenannt-1.jpg' style={imgStyle}/>} 
      {path === "/stuff" &&  <img src='https://d1lhyycl5p8pom.cloudfront.net/media/image/b8/c2/10/Unbenannt-2.jpg' style={imgStyle}/>}
    </div>
  );
};