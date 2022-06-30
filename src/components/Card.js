import { useParams } from "react-router-dom";

function Card() {
  let params = useParams();
  return (
    <h1>{params.cardName}</h1>
  );
}

export default Card;