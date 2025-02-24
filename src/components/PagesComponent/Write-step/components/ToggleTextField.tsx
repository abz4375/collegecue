'use client';
import React, { useState, ChangeEvent, FocusEvent } from 'react';

interface ToggleTextFieldProps {
  title: string;
  label: string;
  initialValue: boolean;
}

const ToggleTextField: React.FC<ToggleTextFieldProps> = ({ title, label, initialValue }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsEnabled(event.target.checked);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      <div className="flex items-center gap-2 mb-4">
        <span>No</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isEnabled}
            onChange={handleSwitchChange}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
        <span>Yes</span>
      </div>
      <input
        value={inputValue}
        onChange={handleInputChange}
        disabled={!isEnabled}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full p-3 min-w-[150px] rounded-xl text-lg transition-all duration-100 ease-in-out border ${
          isFocused ? 'outline outline-1 outline-blue-400 border-white' : 'outline outline-1 outline-gray-300 border-gray-300'
        } ${isEnabled ? '' : 'bg-gray-200 cursor-not-allowed'}`}
      />
    </div>
  );
};

export default ToggleTextField;
