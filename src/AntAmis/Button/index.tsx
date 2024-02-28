import { Renderer } from 'amis';
import { Ant_Button_Plugin } from 'ant-amis/AntAmis/plugins';
import { Button } from 'antd';
import React from 'react';

const AntButton = (props: any) => {
  // @ts-ignore
  const { text, type: amisType, _type, ...extraProps } = props;

  return (
    <Button type={_type} {...extraProps}>
      {text}
    </Button>
  );
};

export default Renderer({
  type: Ant_Button_Plugin,
})(AntButton);
