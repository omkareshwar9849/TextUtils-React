import React from 'react';

export default function About({ mode }) {
  // Compute style for container and accordion items
  const bkgStyle = () => {
    switch (mode) {
      case 'light':
        return { backgroundColor: 'white', color: 'black' };
      case 'dark':
        return { backgroundColor: '#212529', color: '#F8F9FA' };
      default:
        return { backgroundColor: '#a98eda', color: 'black' };
    }
  };

  const borderStyle = {
    border: mode === 'light' ? '2px solid black' : '2px solid white',
  };

  const accordionItems = [
    {
      id: 'One',
      title: 'Analyze your text',
      body: 'Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or...',
    },
    {
      id: 'Two',
      title: 'Free to use',
      body: 'TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.',
    },
    {
      id: 'Three',
      title: 'Browser Compatible',
      body: 'This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in Facebook, blog, books, Excel documents, PDF documents, essays, etc.',
    },
  ];

  return (
    <div className="container" style={bkgStyle()}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="accordion-item" style={borderStyle}>
            <h2 className="accordion-header" id={`heading${item.id}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                style={bkgStyle()}
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${item.id}`}
                aria-expanded={index === 0}
                aria-controls={`collapse${item.id}`}
              >
                <strong>{item.title}</strong>
              </button>
            </h2>
            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={bkgStyle()}>
                {item.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}