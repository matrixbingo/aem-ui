import React, { ReactNode } from 'react';
import {
  Button,
  ButtonProps,
  Rate,
  RateProps,
  TabPaneProps,
  Tabs,
  TabsProps,
} from 'antd';
import { ObjectType } from 'common-toolkits';

export interface CreateButtonsProps
  extends Omit<ButtonProps, 'children' | 'onClick'> {
  children: string | ReactNode;
  onClick: (v: any, ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * 按钮数组
 * @returns Button[]
 */
export const createBaseButtons = (
  buttons: CreateButtonsProps[],
): ReactNode[] => {
  return buttons.map((prop) => {
    const { children, onClick, ...rest } = prop;
    return (
      <Button onClick={(ev) => onClick(prop, ev)} {...rest}>
        {children}
      </Button>
    );
  });
};

export interface TabSingle extends ObjectType {
  children: string | ReactNode | undefined;
  tabPaneProps: TabPaneProps;
}

export interface CreateBaseTabsProps {
  tabsProps: TabsProps;
  tabList: TabSingle[];
}

/**
 * @param CreateBaseTabsProps
 * @returns Tabs
 */
export const createBaseTabs = (tabs: CreateBaseTabsProps) => {
  const { tabsProps, tabList } = tabs;
  return (
    <Tabs {...tabsProps}>
      {tabList.map((_tab) =>
        _tab.children ? (
          <Tabs.TabPane {..._tab.tabPaneProps}>{_tab.children}</Tabs.TabPane>
        ) : (
          <Tabs.TabPane {..._tab.tabPaneProps} />
        ),
      )}
    </Tabs>
  );
};

export type CreateStartProps = Omit<RateProps, 'count'>;

export const createStart = (start: CreateStartProps) => {
  return <Rate count={1} {...start} />;
};
