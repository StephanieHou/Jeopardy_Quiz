import React from 'react';
import CategoryQuestions from './CategoryQuestions';

const fakeCategory = [
  {
    category: 'Category1',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
  {
    category: 'Category2',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
  {
    category: 'Category3',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
  {
    category: 'Category4',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
  {
    category: 'Category5',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
  {
    category: 'Category6',
    questions: [
      { question: 'Question1?' },
      { question: 'Question2?' },
      { question: 'Question3?' },
      { question: 'Question4?' },
      { question: 'Question5?' },
      { question: 'Question6?' },
    ],
  },
];

const Board = () => {
  return (
    <div className="container-xl d-flex justify-content-around">
        {fakeCategory.map(({ category, questions }) => (
          <CategoryQuestions
            key={category}
            category={category}
            questions={questions}
          />
        ))}
    </div>
  );
};

export default Board;
