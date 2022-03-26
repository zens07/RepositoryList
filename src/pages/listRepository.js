import { Col, Row, Image } from "antd";
import React from "react";
import styles from "../styles/listRepository.module.css";
import { RowFull } from "../utils/antd-custom-components/Row";
import LayoutMainPage from "../utils/Layout/LayoutMainPage";

export default function ListRepository() {
  return (
    <LayoutMainPage>
      <Row>
        <Col span={24} className="center-content">
          <div>List Repository</div>
        </Col>
      </Row>
    </LayoutMainPage>
  );
}
