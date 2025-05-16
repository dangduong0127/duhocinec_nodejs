import { useState, useEffect } from "react";
import "./styles.scss";

const Schools = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://duhocinec.com/wp-json/wp/v2/school?per_page=10"
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    data &&
    data.map((item) => {
      return (
        <>
          <div key={item.id} className="school-item">
            <div className="school-item__image">
              <h1>{item.title.rendered}</h1>
            </div>
          </div>
        </>
      );
    })
  );
};

export default Schools;
