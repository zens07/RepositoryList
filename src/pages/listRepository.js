import { Col, message, Row, Space, Table, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { fetchListGetRepos } from "../config/zustand/actions/actionListRepos";
import useStoreListRepos from "../config/zustand/store/useStoreListRepos";
import { TextDesc } from "../utils/antd-custom-components/Text";
import LayoutMainPage from "../utils/Layout/LayoutMainPage";
import { CopyOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ListRepository() {
  const { dispatch, listRepository, loadingRepo } = useStoreListRepos(
    (state) => state
  );
  const [copied, setCopied] = useState({ success: false, value: "", key: "" });
  const handleCopied = (text) => {
    setCopied({
      success: true,
      key: text,
      value: `git clone https://github.com/${text}`,
    });
  };
  const setColumns = [
    {
      title: "Name Repository",
      dataIndex: "name",
      key: "name",
      render: (text) => <TextDesc>{text}</TextDesc>,
    },
    {
      title: <div style={{ textAlign: "center" }}>Action</div>,
      dataIndex: "",
      width: 100,
      key: "action",
      render: (text, record) => (
        <div style={{ textAlign: "center" }}>
          <Space size={"large"}>
            <CopyToClipboard
              text={copied.value}
              onCopy={() => handleCopied(record.full_name)}
            >
              <Tooltip placement="top" title={"copied for clone"}>
                <CopyOutlined />
              </Tooltip>
            </CopyToClipboard>
            <Tooltip placement="top" title={"Go to github repository"}>
              <DoubleRightOutlined
                onClick={() => {
                  window.open(
                    `https://github.com/${record?.full_name}`,
                    "_blank"
                  );
                }}
              />
            </Tooltip>
          </Space>
        </div>
      ),
    },
  ];
  useEffect(() => {
    fetchListGetRepos(dispatch);
  }, []);
  useEffect(() => {
    if (copied.success) {
      message.success("Copied Success");
    }
  }, [copied]);

  return (
    <LayoutMainPage>
      <Row>
        <Col span={24} className="center-content">
          <Table
            dataSource={listRepository}
            columns={setColumns}
            loading={loadingRepo}
            pagination={{ pageSize: 5 }}
            size="small"
          />
        </Col>
      </Row>
    </LayoutMainPage>
  );
}
