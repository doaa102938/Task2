import "./ImageContainer.css"
import PerfumImg from "../../assets/Perfum.jpg"

function ImageContainer() {
    return (
        <div id="ImageDiv">
            <img src={PerfumImg} id="PerImg"></img>
        </div>
    )
}
export default ImageContainer