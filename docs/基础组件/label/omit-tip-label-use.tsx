import React from 'react';
import { OmitTipLabel } from 'aem-ui';

const Demo: React.FC = () => {
  const title = "import { OmitTipLabel } from 'aem-ui';,import { OmitTipLabel } from 'aem-ui';"
  const list = ["import { OmitTipLabel } from 'aem-ui';", "import { OmitTipLabel } from 'aem-ui';"]
  return (
    <>
      <OmitTipLabel title="import { OmitTipLabel } from 'aem-ui'" limit={30} />
      <br />
      <OmitTipLabel title={title} separator="," limit={30} />
      <br />
      <OmitTipLabel title={list} limit={30} />
    </>
  );
};

export default Demo;
