'use client';
import React, { useState, ChangeEvent } from 'react';

interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className="w-full">
            <input
                type={type}
                name={label}
                placeholder={label}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`w-full p-3 min-w-[150px] rounded-xl text-lg transition-all duration-100 ease-in-out ${
                    isFocused ? 'outline outline-1 outline-blue-400 border-white' : 'outline outline-1 outline-white border'
                }`}
            />
        </div>
    );
};

export default Input;
