import React from 'react';

const QuestionHolder = ({ value, selected }) => {
  return <div className={'text-center ' + (selected && 'isOpen')}>{value}</div>;
};

export default QuestionHolder;
