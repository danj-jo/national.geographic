
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Image from 'next/image';
export default function Home() {
  return (
   <>
    <Header links={[{title: "Home", path:"./"}, {title:"NewsLetters", path:
    "./"
    }]} />
      <div style={{display:"flex"}}>
      <Sidebar icons={[{title:"linkedin"},{title:"twitter"},{title:"facebook"},{title:"instagram"},{title:"youtube"},]} />
        <div className="left-screen" 
        style={{color: "#656565",backgroundColor:"#FFFFFF", width:"50%",padding:"10px 24px 24px 100px", 
        alignContent:"center"}}>
          
      <div className ="text-and-button" style={{display:"flex", 
        flexDirection:"column", justifyContent:"space-between", height:"500px"}}>
          <div>
        <h1 style={{fontFamily:"Inter-semiBold", fontSize:"22px", color:"#B4B4B4"}}> Animals </h1>
        <h3 style={{marginTop:"10px",color:"#000000", fontSize:"48px", fontFamily:"Baskerville"}}> The status of the Leapord of India </h3>
        <p style={{fontFamily:"Inter", lineHeight:"30px", fontSize:"16px", marginTop:"20px", width:"600px"}}> Although small in size, the leopard, estimated at around 13,000 in India, is a skilled and versatile hunter. But the fact is that there are six leopard deaths for every tiger death in the country. This situation can change only if there is a specific leopard conservation policy that will realise the country’s potential to host an even larger population of this often ignored cat.
        </p>
        </div>
        <div>
        <button style={{backgroundColor:"#FFB800", borderRadius:"4px", width:"167px", height:"56px", marginRight:"30px"}}> Read More </button>
        <button> View Newsletter </button>
        </div>
        </div>
        
       </div>
      <div className="right-screen"
      style={{
        background:'linear-gradient(90deg,rgba(144,170,195,1) 0%,rgba(162,186,210,1) 0%, rgba(241,226,233,1) 100%)', 
        width: "50%", height:"100vh"
      }}
      >
        <div className="lion-image">
        <Image style={{marginTop:"180px", marginLeft:"80px"}}alt="lion" src="./lion.svg" fill />
        </div>
    </div>
    </div>
    </>
  );
}
