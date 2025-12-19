import React from 'react';
import PropTypes from 'prop-types';

const HelpPage = ({ mode }) => {
  const textColor = mode === 'light' ? 'text-dark' : 'text-light';

  return (
    <div className={`container my-4 ${textColor}`}>
      <h1 className="mb-4">Help Center</h1>

      <section className="mb-4">
        <h2>Getting Started</h2>
        <p>Welcome to TextUtils! This application helps you manipulate and analyze text. Here's how to get started:</p>
        <ol>
          <li>Enter or paste your text in the main text area on the home page.</li>
          <li>Use the buttons below the text area to perform various operations on your text.</li>
          <li>View the results and text statistics in real-time.</li>
        </ol>
      </section>

      <section className="mb-4">
        <h2>How to Use the Application</h2>
        <ul>
          <li><strong>Convert to Uppercase:</strong> Transforms all text to uppercase letters.</li>
          <li><strong>Convert to Lowercase:</strong> Transforms all text to lowercase letters.</li>
          <li><strong>Clear Text:</strong> Removes all text from the text area.</li>
          <li><strong>Copy Text:</strong> Copies the current text to your clipboard.</li>
          <li><strong>Remove Extra Spaces:</strong> Eliminates unnecessary spaces between words.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>Frequently Asked Questions</h2>
        <dl>
          <dt>Q: Is my text saved anywhere?</dt>
          <dd>A: No, TextUtils does not store any of your text. All operations are performed locally in your browser.</dd>

          <dt>Q: Can I use TextUtils offline?</dt>
          <dd>A: TextUtils requires an internet connection to load initially, but once loaded, most features will work offline.</dd>

          <dt>Q: How do I change the application's theme?</dt>
          <dd>A: Use the mode toggle switch in the navigation bar to switch between Light and Dark modes.</dd>
        </dl>
      </section>

      <section className="mb-4">
        <h2>Contact / Support Information</h2>
        <p>If you need further assistance or want to report an issue, please contact our support team:</p>
        <ul>
          <li>Email: support@textutils.com</li>
          <li>Twitter: @TextUtilsSupport</li>
          <li>GitHub: <a href="https://github.com/yourusername/TextUtils-React" target="_blank" rel="noopener noreferrer">TextUtils-React Repository</a></li>
        </ul>
      </section>
    </div>
  );
};

HelpPage.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default HelpPage;