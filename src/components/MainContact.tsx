import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MainContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
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
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      formData.email = '';
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address format';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a message';
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
      name: '',
      email: '',
      subject: 'general',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <section id="contact" className="py-[120px] sm:py-[145px] lg:py-[180px] bg-slate-50 relative overflow-hidden w-full">
      {/* Design accents */}
      <div className="absolute top-1/4 left-1/4 w-[380px] h-[380px] bg-[#0D47A1]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-[#F57C00]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Address Details & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-[#0D47A1] font-mono text-sm uppercase tracking-widest font-extrabold block">
                Connect With Us
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-none">
                Reach Out & Start the Dialogue.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Have questions about our mentorship program, local libraries, or want to explore partnership models? We are ready to listen, collaborate, and act.
              </p>
            </div>

            {/* Direct Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border border-slate-150 rounded-2xl shadow-sm text-left space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#0D47A1]/5 flex items-center justify-center text-[#0D47A1]">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Email Directory</span>
                <a href="mailto:dryci.ngo@gmail.com" className="text-slate-800 text-xs font-bold hover:text-[#0D47A1] block">dryci.ngo@gmail.com</a>
              </div>

              <div className="p-5 bg-white border border-slate-150 rounded-2xl shadow-sm text-left space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#F57C00]/5 flex items-center justify-center text-[#F57C00]">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Direct Phone</span>
                <a href="tel:+2348107911934" className="text-slate-800 text-xs font-bold hover:text-[#F57C00] block">+234 810 791 1934</a>
              </div>

              <div className="p-5 bg-white border border-slate-150 rounded-2xl shadow-sm text-left space-y-2 sm:col-span-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/5 flex items-center justify-center text-emerald-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Head Office Address</span>
                <p className="text-slate-800 text-xs font-bold leading-normal">
                  Calabar, Cross River State, Nigeria
                </p>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Our central hub of operation coordinating leadership development, education, and mentorship initiatives.
                </p>
              </div>
            </div>

            {/* Support and trust cards */}
            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-md space-y-4 text-left relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-[#0D47A1]/30 rounded-full blur-xl" />
              <div className="flex items-center gap-2 text-[#F57C00] font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Office Hours</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our Calabar head office is open <strong>Monday &ndash; Friday from 9:00 AM to 5:00 PM (West Africa Time)</strong>. Visitors and partners are always welcome to connect with us.
              </p>
              <div className="border border-slate-800 rounded bg-slate-950/80 p-2 text-center text-[10px] font-mono font-bold text-slate-400">
                REGISTERED NOT-FOR-PROFIT ORGANISATION
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Panel */}
          <div className="lg:col-span-7 bg-white border border-slate-150 rounded-3xl p-6 sm:p-10 shadow-xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F57C00]/3 rounded-full blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-2 text-left">
                    <h3 className="font-serif text-2xl font-extrabold text-slate-900 tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal">
                      Fill out this quick form, and our regional coordination team will review and reply within 24&ndash;48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-left">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                        Full Name <span className="text-[#F57C00]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Chinelo Obi"
                        className={`w-full bg-slate-50 border ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 transition-all`}
                      />
                      {errors.name && <span className="text-red-500 text-[10px] font-medium">{errors.name}</span>}
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                        Email Address <span className="text-[#F57C00]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. chinelo@example.com"
                        className={`w-full bg-slate-50 border ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 transition-all`}
                      />
                      {errors.email && <span className="text-red-500 text-[10px] font-medium">{errors.email}</span>}
                    </div>

                    {/* Subject/Topic */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                        Topic of Inquiry
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 transition-all"
                      >
                        <option value="general">General Inquiries</option>
                        <option value="partnership">Partnership & Sponsorship</option>
                        <option value="volunteer">Volunteer Details</option>
                        <option value="library">Book Drives & Library Support</option>
                        <option value="feedback">Feedback & Suggestions</option>
                      </select>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-600 block">
                        Your Message <span className="text-[#F57C00]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="How can we help you or collaborate?"
                        className={`w-full bg-slate-50 border ${
                          errors.message ? 'border-red-500' : 'border-slate-200'
                        } rounded-xl px-4 py-3 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0D47A1]/20 transition-all`}
                      />
                      {errors.message && <span className="text-red-500 text-[10px] font-medium">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0D47A1] hover:bg-[#09357A] text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-4"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Delivering Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-serif text-2xl font-extrabold text-slate-900 tracking-tight">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Thank you for reaching out to Dreams to Reality Youth and Children Initiative. Our regional representative has received your transmission and will review it promptly.
                    </p>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl max-w-xs mx-auto text-left flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#0D47A1] shrink-0" />
                    <span className="text-[10px] text-slate-500 leading-normal font-mono uppercase tracking-wider">
                      Secure Submission &bull; Certified & Verified NGO
                    </span>
                  </div>

                  <button
                    onClick={resetForm}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer"
                  >
                    Send Another Message
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
