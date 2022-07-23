import React, { Card, Rate} from "antd";
import { Link } from "react-router-dom";
import {books} from "../books.js";

function Results({category, rating, priceMin, priceMax}) {

    const bookCategory = books[category].filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);

    console.log(bookCategory);

    return (
        <>
        {bookCategory.map((a,b) => {
            return (
                <Card>
                    <div style = {{display: "flex"}}>
                        <img src={a.image} alt={b} width='300px'></img>
                        <div>
                            <p className="title">{a.name}</p>
                            <Rate value={a.rating} disabled={true}></Rate>
                            <h2>${a.price}</h2>
                            <p>Ships to Your Location</p>
                            <Link to="/product" state={a} className="login">Go to Product Page</Link>
                        </div>
                    </div>
                </Card>
            );
        })}
        </>
    )
}

export default Results