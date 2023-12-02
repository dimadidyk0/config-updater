import React from 'react'
import { Card } from 'antd';
import { useGetConfigs } from '../../hooks/useGetConfigs';
import s from './ConfigList.module.css'

export default function ConfigList() {
  const { data, isLoading } = useGetConfigs();

  console.log(data);

  return (
    <div>{data?.map?.(config => (
      <Card
        title={config.id}
        key={config.id}
        className={s.card}
      >
        <code className={s.code}>
          {JSON.stringify(config.data, null, 4)}
        </code>
      </Card>
    ))}</div>
  )
}
