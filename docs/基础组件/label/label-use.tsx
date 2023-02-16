import React from 'react';
import { Label } from 'aem-ui';
import { Space, Tag } from 'antd';

const Demo: React.FC = () => {

  const title = (<Space size={20}>
    <>level 7</>

    </Space>
  );

  return <>
    <Label title="level 1" level={1} />
    <Label title="level 2" />
    <Label title="level 3" level={3} />
    <Label title="level 4" level={4} />
    <Label title="level 5" level={5} />
    <Label title="level 6" level={6} />
    <Label title={title} />
  </>;
};

export default Demo;
