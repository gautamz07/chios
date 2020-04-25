import React, { Component } from 'react';
import { Button, Input, Tag } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

const { CheckableTag } = Tag;


const generateColorClass = () => {
  const colorClasses = [ 'magenta', 'red' , 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple' ]
  return colorClasses[Math.floor(Math.random() * colorClasses.length)]
}

const AddTask = ({ 
    handleSubmit, 
    tags, 
    handleInput,
    handleTag,
    selectedTags,
  }) => (
  <form className='Task-creator'>
    <div className='form-wrapper'>
      <Input 
        placeholder="small size"  
        prefix={<BulbOutlined />}
        onChange={ e => handleInput(e) } 
      />
      <Button 
        type="primary"
        onClick={ handleSubmit }
        >Button</Button>

      {
        tags.map(tag => {
          return <CheckableTag 
            key={tag.tag}
            checked={selectedTags.includes(tag.tag)} 
            onChange={ checked => handleTag(tag.tag , checked) }
            color={generateColorClass()}
          >{tag.tag}</CheckableTag>
        })
      }
    </div>
  </form>
)

export default AddTask;
