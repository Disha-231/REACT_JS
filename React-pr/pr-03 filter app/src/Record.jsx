import React from "react";
import './Style.css'
const Record = ({ category, filterBtn, product }) => {
    return (


        <div className="container">
            <div className="row">

                <div className="product">

                    <h1 align="center" > Apple Store</h1>

                    <div className="btngroup ">
                        <button onClick={() => filterBtn("all")}>All</button>
                        {
                            category.map((cat) => {
                                console.log(cat.name);
                                return <button key={cat.id} onClick={() => filterBtn(cat.name)}>{cat.name}</button>
                            })
                        }
                    </div>
                    <div className="mainbox ">
                        {
                            product.map((p) => {
                                return (
                                    <div key={p.id} className="box" >
                                        <img src={p.image} height="200px" alt="" />
                                        <div className="box-title ">
                                            <h6>Name:- &nbsp; {p.name}</h6>
                                            <p>Price:-  &nbsp; {p.price}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Record



