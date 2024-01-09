// src/components/Accordion.js
"use client";

import React, { useState } from "react";

const Accordion = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item: any, index: any) => (
        <div key={index} className="mb-4">
          <div
            className="bg-gray-100 p-4 cursor-pointer"
            onClick={() => toggleAccordion(index)}>
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
          {openIndex === index && (
            <div className="bg-white p-4">
              <p className="text-gray-700">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
