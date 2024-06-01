import React from 'react';
import '../styles/input.css';
import '../styles/tail.css';

export default function Header({ score }) {
  return (
    <div className='flex items-center justify-between h-max w-[700px] border-[3px] border-neutral-header-outline rounded-lg p-[1.2rem] font-barlow font-bold mt-12 mb-2'>
      <div>
        <h2 className='text-3xl font-bold leading-[25px]'>Rock</h2>
        <h2 className='text-3xl font-bold leading-[25px]'>Paper</h2>
        <h2 className='text-3xl font-bold leading-[25px]'>Scissors</h2>
      </div>
      <div className="bg-white rounded-lg w-[120px] h-[90px] text-center leading-[30px] flex flex-col">
        <p className='text-neutral-score-text font-semibold mt-2'>Score</p>
        <h3 className='text-neutral-dark-text text-[3.2rem]'>{score}</h3>
      </div>
    </div>
  );
}
