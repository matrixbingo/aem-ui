import React, { ReactNode } from 'react';
import { Button, ButtonProps, Rate, RateProps, TabPaneProps, Tabs, TabsProps, TagProps } from 'antd';
import { ObjectType } from 'common-toolkits';
import TagSingle from '../components/tags/tag-single';
import ButtonConfirm, { ButtonConfirmProps } from '../components/confirm/button-confirm';

export interface CreateButtonsProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  children: string | ReactNode;
  onClick: (v: any, ev: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * 按钮数组
 * @returns Button[]
 */
export const createBaseButtons = (buttons: CreateButtonsProps[]): ReactNode[] => {
  return buttons.map((prop) => {
    const { children, onClick, ...rest } = prop;
    return (
      <Button key={String(children)} onClick={(ev) => onClick(prop, ev)} {...rest}>
        {children as any}
      </Button>
    );
  });
};

/**
 * 确认按钮数组
 * @returns ButtonConfirmProps[]
 */
export const createButtonConfirms = (buttons: ButtonConfirmProps[]): ReactNode[] => {
  return buttons.map((prop, index) => {
    return (<ButtonConfirm {...prop} key={String(index)} />);
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
      {tabList.map((_tab) => (_tab.children ? (<Tabs.TabPane key={String(_tab.tabPaneProps.tab)} {..._tab.tabPaneProps}>{_tab.children as any}</Tabs.TabPane>) : (<Tabs.TabPane key={String(_tab.tabPaneProps.tab)} {..._tab.tabPaneProps} />)))}
    </Tabs>
  );
};

export type CreateStartProps = Omit<RateProps, 'count'>;

export const createStart = (start: CreateStartProps) => {
  return <Rate count={1} {...start} />;
};

export interface CreateBaseTagProps extends Omit<TagProps, 'id' | 'onClose' | 'children'> {
  id: string | number;
  children: string | ReactNode | undefined;
}

export interface CreateBaseTagsProps {
  tagList: CreateBaseTagProps[];
  onClose?: (e) => void;
}

/**
 * @param CreateBaseTagsProps
 * @returns Tags
 */
export const createBaseTags = (tags: CreateBaseTagsProps) => {
  const { tagList, ...resp } = tags;
  return (
    <>
      {
        tagList.map((tag) => {
          const { children, ...rest } = tag;
          return children ? (<TagSingle key={String(rest.id)} {...resp} {...rest}>{children}</TagSingle>) : (<TagSingle key={String(rest.id)} {...resp} {...rest} />);
        })
      }
    </>
  );
};
