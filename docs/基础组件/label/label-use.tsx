import React from 'react';
import { Label } from 'aem-ui';

const Demo: React.FC = () => {
  return <>
    <Label title="level 1" level={1} />
    <Label title="level 2" />
    <Label title="level 3" level={3} />
    <Label title="level 4" level={4} />
    <Label title="level 5" level={5} />
    <Label title="level 6" level={6} />
    <Label title="level 7" level={7} />
  </>;
};

export default Demo;
