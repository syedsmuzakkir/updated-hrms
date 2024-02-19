"use client";
import React from "react";
import { Breadcrumb, Tabs } from "antd";
import Documents from "@/components/employees/addemp/documents/Documents";
import Equipment from "@/components/employees/addemp/equipment/page";
import Personal from "@/components/employees/addemp/persdetails/page";
import Professional from "@/components/employees/addemp/profdetails/page";
import Review from "@/components/employees/addemp/review/page";

const page = () => {
  const items = [
    {
      key: "1",
      label: "Personal Informatiion",
      children: <Personal />,
    },
    {
      key: "2",
      label: "Professional Information",
      children: <Professional />,
    },
    {
      key: "3",
      label: "Equipment Details",
      children: <Equipment />,
    },
    {
      key: "4",
      label: "Document",
      children: <Documents />,
    },
    {
      key: "5",
      label: "Review",
      children: <Review />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <Breadcrumb
        className="pt-5 pl-3"
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
      <h1 className="pl-3 pt-3 text-2xl font-semibold">Add New Employee</h1>
      <Tabs
        defaultActiveKey="1"
        className="pl-3 pt-2"
        items={items}
        onChange={onChange}
      />
    </>
  );
};

export default page;
