import React from 'react';
import { Button } from 'antd';

import s from './ControlSidebar.module.css';
import { BrandList } from '../BrandList/BrandList';

export default function ControlSidebar() {
  return (
    <div className={s.root}>
      <BrandList />
      <Button type="primary">Get configs</Button>
    </div>
  )
}

