import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MainVolunteerForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'volunteer',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a message or motivation statement';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'volunteer',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="volunteer" className="py-[120px] sm:py-[145px] lg:py-[180px] bg-[#F8FAFC] relative overflow-hidden">
      {/* Visual glowing ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-orange-100/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Action Callout & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-[#F57C00] font-mono text-sm uppercase tracking-widest font-bold block">
                Get Involved
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-none">
                Empower the Future. Start Here.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Whether you have an hour a week to mentor online, want to coordinate a book drive, represent us in your corporate organization, or support us with financial resources—your contribution matters.
              </p>
            </div>

            {/* Quick stats check */}
            <div className="p-6 bg-white border border-slate-150 rounded-2xl shadow-sm space-y-4">
              <span className="font-poppins font-bold text-slate-800 text-xs uppercase tracking-wider block border-b border-slate-100 pb-2">
                Why Support DRYCI?
              </span>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-slate-800 text-xs">Direct Community Presence</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Our staff resides locally in communities we support, assuring genuine execution.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0D47A1] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-slate-800 text-xs">Values-Driven Foundation</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Building sustainable agency by fostering moral codes, integrity, and faith.</p>
                </div>
              </div>
            </div>

            {/* Quick Direct contact list */}
            <div className="space-y-4">
              <span className="font-poppins font-bold text-slate-800 text-xs uppercase tracking-wider block">
                Headquarters Contacts
              </span>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <MapPin className="w-4 h-4 text-[#F57C00] shrink-0" />
                  <span>Calabar, Cross River State, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <Mail className="w-4 h-4 text-[#F57C00] shrink-0" />
                  <span>dryci.ngo@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-xs">
                  <Phone className="w-4 h-4 text-[#F57C00] shrink-0" />
                  <span>+234 810 791 1934</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Container with feedback state */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-poppins font-extrabold text-slate-900 text-lg sm:text-xl">
                      Action Engagement Hub
                    </h3>
                    <p className="text-slate-500 text-xs mt-1">
                      Fill out this form to connect with our administrative directors. We respond within 24 hours.
                    </p>
                  </div>

                  {/* Name group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="e.g. Adewale"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none transition-all ${
                          errors.firstName ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#0D47A1]'
                        }`}
                        id="volunteer-first-name"
                      />
                      {errors.firstName && <p className="text-[10px] text-red-500 font-medium">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="e.g. Adeleke"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none transition-all ${
                          errors.lastName ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#0D47A1]'
                        }`}
                        id="volunteer-last-name"
                      />
                      {errors.lastName && <p className="text-[10px] text-red-500 font-medium">{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. adewale@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none transition-all ${
                          errors.email ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#0D47A1]'
                        }`}
                        id="volunteer-email"
                      />
                      {errors.email && <p className="text-[10px] text-red-500 font-medium">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +234 803 000 0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0D47A1] transition-all"
                        id="volunteer-phone"
                      />
                    </div>
                  </div>

                  {/* Select Role option */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Choose How You Want to Engage
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0D47A1] transition-all"
                      id="volunteer-role-select"
                    >
                      <option value="volunteer">Become an Active Volunteer (Mentorship / Logistics)</option>
                      <option value="corporate">Partner with DRYCI (Corporate Social Responsibility)</option>
                      <option value="donor">Sponsorship / Financial Supporter</option>
                      <option value="general">General Enquiry / Media request</option>
                    </select>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Message & Motivation
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please tell us about yourself, your background, or what you hope to accomplish by partnering with us..."
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 text-xs focus:bg-white focus:outline-none transition-all resize-none ${
                        errors.message ? 'border-red-500 focus:ring-1 focus:ring-red-400' : 'border-slate-200 focus:ring-1 focus:ring-[#0D47A1]'
                      }`}
                      id="volunteer-message-text"
                    />
                    {errors.message && <p className="text-[10px] text-red-500 font-medium">{errors.message}</p>}
                  </div>

                  {/* Action button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#0D47A1] hover:bg-[#0A3780] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    id="submit-volunteer-btn"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Verifying details...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#F57C00]" />
                        <span>Submit Partnership Request</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Feedback screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shadow-md animate-bounce">
                    <CheckCircle className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Success • Registered Securely
                    </span>
                    <h3 className="font-poppins font-extrabold text-slate-900 text-xl sm:text-2xl">
                      Thank You, {formData.firstName}!
                    </h3>
                    <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
                      Your interest in DRYCI represents a beacon of hope. Our directors have registered your email (<strong>{formData.email}</strong>) and will get in touch with you shortly.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl max-w-sm text-left">
                    <span className="text-[9px] uppercase font-mono tracking-wider font-bold text-slate-400 block mb-1">
                      Next Step Timeline
                    </span>
                    <p className="text-[11px] text-slate-600 leading-normal">
                      1. Check your email inbox for our welcome kit inside 4 hours.<br />
                      2. Receive a telephone onboarding call from our local coordinator.<br />
                      3. Sign the DRYCI Child Safety Agreement standard code.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
