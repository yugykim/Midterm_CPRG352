import { Link, Outlet } from "react-router-dom";
import './style.css';
import s1 from "./img/s1.png";
import s2 from "./img/s2.png";
import s3 from "./img/s3.png";
import s4 from "./img/s4.png";

const cardInfo = [
  {
    image:
      "s1.png",
    name: "Mike",
    gpa: 3.8
  },
  {
    image:
      "s2.png",
    name: "Manal",
    gpa: 3.6
  },
  {
    image:
      "s3.png",
    name: "Moe",
    gpa: 3.2
  },
  {
    image:
      "s4.png",
    name: "Mary",
    gpa: 2.6
  }
];

function Home() {
  return (
    <div className="main">
      <h1>Student list</h1>
      <div className="contentBox">
        {cardInfo.map((card, index) =>
          <div key={index} className="card">
            <img src={require(`./img/${card.image}`)} alt={card.name}/>
            <h2>{card.name}</h2>
            <p>{card.gpa}</p>
            <Link to={`/${card.name}`}>
              <button>Grade</button>
            </Link>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default Home;