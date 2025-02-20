import React from "react";
import "./styles.scss";
import { Button } from "antd";
const Filter = () => {
  return (
    <section className="section-filter">
      <div className="filter-wrapper">
        <div className="filter-row container">
          <div className="filter-header">
            <div className="filter-header-inner">
              <h2>Bạn muốn học gì?</h2>
            </div>
            <div className="branding-line">
              <div className="branding-line-child"></div>
              <div className="branding-line-item"></div>
              <div className="branding-line-inner"></div>
              <div className="rectangle-div"></div>
            </div>
          </div>

          <div className="filter-main">
            <form>
              <ul>
                <li>
                  <h4>Ngành</h4>
                  <select name="faculties">
                    <option value="all">Tất cả</option>
                  </select>
                </li>

                <li>
                  <h4>Bậc học</h4>
                  <select name="levels">
                    <option value="all">Tất cả</option>
                  </select>
                </li>

                <li>
                  <h4>Quốc gia</h4>
                  <select name="countries">
                    <option value="all">Tất cả</option>
                  </select>
                </li>

                <li>
                  <h4>Trường học</h4>
                  <select name="schools">
                    <option value="all">Tất cả</option>
                  </select>
                </li>
                <li>
                  <Button className="btn-blue-border" type="submit">
                    Tìm kiếm
                  </Button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
