import React, { useState } from 'react';
import { Checkbox, Divider } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['live-casino', 'pm-casino', 'lobby', 'instant-games', 'bingo', 'tvgames', 'virtual-sports'];
const defaultCheckedList = [];

export function ServicesList() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => setCheckedList(list);
  const onCheckAllChange = (e) => setCheckedList(e.target.checked ? plainOptions : []);

  return (
    <div>
      <h3>Services:</h3>
      <br />
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </div>
  )
}