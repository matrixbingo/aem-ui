/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import React, { CSSProperties, FC, useEffect } from 'react';
import { Button, Col, Row, Space } from 'antd';
import { observer } from '@formily/react';
import { Form, FormPathPattern } from '@formily/core';

interface SwitchCardProps {
  form: Form;
  basePath?: FormPathPattern;
  children: React.ReactNode;
  name: [index: number, name: string] | string;
  isShow: boolean;
  disabled: boolean;
}

const style: CSSProperties = {
  position: 'relative',
  // width: 2,
  // backgroundColor: '#40a9ff',
  margin: '8px 24px 32px 12px',
  display: 'flex',
  alignItems: 'center',
  borderLeft: '2px solid #a1a1a1',
  borderRadius: '20px',
};

const btnStyleUp: CSSProperties = {
  width: 22,
  height: 22,
  textAlign: 'center',
  padding: 0,
  fontSize: 12,
  // borderRadius: 5,
};

const styleSpace: CSSProperties = {
  position: 'relative',
  left: '-10px',
};

// const btnStyle: CSSProperties = {
//   width: 20,
//   height: 20,
//   position: 'absolute',
//   left: '-9px',
//   textAlign: 'center',
//   padding: 0,
//   borderRadius: 5,
//   fontSize: 12,
// };

const cardStyle: CSSProperties = {
  display: 'flex',
  width: '100%',
  flexWrap: 'wrap',
  alignContent: 'flexStart',
};

type SwitchValue = 'and' | 'or';

interface SwitchButtonProps {
  form: Form;
  disabled?: boolean;
  defaultValue?: SwitchValue;
  path: string;
  style: CSSProperties;
}

const onChange = (form: Form, path: string, value: SwitchValue) => {
  form.setValuesIn(path, value);
};

const SwitchButton = ({ form, style, path, disabled = false, defaultValue = 'and' }: SwitchButtonProps) => {
  const value = form.getValuesIn(path);
  const onClick = (v) => {
    onChange(form, path, v);
  };

  useEffect(() => {
    onChange(form, path, defaultValue);
  }, []);
  return (
    <Space>
      <Space.Compact direction="vertical" style={styleSpace as any}>
        <Button disabled={disabled} onClick={() => onClick('and')} type={value === 'and'?  "primary" : undefined} style={btnStyleUp as any}>且</Button>
        <Button disabled={disabled} onClick={() => onClick('or')} type={value === 'or'?  "primary" : undefined}style={btnStyleUp as any}>或</Button>
      </Space.Compact>
    </Space>
  );
};

export const SwitchCard: FC<SwitchCardProps> = observer((props) => {
  const { children, form, basePath, name, isShow = true, disabled } = props;
  return (
    <Row className="SwitchCard">
      <Col style={{ ...cardStyle, width: 40 } as any}>
        <div style={{ ...style, margin: '10px 24px 34px 12px', display: isShow ? 'flex' : 'none' }}>
          <SwitchButton form={form} path={`${basePath}.${name}`} disabled={disabled} style={btnStyleUp} />
        </div>
      </Col>
      <Col style={{ width: 'calc(100% - 40px)' }}>{children}</Col>
    </Row>
  );
});
