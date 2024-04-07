"use client"
import React, { useState } from 'react';
import { User } from "@nextui-org/react";

import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Divider } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),
  getItem('Option 4', '4', <ContainerOutlined />),
  getItem('Option 5', '5', <ContainerOutlined />),
];

export default function NavbarHome() {
  return (
    <div className="bg-[#001529] w-64 h-screen place-content-between" >
      <div className=''>
        <div>
          <User className='m-5 text-white'
            name="Jane Doe"
            description="Product Designer"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
            }}
          />
        </div>
        <Divider className="mb-8" />
        <div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            items={items}
            className='mb-5'
          />
        </div>
        <Divider className=" mb-8" />

        <div className="flex gap-5 justify-center items-center">
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </div>
      </div>
    </div >
  );
};