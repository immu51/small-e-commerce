import React, { useState } from "react";
import { Link } from "react-router-dom";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbye-wYy04nUAb4njOF8n8QarJEKx9rSO98iNrk3KoaPpzuC1JQroRKkWW8M0bcVD_Ju/exec";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [otpSent, setOtpSent] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const sendOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtpSent(otp);
    console.log("Simulated OTP:", otp); 
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      sendOTP();
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending to Google Sheets:", error);
      alert("There was a problem submitting your email.");
    }

    setLoading(false);
  };


  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otpInput === otpSent) {
      setOtpVerified(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Enter your email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        ) : !otpVerified ? (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <p className="text-gray-700">
              OTP sent to <span className="font-semibold">{email}</span>
            </p>
            <input
              type="text"
              maxLength={6}
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              placeholder="Enter OTP"
              className="w-full border px-3 py-2 rounded outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Verify OTP
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 mb-4 font-semibold">
              OTP Verified Successfully!
            </p>
            <Link
              to="/login"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Return to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
