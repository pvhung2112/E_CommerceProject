import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
function StartFunction(x : number){
     const stars = [];
    for(let i = 0; i < Math.floor(x);i++){
        stars.push( <FaStar key={i}/>)
       
    }
    const reMaining : number = x - Math.floor(x);
    if(reMaining >= 0.5) {
    stars.push(<FaRegStarHalfStroke key={"half"} />);
    }
    return stars;
}

export default StartFunction;