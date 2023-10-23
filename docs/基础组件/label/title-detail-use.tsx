import React from 'react';
import { TitleDetail } from 'aem-ui';
import { Space, Tag } from 'antd';

const Demo: React.FC = () => {

  const title = (<Space size={20}>
    <>level 7</>

    </Space>
  );

  return <>
    <TitleDetail title="level 1" level={1} detail="level 1" />
    <br/>
    <TitleDetail title="level 2" detail="level 2"/>
    <br/>
    <TitleDetail title="level 3" level={3} detail="level 3" type="success"/>
    <br/>
    <TitleDetail title="level 4" level={4} detail="level 4" type="warning"/>
    <br/>
    <TitleDetail title="level 5" level={5} detail="level 5" type="error"/>
  </>;
};

export default Demo;
