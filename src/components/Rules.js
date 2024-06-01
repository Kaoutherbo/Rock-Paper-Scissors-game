import React from 'react';
import RulesImg from "../images/image-rules.svg";
import CloseImg from "../images/icon-close.svg";
import '../styles/input.css';
import '../styles/tail.css';

function Rules({ onClose }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-6 rounded-lg relative'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='text-neutral-dark-text text-2xl font-bold'>RULES</h2>
                    <button onClick={onClose}>
                        <img src={CloseImg} alt='close' className='h-6 w-6'/>
                    </button>
                </div>
                <img src={RulesImg} alt='rules' className='w-full'/>
            </div>
        </div>
    );
}

export default Rules;
