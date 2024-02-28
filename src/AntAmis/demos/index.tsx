import {
  EditOutlined,
  EyeOutlined,
  LaptopOutlined,
  MobileOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import { setDefaultTheme } from 'amis';
import { Editor, ShortcutKey, registerEditorPlugin } from 'amis-editor';
import 'amis-editor-core/lib/style.css';
import 'amis/lib/helper.css';
import 'amis/lib/themes/antd.css';
import 'amis/lib/themes/default.css';
import 'amis/sdk/iconfont.css';
import { AntButtonPlugin } from 'ant-amis/AntAmis/Button/AntButtonPlugin';
import { Button } from 'antd';
import React, { useState } from 'react';
import config from './config';

setDefaultTheme('antd');

registerEditorPlugin(AntButtonPlugin);

const AmisEditor = ({
  value,
  onChange,
  onSave,
  mode,
}: {
  value?: any;
  onChange?: (value: any) => void;
  onSave: (value: any) => void;
  mode?: boolean;
}) => {
  const [preview, setPreview] = useState<boolean>(mode || false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '510px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          flex: '0 0 48px',
          position: 'relative',
          background: '#fff',
          display: 'flex',
          zIndex: '1000',
          height: '40px',
        }}
      >
        <div
          style={{
            flex: '1 1 565px',
            padding: '0 15px',
            fontSize: '16px',
            fontWeight: '500',
            letterSpacing: '0',
            userSelect: 'none',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          页面编辑器：{preview ? '查看' : '编辑'}模式
        </div>
        <div
          style={{
            flex: '0 1 150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              letterSpacing: 0,
              textAlign: 'center',
              width: '100px',
              height: '32px',
              borderRadius: '4px',
              fontWeight: '400',
              backgroundColor: '#f2f2f4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button.Group>
              <Button
                type={!isMobile ? 'primary' : 'default'}
                onClick={() => {
                  setIsMobile(false);
                }}
              >
                <LaptopOutlined />
              </Button>
              <Button
                type={isMobile ? 'primary' : 'default'}
                onClick={() => {
                  setIsMobile(true);
                }}
              >
                <MobileOutlined />
              </Button>
            </Button.Group>
          </div>
        </div>
        <div
          style={{
            flex: '1 1 565px',
            padding: '0 24px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button
            style={{ marginRight: '10px' }}
            onClick={() => {
              setPreview(!preview);
            }}
          >
            {preview ? <EditOutlined /> : <EyeOutlined />}
          </Button>
          {preview && (
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
              onClick={() => {
                onSave(value);
              }}
              icon={<SaveOutlined />}
            />
          )}
          <ShortcutKey />
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          flex: '1 1 auto',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        <Editor
          theme={'antd'}
          preview={preview}
          value={value}
          onChange={(value: any) => {
            if (onChange) {
              onChange(value);
            }
          }}
          // $schemaUrl={schemaUrl}
          onSave={() => {
            console.log(value);
            if (onChange) {
              onChange(value);
            }
          }}
          style={{
            bottom: 0,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
          isMobile={isMobile}
          showCustomRenderersPanel={true}
          amisEnv={{
            enableAMISDebug: true,
            fetcher: config.fetcher,
            notify: config.notify,
            alert: config.alert,
            copy: config.copy,
          }}
        />
      </div>
    </div>
  );
};

export default AmisEditor;
