import { useState, useEffect } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Schools = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://duhocinec.com/wp-json/wp/v2/school?_embed&order=desc&orderby=date&per_page=10&page=3"
        // "https://duhocinec.com/wp-json/wp/v2/school/56550"
      );
      const result = await res.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const decodeHtml = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <section className="category-wrapper">
      <div className="container">
        {/* <BreadcrumbCustom breadcrumb={data} /> */}
        <div className="category-container">
          {data?.map((item) => {
            return (
              <Link key={item.id} to={``} className="category">
                <img
                  src={
                    item._embedded["wp:featuredmedia"]
                      ? item._embedded["wp:featuredmedia"]?.[0].source_url
                      : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                  }
                  alt={item.title.rendered}
                />
                <h2>{decodeHtml(item.title.rendered)}</h2>
                {/* <p>{category.description}</p> */}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schools;
