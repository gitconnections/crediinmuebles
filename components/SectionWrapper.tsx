import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}
