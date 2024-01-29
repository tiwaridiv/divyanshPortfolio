import React, { useState } from 'react';

const Otpverf = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [maskedOtp, setMaskedOtp] = useState('');
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    const inputOtp = event.target.value;
    const truncatedOtp = inputOtp.slice(0, 6);
    setOtp(truncatedOtp);
    setMaskedOtp('*'.repeat(truncatedOtp.length));
  };

  const handleSendOtp = (event) => {
    event.preventDefault();
    // Implement your logic to send OTP to the entered email address
    console.log('Sending OTP to:', email);
    setIsEmailSubmitted(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your OTP verification logic here
    console.log('Verifying OTP for email:', email, 'and entered OTP:', otp);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Email</h2>
        {!isEmailSubmitted ? (
          <>
            <p className="mb-6 text-center">Enter your email address to receive an OTP for verification.</p>
            <form onSubmit={handleSendOtp}>
              <div className="flex items-center mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Email"
                />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-bold w-full">Send OTP</button>
            </form>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="mt-6 text-sm text-center">Enter the 6-digit code sent to your email:</p>
            <div className="flex items-center mb-4">
              <input
                type="text"
                value={maskedOtp}
                onChange={handleOtpChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter OTP"
                maxLength="6"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-bold w-full">Verify</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Otpverf;
