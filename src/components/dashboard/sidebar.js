"use client";
import React, { useState } from "react";
import { Progress, Space } from "antd";

const sidebar = () => {
  const [percent, setPercent] = useState(0);
  return (
    <div>
      sidebar
      <Space direction="vertical">
        <Progress percent={percent} size={[300, 20]} />
      </Space>
      <button onClick={() => setPercent(percent + 33.33)}>Increase</button>
    </div>
  );
};

export default sidebar;
