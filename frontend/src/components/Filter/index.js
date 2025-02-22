import React from "react";
import "./styles.scss";
import { Button } from "antd";
import TitleBradingLine from "../../pages/HomePage/Title&BrandingLine";
const Filter = () => {
  return (
    <section className="section-filter">
      <div className="filter-wrapper">
        <div className="filter-row container">
          <TitleBradingLine title="Bạn muốn học gì?" />

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
