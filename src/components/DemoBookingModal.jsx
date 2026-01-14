import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Monitor, ArrowRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

const DemoBookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    type: '', // 'online' or 'in-person'
    name: '',
    email: '', // Added email as required
    expectations: ''
  });
  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.type) newErrors.type = "Please select a meeting type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
        setStep(2);
    }
  };

  const handleConfirm = () => {
    if (step === 2 && validateStep2()) {
        // Mock sending email
        console.log("Sending demo request to info@nuvemite.com", formData);
        setStep(3);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setFormData({ date: '', time: '', type: '', name: '', email: '', expectations: '' });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative"
      >
        <button 
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        {/* PROGRESS BAR */}
        <div className="h-1 bg-slate-100 w-full">
            <motion.div 
                className="h-full bg-blue-600" 
                initial={{ width: '33%' }}
                animate={{ width: `${(step / 3) * 100}%` }}
            />
        </div>

        <div className="p-8">
            <AnimatePresence mode="wait">
                
                {/* STEP 1: DATE & TIME */}
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Schedule a Demo</h2>
                        <p className="text-slate-500 mb-6">Choose a date and time that works for you.</p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Date</label>
                                <input 
                                    type="date"
                                    min={new Date().toISOString().split('T')[0]}
                                    value={formData.date}
                                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.date ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`}
                                />
                                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Time (EAT)</label>
                                <input 
                                    type="time"
                                    value={formData.time}
                                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.time ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`}
                                />
                                <p className="text-xs text-slate-400 mt-1">Times are in East Africa Time (EAT)</p>
                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Meeting Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setFormData({...formData, type: 'online'})}
                                        className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                                            formData.type === 'online' 
                                            ? 'border-blue-600 bg-blue-50 text-blue-700' 
                                            : 'border-slate-200 hover:border-blue-300 text-slate-600'
                                        }`}
                                    >
                                        <Monitor className="w-6 h-6" />
                                        <span className="font-semibold text-sm">Online</span>
                                    </button>
                                    <button
                                        onClick={() => setFormData({...formData, type: 'in-person'})}
                                        className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${
                                            formData.type === 'in-person' 
                                            ? 'border-blue-600 bg-blue-50 text-blue-700' 
                                            : 'border-slate-200 hover:border-blue-300 text-slate-600'
                                        }`}
                                    >
                                        <MapPin className="w-6 h-6" />
                                        <span className="font-semibold text-sm">In Person</span>
                                    </button>
                                </div>
                                {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
                            </div>

                            <button 
                                onClick={handleNext}
                                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Next
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: DETAILS */}
                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <button 
                            onClick={() => setStep(1)} 
                            className="text-sm text-slate-500 mb-4 flex items-center hover:text-blue-600"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Back
                        </button>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your Details</h2>
                        <p className="text-slate-500 mb-6">Tell us a bit about yourself.</p>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                                <input 
                                    type="text" 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`}
                                    placeholder="John Doe"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                                <input 
                                    type="email" 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:border-blue-500 outline-none`}
                                    placeholder="john@company.com"
                                />
                                <p className="text-xs text-slate-400 mt-1">We'll send the invite to this email.</p>
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">What do you expect?</label>
                                <textarea 
                                    rows="3"
                                    value={formData.expectations}
                                    onChange={(e) => setFormData({...formData, expectations: e.target.value})}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 outline-none resize-none"
                                    placeholder="I would like a custom ERP for my company..."
                                ></textarea>
                            </div>

                            <button 
                                onClick={handleConfirm}
                                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                            >
                                Confirm Meeting
                                <CheckCircle2 className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: SUCCESS */}
                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8"
                    >
                        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Request Received!</h2>
                        <p className="text-slate-600 mb-8 max-w-xs mx-auto">
                            Our team has been notified. We will reach you at 
                            <span className="block font-bold text-slate-900 mt-1">
                                {formData.time} (EAT) on {formData.date}
                            </span>
                            via email: <span className="font-semibold text-blue-600">{formData.email}</span>
                        </p>
                        <button 
                            onClick={resetAndClose}
                            className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl shadow-md hover:bg-slate-800 transition-all"
                        >
                            Close
                        </button>
                    </motion.div>
                )}

            </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoBookingModal;
