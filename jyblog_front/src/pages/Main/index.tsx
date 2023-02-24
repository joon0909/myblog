import './Main.scss';
import ProfileImg from '../../asset/me.jpg';
const Main = ()=>{
  return (
    <div className={"MainArea"}>
      <div className={"mainVisualText"}>
        <h3>JY_Blog / README.md</h3>
        <h1><span>#</span> <span className={"purpleText"}>Welcome My Blog.</span></h1>
        <br></br>
        <h1><span>---</span></h1>
        <h2><span>**</span>CREATIVE-DEVELOPER<span>**</span></h2>
        <br></br>
        <h2><span>**</span>PARK JUNYOUNG<span>**</span></h2>
        <br></br>
        <h4>안녕하세요! 사진📷과 요리🍳를 좋아하는 웹 개발자 박준영입니다.</h4>
      </div>
      <div className={"mainVisualImg"}>
        <img src={ProfileImg} style={{
          height: "90%",
          objectFit: "contain"
        }} />
      </div>
    </div>
  );
}
export default Main;
