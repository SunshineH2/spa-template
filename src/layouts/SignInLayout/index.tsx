import React from 'react';
import { Layout, message } from 'antd';
import { CopyrightOutlined } from '@ant-design/icons';
import type { IRouteComponentProps } from 'umi';
import { UseRequestProvider } from 'ahooks';
import { THROTTLE_INTERVAL } from '@/constant';

const { Header, Content, Footer } = Layout;

export default function SignInLayout(props: IRouteComponentProps) {
  return (
    <UseRequestProvider
      value={{
        /** 全局请求的默认配置 */
        onError: (error: Error) => {
          console.error(error);
          if (error) {
            try {
              const errorJSON = JSON.parse(error.message);
              message.error(errorJSON.message);
            } catch (err) {
              message.error(err.message);
            }
          }
        },
        throttleInterval: THROTTLE_INTERVAL,
      }}
    >
      <Layout
        style={{
          backgroundImage: `url(${require('../../assets/login_bg.png')})`,
        }}
      >
        <Header style={{ height: 100, paddingLeft: 320, paddingRight: 320 }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <img src={require('../../assets/sign_logo.png')} alt="雷数科技" />
          </div>
        </Header>
        <Content
          style={{
            paddingLeft: 220,
            paddingRight: 250,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ flex: 1 }}>
            <img src={require('../../assets/login_left.png')} alt="" style={{ width: '100%' }} />
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {props.children}
          </div>
        </Content>
        <Footer>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
            }}
          >
            Copyright&nbsp;
            <CopyrightOutlined />
            &nbsp;杭州雷数前端团队出品
          </div>
        </Footer>
      </Layout>
    </UseRequestProvider>
  );
}
