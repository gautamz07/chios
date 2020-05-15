import React, { Component } from 'react';
import { Tabs, Checkbox } from 'antd';

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
              <ul className='task-list'>
                {currentTasksList.map( elem => (<li><Checkbox onChange={ () => alert() } />{ elem.description }</li>))}
              </ul>
            </TabPane>
          ))}
      </Tabs>
    </div>
  );
}

export default TaskTabs