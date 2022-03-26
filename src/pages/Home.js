import React from "react";
import { RowFull } from "../utils/antd-custom-components/Row";
import { Button, Col, Row, Image, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { TextDesc, TextTitle } from "../utils/antd-custom-components/Text";
import LayoutMainPage from "../utils/Layout/LayoutMainPage";
import { fetchListGetRepos } from "../config/zustand/actions/actionListRepos";
import useStoreListRepos from "../config/zustand/store/useStoreListRepos";

export default function Home() {
  return (
    <LayoutMainPage>
      <RowFull justify="center">
        <Col span={24} className="center-content">
          <Image
            src="/images/photo-profile.jpeg"
            width={300}
            className="image-rounded"
            alt="Image Profile"
          />
        </Col>
        <Col style={{ textAlign: "center" }}>
          <TextTitle>Muhammad Nur Zaeni</TextTitle>
          <TextDesc>
            I am a person who likes challenges, diligent, disciplined, and
            capable analyze the problem quickly so that I am interested in the
            world because full programming challenges and analysis. My goal
            going forward is to increase the skills that are already owned and
            add skills in the world of programming
          </TextDesc>
          <Button
            type="primary"
            size="large"
            icon={<DownloadOutlined />}
            // onClick={() => fetchListGetRepos(dispatch)}
          >
            Cv Download
          </Button>
        </Col>
      </RowFull>
    </LayoutMainPage>
  );
}
