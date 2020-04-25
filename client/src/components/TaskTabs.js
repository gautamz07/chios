import React, { Component } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TaskTabs = ({ tags, handleClickOfTab, currentTasksList }) => {
  return (
    <div className='Tabs-wrapper'>
      <Tabs 
        defaultActiveKey="1" 
        tabPosition='top' 
        style={{ height: 220 }}
        onTabClick={(key) => handleClickOfTab(key)}  
        >
          {tags.map( ({tag , id}) => (
            <TabPane tab={tag} key={id}>
              <ul>
                {currentTasksList.map( elem => (<li>{ elem.description }</li>))}
              </ul>
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default TaskTabs