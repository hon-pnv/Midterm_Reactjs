import axios from "axios";
import React, { useEffect, useState } from "react";
import ItermLeft from "./ItemMiddle";

const Left = () => {
  const [listProduct, setListProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log("re-render");
  //   console.log(listProduct);
  useEffect(() => {
    const getData = () => {
      axios
        .get("https://61bc10c0d8542f001782452f.mockapi.io/MidCRUD")
        .then((res) => {
          setListProduct(res.data);
          setIsLoaded(true);
        });
    };
    // console.info(Math.random())
    if (!isLoaded) getData();
  }, [isLoaded]);
  const Last = () => {
    const result = listProduct.filter(
      (product) => product.type === "Tin tức mới"
    );
    
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].img} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  const Last2 = () => {
    console.log("list products", listProduct);
    const result = listProduct.filter(
      (product) => product.type === "Tin trong tháng"
    );
    return (
      <div className="card mt-5" style={{ width: "100%" }}>
        <img src={result[result.length - 1].img} className="card-img-top" alt="img" />
        <div className="card-body">
          <p className="card-text">
		        {result[result.length - 1].title}
          </p>
        </div>
      </div>
    );
  };
  
  if (isLoaded)
    return (
      <div className="col-lg-10 col-sm-10 col-md-10">
        <div className="row">
        <div className="col col-lg-6 col-sm-6 col-md-6"><h2>Tin tức mới</h2></div>
        <div className="row">
        <div className="col col-lg-5 col-sm-5 col-md-5"></div>
        <div className="col col-lg-7 col-sm-7 col-md-7">Quân sự/Góc nhìn/Kinh Tế/Chuyện Lạ/Thể Thao/Giải Trí/Hoạt Động/Chính Trị</div></div>
          <div className="col col-lg-6 col-sm-6 col-md-6"> <Last/> </div>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            {listProduct
              .filter((product) => product.type === "Tin tức mới")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.img}
                    nameItem={product.content}
                    key={product.id}
                  />
                );
            })}
          </div>
        </div>
        <br />
        <div className="row">
        <div className="col col-lg-6 col-sm-6 col-md-6"><h2>Tin trong tháng</h2></div>
        <div className="row">
        <div className="col col-lg-5 col-sm-5 col-md-5"></div>
        <div className="col col-lg-7 col-sm-7 col-md-7">Chính Sách Phát Triển / Ngân Hàng / Chứng Khoán / Tiêu Dùng / Doanh Nghiệp / Doanh Nhân </div></div>
        <div className="col col-lg-6 col-sm-6 col-md-6">
            <Last2/>
          </div>
          <div className="col col-lg-6 col-sm-6 col-md-6">
            {listProduct
              .filter((product) => product.type === "Tin trong tháng")
              .map((product) => {
                console.log(product.id);
                return (
                  <ItermLeft
                    image={product.img}
                    nameItem={product.title}
                    key={product.id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  else {
    return <div>Loading...</div>;
  }
};
export default Left;
