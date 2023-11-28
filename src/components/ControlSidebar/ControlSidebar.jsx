import React from 'react';
import { Button } from 'antd';

import s from './ControlSidebar.module.css';
import { BrandList } from '../BrandList/BrandList';
import { ServicesList } from '../ServicesList/ServicesList';

export default function ControlSidebar() {
  return (
    <div className={s.root}>
      <BrandList />
      <br />
      <ServicesList />
      <br />
      <Button type="primary">Get configs</Button>
    </div>
  )
}

