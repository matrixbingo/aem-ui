import React from 'react';
import { OmitTipLabel } from 'aem-ui';

const Demo: React.FC = () => {
  const title = "import { OmitTipLabel } from 'aem-ui';,import { OmitTipLabel } from 'aem-ui';"
  const list = ["import { OmitTipLabel } from 'aem-ui';", "import { OmitTipLabel } from 'aem-ui';"]
  return (
    <>
      <OmitTipLabel key="a1" title="import { OmitTipLabel } from 'aem-ui'" limit={30} />
      <br />
      <OmitTipLabel key="a2" title={title} separator="," limit={30} />
      <br />
      <OmitTipLabel key="a3" title={list} limit={30} />
    </>
  );
};

export default Demo;
