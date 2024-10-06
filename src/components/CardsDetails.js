import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/actions";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  //console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    //console.log(e);
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center" style={{ userSelect: "none" }}>
          items Details Page
        </h2>

        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="iteams_img" style={{ userSelect: "none" }}>
                    <img
                      src={ele.imgdata}
                      alt=""
                      style={{
                        height: "18rem",
                        width: "20rem",
                        padding: "1rem",
                        cursor: "pointer",
                        paddingRight: "10px",
                       }}
                    />
                  </div>

                  <div className="details" style={{ userSelect: "none", marginLeft:"20px" }}>
                    <Table >
                      <tr>
                        <td>
                          <p style={{ userSelect: "none" }}>
                            <strong>Name</strong> : {ele.rname}
                          </p>
                          <p style={{ userSelect: "none" }}>
                            <strong>Price</strong> :₹ {ele.price}
                          </p>
                          <p style={{ userSelect: "none" }}>
                            <strong>Brand</strong> : {ele.address}
                          </p>
                          <p style={{ userSelect: "none" }}>
                            <strong>Total</strong> :₹ {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p style={{ userSelect: "none" }}>
                            <strong>Rating:</strong>
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★
                            </span>
                          </p>
                          <p style={{ userSelect: "none" }}>
                            <strong>Description :</strong>
                            <span>{ele.somedata}</span>
                          </p>
                          <p style={{ userSelect: "none" }}>
                            <strong>Remove :</strong>
                            <span>
                              <i
                                className="fas fa-trash"
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                                onClick={() => dlt(ele.id)}
                              ></i>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
