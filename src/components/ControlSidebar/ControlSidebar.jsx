import React from 'react';
import { Button, Select } from 'antd';

import s from './ControlSidebar.module.css';
import { BrandList } from '../BrandList/BrandList';
import { ServicesList } from '../ServicesList/ServicesList';

export default function ControlSidebar() {
  const handleChange = () => {};

  return (
    <div className={s.root}>
      <div className={s.filters}>
        <BrandList />
        <br />
        <ServicesList />
        <br />
        <Button type="primary">Get configs</Button>

      </div>
      
      <hr />

      <div className={s.function}>
        <h3>Choose function</h3>
        <br />
        <Select
          className={s.select}
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </div>
    </div>
  )
}

