import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData";
import "./style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/actions";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  //console.log(data);

  const dispatch = useDispatch();

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  };

  return (
    <div className="container mt-2" style={{background:"lightgrey", borderRadius:"5px"}}>
      <h2 className="text-center" style={{ userSelect: "none" }}>
        Add to cart project
      </h2>
      <div className="row d-flex justify-content-center align-items-center ">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body style={{ userSelect: "none" }}>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price: ₹ {element.price}</Card.Text>
                  <div
                    className="button_div d-flex justify-content-center"
                    style={{ userSelect: "none" }}
                  >
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                      style={{backgroundColor:"#669999", border:"solid"}}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
