import React, { FC, useRef } from 'react';
import { useBoolean, useUnmount } from 'ahooks';
import { Button, ButtonProps } from 'antd';
import { delay } from 'lodash';

export interface ButtonLoadingProps extends Omit<ButtonProps, 'timeout' | 'onClick'> {
  timeout?: number;
  onClick?: (event: React.MouseEventHandler<HTMLElement> | undefined) => void;
  [K: string]: any;
};

const ButtonLoading: FC<ButtonLoadingProps> = ({ children, timeout, loading, onClick: inputOnClick, ...rest }) => {
  const [_loading, { setTrue, setFalse }] = useBoolean(!!loading);
  const timeoutRef = useRef<number>();

  useUnmount(() => {
    clearTimeout(timeoutRef.current);
  });

  const onClick = (event) => {
    event?.preventDefault();
    setTrue();
    inputOnClick?.(event);
    timeoutRef.current = delay(() => setFalse(), timeout);
  }

  return <Button {...rest} loading={_loading} onClick={onClick} >{children}</Button>;
};

ButtonLoading.defaultProps = {
  timeout: 2000,
};

export default ButtonLoading;
