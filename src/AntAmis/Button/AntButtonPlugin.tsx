import { BasePlugin } from 'amis-editor';
import {
  Ant_Button_Plugin,
  Ant_Button_Plugin_Name,
} from 'ant-amis/AntAmis/plugins';
import './index';

export class AntButtonPlugin extends BasePlugin {
  // 这里要跟对应的渲染器名字对应上
  // 注册渲染器的时候会要求指定渲染器名字
  rendererName = Ant_Button_Plugin;

  // 暂时只支持这个，配置后会开启代码编辑器
  $schema = '/schemas/UnkownSchema.json';

  // 用来配置名称和描述
  name = Ant_Button_Plugin_Name;
  description = 'Button按钮';

  // tag，决定会在哪个 tab 下面显示的
  tags = ['AntDesign'];

  // 图标
  icon = 'fa fa-user';

  // 用来生成预览图的
  previewSchema = {
    type: Ant_Button_Plugin,
    block: false,
  };

  // 拖入组件里面时的初始数据
  scaffold = {
    type: Ant_Button_Plugin,
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
  popOverBody = [
    {
      name: 'ant.text',
      label: 'Text',
      type: 'input-text',
    },
  ];

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
              name: 'ant.text',
              label: 'Text',
              type: 'input-text',
            },
            {
              name: 'ant.href',
              label: '点击跳转的地址',
              type: 'input-text',
            },
            {
              name: 'ant.target',
              label: 'a 链接的 target 属性',
              type: 'input-text',
            },
          ],
        },
        {
          title: '外观',
          body: [
            {
              name: 'ant.block',
              label: '是否块级元素',
              type: 'switch',
            },
            {
              name: 'ant.classNames',
              label: 'class',
              type: 'input-text',
            },
            {
              name: 'ant.danger',
              label: '危险按钮',
              type: 'switch',
            },
            {
              name: 'ant.disabled',
              label: '是否禁用',
              type: 'switch',
            },
            {
              name: 'ant.ghost',
              label: '幽灵按钮',
              type: 'switch',
            },
            {
              name: 'ant.size',
              label: '按钮大小',
              type: 'select',
              options: [
                {
                  label: 'Large',
                  value: 'large',
                },
                {
                  label: 'Middle',
                  value: 'middle',
                },
                {
                  label: 'Small',
                  value: 'small',
                },
              ],
            },
            {
              name: 'ant.shape',
              label: '形状',
              type: 'select',
              options: [
                {
                  label: 'default',
                  value: 'default',
                },
                {
                  label: 'Circle',
                  value: 'circle',
                },
                {
                  label: 'Round',
                  value: 'round',
                },
              ],
            },
            {
              name: 'ant.type',
              label: '按钮类型',
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
                {
                  label: 'Dashed',
                  value: 'dashed',
                },
                {
                  label: 'Link',
                  value: 'link',
                },
                {
                  label: 'Text',
                  value: 'text',
                },
              ],
            },
            {
              name: 'ant.htmlType',
              label: '原生的 type 值',
              type: 'input-text',
            },
          ],
        },
        {
          title: '事件',
          body: [],
        },
      ],
    },
  ];
}
