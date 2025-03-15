
import Header from "./components/Header"
export default function Home() {
  return (
   <>
    <Header links={[{title: "Home", path:"./"}, {title:"NewsLetters", path:
    "./"
    }]} />
      <div style={{display:"flex", alignContent:"center"}}>
        <div className="left-screen" 
        style={{backgroundColor:"#FFFFFF", width:"50%"}}>
            Hello
       </div>
      <div className="right-screen"
      style={{
        background:'linear-gradient(90deg,rgba(144,170,195,1) 0%,rgba(162,186,210,1) 0%, rgba(241,226,233,1) 100%)', 
        width: "50%", height:"100vh"
      }}
  
       
      >

    </div>
    </div>
    </>
  );
}
