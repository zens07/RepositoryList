import { Col, Row, Table } from "antd";
import React, { useEffect } from "react";
import { fetchListGetRepos } from "../config/zustand/actions/actionListRepos";
import useStoreListRepos from "../config/zustand/store/useStoreListRepos";
import { TextDesc } from "../utils/antd-custom-components/Text";
import LayoutMainPage from "../utils/Layout/LayoutMainPage";

export default function ListRepository() {
  const setColumns = [
    {
      title: "Name Repository",
      dataIndex: "name",
      key: "name",
      render: (text, record, index) => (
        <TextDesc>{record?.name ?? "-"}</TextDesc>
      ),
    },
    { title: "Desc", dataIndex: "desc", key: "desc" },
  ];
  const { dispatch, listRepository, loadingRepo } = useStoreListRepos(
    (state) => state
  );
  useEffect(() => {
    fetchListGetRepos(dispatch);
  }, []);

  return (
    <LayoutMainPage>
      <Row>
        <Col span={24} className="center-content">
          <Table
            dataSource={listRepository}
            columns={setColumns}
            loading={loadingRepo}
            pagination={{ pageSize: 5 }}
          />
        </Col>
      </Row>
    </LayoutMainPage>
  );
}
