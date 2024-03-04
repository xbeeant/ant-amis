import { Renderer } from 'amis';
import { Ant_Float_Button_Plugin } from 'ant-amis/AntAmis/plugins';
import { FloatButton } from 'antd';
import React from 'react';

const AntAffix = (props: any) => {
  const { ant: antProps } = props;

  return <FloatButton {...antProps} />;
};

export default Renderer({
  type: Ant_Float_Button_Plugin,
})(AntAffix);
