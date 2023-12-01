import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['COM', 'CA', 'SCCOM'];
const defaultCheckedList = [];

export function BrandList() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => setCheckedList(list);
  const onCheckAllChange = (e) => setCheckedList(e.target.checked ? plainOptions : []);

  return (
    <div>
      <h3>Brands:</h3>
      <br />
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        All brands
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  )
}