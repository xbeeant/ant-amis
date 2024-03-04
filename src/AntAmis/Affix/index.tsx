import { Renderer } from 'amis';
import { Ant_Affix_Plugin } from 'ant-amis/AntAmis/plugins';
import { Affix } from 'antd';
import React from 'react';

const AntAffix = (props: any) => {
  const { ant: antProps, children } = props;

  return <Affix {...antProps}>{children}</Affix>;
};

export default Renderer({
  type: Ant_Affix_Plugin,
})(AntAffix);
