import Spinner from "react-spinner-material";

export default function Loader(){
    return (
        <div style={{width:"100%",marginTop:"50px",display:"flex",justifyContent:"center"}}>
        <Spinner radius={50} color={"#bfa147"} stroke={5} visible={true} />
        </div>
    )
}