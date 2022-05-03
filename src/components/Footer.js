import React from 'react';
import '../assets/styles/footer.scss';
import Button from './Button';

export default function Footer() {
  return (
    <div className="footer-section">
      <h5>GOT JOKES? GET PAID FOR SUBMITTING.</h5>
      <Button text="Submit Joke" />
    </div>
  )
}
