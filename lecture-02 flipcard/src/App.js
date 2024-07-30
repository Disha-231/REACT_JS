
import './Style.css'

function App() {

  const todo = [
    {
      id: 1,
      cate: "Filters",
      icon :"./right-arrow.png"
    },
    {
      id: 2,
      cate: "CATEGORIES",
      icon :"./right-arrow.png"
    },
    {
      id: 3,
      cate: "Home Decor",
      icon :"./right-arrow.png"
    },
    {
      id: 4,
      cate: "Showpieces",
      icon :"./right-arrow.png"
    },
    {
      id: 5,
      cate: "Figurines",
      icon :"./right-arrow.png"
    },
    {
      id: 6,
      cate: "PRICE",
      icon :"./right-arrow.png"
    },
    {
      id: 7,
      cate: "AVAILABILITY",
      icon :"./right-arrow.png"
    },
  ];

  const popular = [
    {
      id: 1,
      title: "Lord Hanuman ji",
      logo : "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      price: "1,099",
      rate: 4.4,
      ricon : "./star.png",
      delivery:"Free delivery",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/z/n/z/19-10-1-tr-24hanumanlarge-s002-tied-ribbons-19-original-imagxebu8hqtgbww.jpeg?q=70"
    },
    {
      id: 2,
      title: " Buddha Statue",
      logo : "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      price: 249,
      rate: 3.4,
      ricon : "./star.png",
      image: "https://rukminim2.flixcart.com/image/612/612/krtjgcw0/showpiece-figurine/q/8/d/sg-royalbox-original-imag5gy2rxubzkgq.jpeg?q=70",
      delivery:"Free delivery",
    },
    {
      id: 3,
      title: "shree Ram Lalla",
      logo : "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      price: 249,
      rate: 4.2,
      ricon : "./star.png",
      delivery:"Free delivery",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/y/v/3/3-38-ram-10x15-saf-25-original-imagxp9rhfre9uan.jpeg?q=70"
    },
    {
      id: 4,
      title: "Chhariya Crafts",
      logo : "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png",
      price: 172,
      rate: 3.4,
      ricon : "./star.png",
      delivery:"Free delivery",
      image: "https://rukminim2.flixcart.com/image/612/612/l5cslu80/showpiece-figurine/p/z/k/1-19-kiranganesh-chhariya-crafts-23-original-imaggfh6hzdvx62f.jpeg?q=70"
    },
  ];


  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <a href="#"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" className="img-flueid"></img></a>
        </div>
        <div className="manu">
          <ul>
            <li>
              <a href="#">Grocery</a>
            </li>
            <li>
              <a href="#">Mobles</a>
            </li>
            <li>
              <a href="#">fashion</a>
            </li>
            <li>
              <a href="#">Elecronics</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" section d-flex">
        <div className="col-2 todo">
          <h4 className="ps-3 m-0">Filters</h4>
          <h6 className="ps-3 m-0">Catagoris</h6>
          <ul>
            {
              todo.map((todo) => {
                return (
                  <li>
                    <a href="#">
                      <img src={todo.icon}></img>{todo.cate}</a>
                  </li>
                )
              })
            }

          </ul>
        </div>

        <div className="col-10 ">
         <div className="popular">
         <h2 className="ps-3">Popular</h2>
         <div className="col-12 d-flex flex-wrap">
         
          {
            popular.map((pop)=>{
              return (
                <div className="col-3 p-2 ">
                <div className=" card">
                  <img src={pop.image} className="img-fluid"></img>
                  <div className="content">
                    <h4>{pop.title}</h4>
                    <img src={pop.logo}></img>
                    <p>₹{pop.price }</p>
                    <span>{pop.rate}
                    <img src={pop.ricon}></img>
                    </span>
                    <p className="fs-6">{pop.delivery}</p>
                  </div>
                </div>
              </div>
              )
            })
          }

           
            
          </div>
         </div>
         


        </div>
      </div>

    </div>

  );
}

export default App;

























