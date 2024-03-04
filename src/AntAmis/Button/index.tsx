import { Renderer } from 'amis';
import { Ant_Button_Plugin } from 'ant-amis/AntAmis/plugins';
import { Button } from 'antd';
import React from 'react';

const AntButton = (props: any) => {
  const {
    ant: { text, extraAntProps },
  } = props;

  return <Button {...extraAntProps}>{text}</Button>;
};

export default Renderer({
  type: Ant_Button_Plugin,
})(AntButton);
