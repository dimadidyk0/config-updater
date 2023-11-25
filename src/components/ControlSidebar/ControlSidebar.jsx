import React, { useState } from 'react';
import { Button, Checkbox, Divider } from 'antd';

import s from './ControlSidebar.module.css';

export default function ControlSidebar() {
  return (
    <div className={s.root}>
      <BrandList />
      <Button type="primary">Get configs</Button>
    </div>
  )
}

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['IE', 'AV'];
const defaultCheckedList = [];

export function BrandList() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => setCheckedList(list);
  const onCheckAllChange = (e) => setCheckedList(e.target.checked ? plainOptions : []);

  return (
    <div className={s.brands}>
      <h2>Brands:</h2>
      <br />
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  )
}