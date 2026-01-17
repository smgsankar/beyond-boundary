import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
}

export default function Input({ label, icon, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-white text-sm font-medium">{label}</label>}
      <div className="relative flex items-center">
        {icon && (
            <span className="material-symbols-outlined absolute left-4 text-[#92c9a4] text-[20px]">{icon}</span>
        )}
        <input
          className={`flex w-full rounded-lg border border-[#326744] bg-[#112217] text-white placeholder:text-[#92c9a4] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none h-12 ${icon ? 'pl-11' : 'px-4'} pr-4 text-base font-normal leading-normal transition-colors ${className}`}
          {...props}
        />
      </div>
    </div>
  );
}
