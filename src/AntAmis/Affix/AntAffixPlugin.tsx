import { BasePlugin } from 'amis-editor';
import {
  Ant_Affix_Plugin,
  Ant_Affix_Plugin_Name,
} from 'ant-amis/AntAmis/plugins';
import './index';

export class AntAffixPlugin extends BasePlugin {
  // 这里要跟对应的渲染器名字对应上
  // 注册渲染器的时候会要求指定渲染器名字
  rendererName = Ant_Affix_Plugin;

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = Ant_Affix_Plugin_Name;
  description = 'Affix';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['AntDesign'];

  // 图标
  icon = 'fa fa-user';

  // 用来生成预览图的
  previewSchema = {
    type: Ant_Affix_Plugin,
    block: false,
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: Ant_Affix_Plugin,
    ant: {
      block: false,
      text: '按钮',
      size: 'middle',
      type: 'default',
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
              name: 'ant.offsetTop',
              label: 'offsetTop',
              type: 'input-number',
            },
            {
              name: 'ant.offsetBottom',
              label: 'offsetBottom',
              type: 'input-number',
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
