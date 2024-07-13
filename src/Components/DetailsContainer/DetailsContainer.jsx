
import "./DetailsContainer.css"
import Carticon from "../../assets/icon-cart.svg"


function DetailsContainer() {
    return (
        <div id="DetailsDiv">
            <label id="title">PERFUME</label>
            <h1 id="header">Gabrielle Essence Eau De Parfum</h1>
            <p id="Desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere debitis eum quas quibusdam accusantium eveniet adipisci obcaecati soluta consequatur!</p>
            <div id="PriceDiv">
                <label id="PriceLabel">$149.99</label>
                <label id="PriceDisc"><s>$169.99</s></label>
            </div>
            <button id="Cartbtn">
                <img src={Carticon}></img>
                <span>Add To Cart</span></button>
        </div>

    )
}
export default DetailsContainer