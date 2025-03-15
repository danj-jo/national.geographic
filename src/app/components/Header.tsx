'use client'
import {useState} from "react"
import Sidebar from "./Sidebar"
type headerLinks = {
    title: string,
    path: string
}
interface headerProps{
    links: headerLinks[]
}
const Header = ({links}: headerProps) => {
    const [selected, setSelected] = useState(false)
    // i need the props to be an array of objects. 
    return (
    <div className="full-header" 
    style={{display: "flex", alignItems:"center"}}
    >
         
        <div className="left-header"
        style = {{backgroundColor:"white", display: "flex", justifyContent:
            "space-between", padding:"10px 24px 24px 100px", height:"80px", width:"53.83%",
            alignItems:"center", textAlign:"center"
            }} 
        >
            
                <img src = "./nat.png" width="130px" height="45px"/>
             
            <div className="left-links"
            style = {{color: `${selected ? "000000" : "#929292"}`, display:"flex", gap:"40px"}}
            >
                {links.map(link => <a style={{}}href={link.path}>{link.title}</a>)}
            </div>
            N
        </div>
        <div className="right-header"
        style = {{width: "50%", display:"flex", background:'linear-gradient(90deg, rgba(144,170,195,1) 0%, rgba(162,186,210,1) 0%, rgba(241,226,233,1) 100%)', 
                justifyContent: "space-between", height:"80px",
                padding:"10px 100px 10px 24px", alignItems:"center"}}
        >
            <div className = "searchbar" style={{marginLeft:"10px", marginBottom:"10px"
            }}>
                <input type="search" name="search-bar" value="search..."/>
            </div>
            <div style={{marginLeft:"10px", marginBottom:"10px"}}className="profile-picture"> 
                <img src="./globe.svg" width="30px" height="45px" />
            </div>
         </div>
    </div>
    )
}

export default Header;