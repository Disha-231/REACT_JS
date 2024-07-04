import React from "react";
import './style.css'
const Record = ({ category, filterBtn, product }) => {
    return (
        
        <div className="poduct">
            <div className="btngroup">
                <button onClick={() => filterBtn("all")}>All</button>
                {
                    category.map((cat) => {
                        console.log(cat.name);
                        return <button key={cat.id} onClick={() => filterBtn(cat.name)}>{cat.name}</button>
                    })
                }
            </div>
            <div className="mainbox">
                {
                    product.map((p) => {
                        return (
                            <div key={p.id} className="box" >
                                <img src={p.image} height="200px" alt="" />
                                <div className="box-title">
                                    <h4>Name:- &nbsp; {p.name}</h4>
                                    <p>Rs:-  &nbsp; {p.price}</p>
                                    <p>category:- &nbsp;  {p.category}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Record




