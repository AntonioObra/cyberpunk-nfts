import React from "react";

const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
  isInput,
  isToggle,
}) => {
  return (
    <label className="flex flex-1 flex-col w-full">
      {labelName && (
        <span className="font-epilouge font-medium text-[14px] leading-[22px] text-gray-200 mb-[10px]">
          {labelName}
        </span>
      )}
      {isTextArea && (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] shadow-2xl shadow-violet-600/10  border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px] focus:border-violet-600 focus:shadow-violet-600/30"
        />
      )}{" "}
      {isInput && (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          min="0"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] shadow-2xl shadow-violet-600/10 bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px] focus:border-violet-600 focus:shadow-violet-600/30"
        />
      )}
      {isToggle && (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value={value}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div className="w-16 h-8 bg-rose-600 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[0px] after:left-[0px] after:bg-white  after:border after:rounded-full after:h-8 after:w-8 after:transition-all shadow-xl shadow-rose-600/30 peer-checked:bg-emerald-600 peer-checked:shadow-emerald-600/30"></div>
        </label>
      )}
    </label>
  );
};

export default FormField;
