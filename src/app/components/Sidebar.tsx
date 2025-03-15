type sidebarIcons = {
    title: string
}
interface sidebarProps{
    icons: sidebarIcons[]
}
const Sidebar = ({icons}: sidebarProps) => {
return (
    <div className="sidebar" 
    style = {{display: "flex", flexDirection:"column", backgroundColor:"#000000", 
            alignItems:"center",width:"60px", borderRadius:"10px"}}>
            <ul style={{display:"flex", flexDirection:"column", marginTop:"680px"}}>
        {icons.map(icon => <li style={{margin:"5px"}}><a href="./"> <img src = {`${icon.title}.png`} /> </a></li>)}
        </ul>
       
    </div>
)
}

export default Sidebar