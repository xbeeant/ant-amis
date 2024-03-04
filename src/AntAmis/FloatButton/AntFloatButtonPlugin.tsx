import { BasePlugin } from 'amis-editor';
import {
  Ant_Float_Button_Plugin,
  Ant_Float_Button_Plugin_Name,
} from 'ant-amis/AntAmis/plugins';
import './index';

export class AntFloatButtonPlugin extends BasePlugin {
  // 这里要跟对应的渲染器名字对应上
  // 注册渲染器的时候会要求指定渲染器名字
  rendererName = Ant_Float_Button_Plugin;

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = Ant_Float_Button_Plugin_Name;
  description = 'Affix';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['AntDesign'];

  // 图标
  icon = 'fa fa-user';

  // 用来生成预览图的
  previewSchema = {
    type: Ant_Float_Button_Plugin,
    block: false,
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: Ant_Float_Button_Plugin,
    ant: {
      type: 'default',
      shape: 'circle',
    },
  };

  // 右侧面板相关
  panelTitle = 'Ant Design';

  // 快速配置
  popOverBody = [];

  panelBody = [
    {
      type: 'tabs',
      tabsMode: 'line',
      className: 'm-t-n-xs',
      contentClassName: 'no-border p-l-none p-r-none',
      tabs: [
        {
          title: '常规',
          body: [
            {
              name: 'ant.type',
              label: 'type',
              type: 'select',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Primary',
                  value: 'primary',
                },
              ],
            },
            {
              name: 'ant.shape',
              label: 'shape',
              type: 'select',
              options: [
                {
                  label: 'circle',
                  value: 'circle',
                },
                {
                  label: 'square',
                  value: 'square',
                },
              ],
            },
          ],
        },
        {
          title: '外观',
          body: [],
        },
        {
          title: '事件',
          body: [],
        },
      ],
    },
  ];
}
