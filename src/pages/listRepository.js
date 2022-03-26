import { Col, Row, Table } from "antd";
import React, { useEffect } from "react";
import { fetchListGetRepos } from "../config/zustand/actions/actionListRepos";
import useStoreListRepos from "../config/zustand/store/useStoreListRepos";
import LayoutMainPage from "../utils/Layout/LayoutMainPage";

export default function ListRepository() {
  const dummyData = [
    { name: "daknkfahj", desc: "nahfakkfa" },
    { name: "daknkfahj", desc: "nahfakkfa" },
    { name: "daknkfahj", desc: "nahfakkfa" },
    { name: "daknkfahj", desc: "nahfakkfa" },
  ];
  const setColumns = [
    { title: "Owner", dataIndex: "login", key: "login", render:()=> },
    { title: "Desc", dataIndex: "desc", key: "desc" },
  ];
  const { dispatch, listRepository } = useStoreListRepos((state) => state);
  useEffect(() => {
    fetchListGetRepos(dispatch);
  }, []);
  useEffect(() => {
    console.log(listRepository);
  }, [listRepository]);

  return (
    <LayoutMainPage>
      <Row>
        <Col span={24} className="center-content">
          <Table dataSource={dummyData} columns={setColumns} />
        </Col>
      </Row>
    </LayoutMainPage>
  );
}
