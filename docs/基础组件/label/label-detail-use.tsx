import React from 'react';
import { LabelDetail } from 'aem-ui';
import { Space, Tag } from 'antd';

const Demo: React.FC = () => {

  const title = (<Space size={20}>
    <>level 7</>

    </Space>
  );

  return <>
    <LabelDetail title="level 1" level={1} detail="level 1" />
    <br/>
    <LabelDetail title="level 2" detail="level 2"/>
    <br/>
    <LabelDetail title="level 3" level={3} detail="level 3" type="success"/>
    <br/>
    <LabelDetail title="level 4" level={4} detail="level 4" type="warning"/>
    <br/>
    <LabelDetail title="level 5" level={5} detail="level 5" type="error"/>
    <br/>
    <LabelDetail title="level 6" level={6} detail="level 6" />
    <br/>
    <LabelDetail title={title} />
  </>;
};

export default Demo;
