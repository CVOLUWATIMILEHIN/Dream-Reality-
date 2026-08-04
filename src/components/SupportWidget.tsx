import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  ExternalLink, 
  Send, 
  ArrowLeft, 
  Sparkles, 
  Heart, 
  HelpCircle, 
  Users, 
  Handshake, 
  BookOpen 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Direct Support WhatsApp Number & Pre-filled text
  const WHATSAPP_PHONE = '2348107911934';
  const DEFAULT_MESSAGE = 'Hello DRYCI, I would like to make an enquiry.';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  // Quick Action Options
  const QUICK_ACTIONS = [
    { id: 'epiphany', label: 'EPIPHANY 2026 Details', icon: Sparkles, prompt: 'Tell me all about the EPIPHANY Girls Conference 2026, including dates, eligibility, and what happens there.' },
    { id: 'register', label: 'How to Register', icon: HelpCircle, prompt: 'How do I register for DRYCI programs or the EPIPHANY conference?' },
    { id: 'volunteer', label: 'Volunteer with DRYCI', icon: Heart, prompt: 'How can I volunteer with DRYCI? What are the key areas for volunteers?' },
    { id: 'programs', label: 'All Core Programs', icon: BookOpen, prompt: 'What are the main programs and strategic pillars of DRYCI?' },
    { id: 'founder', label: 'About the Founder', icon: Users, prompt: 'Who is the founder of DRYCI and what is his background?' },
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessages: ChatMessage[] = [
      {
        id: 'welcome-1',
        sender: 'bot',
        text: '👋 Welcome to DRYCI!\n\nI am the DRYCI Live Support Assistant. How can I assist you today? Feel free to type any question, or select one of the options below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ];
    setMessages(welcomeMessages);
  }, []);

  // Main message submission pipeline
  const submitMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    // Update state with user message
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Build history payload for the backend API
      const historyPayload = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          history: historyPayload,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to retrieve response.');
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.text || 'Thank you for contacting us. How else can we assist you?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error: any) {
      console.error('Chat API Error:', error);
      
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: 'bot',
        text: 'My apologies! I am currently experiencing connection difficulties. Please feel free to reach our team directly via WhatsApp or Email at dryci.ngo@gmail.com.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    submitMessage(text);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'bot',
        text: '👋 Welcome to DRYCI!\n\nI am the DRYCI Live Support Assistant. How can I assist you today? Feel free to type any question, or select one of the options below.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      
      {/* 1. Chat Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="dryci-live-chat-widget"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[340px] sm:w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden pointer-events-auto"
          >
            {/* Widget Header */}
            <div className="bg-gradient-to-r from-[#0D47A1] to-[#0A3780] p-5 text-white flex items-center justify-between relative shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <span className="text-xl">👋</span>
                </div>
                <div className="text-left">
                  <h3 className="font-serif font-bold text-base leading-tight tracking-wide">DRYCI Assistant</h3>
                  <p className="text-[11px] text-slate-200/90 font-sans font-light">Online Support Assistant</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5">
                {messages.length > 1 && (
                  <button 
                    onClick={handleReset}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                    title="Reset Chat"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4 bg-slate-50 scrollbar-thin">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                
                // Smart link detection
                const hasGoogleForm = msg.text.includes("docs.google.com/forms/");
                const hasWhatsAppInvite = msg.text.includes("inaccurate information") || 
                                          msg.text.includes("DRYCI team directly") ||
                                          msg.text.includes("connect you through WhatsApp");

                return (
                  <div key={msg.id} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-1`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm text-left ${
                      isBot 
                        ? 'bg-white text-slate-700 border border-slate-100 rounded-tl-none font-sans leading-relaxed whitespace-pre-line' 
                        : 'bg-[#0D47A1] text-white rounded-tr-none font-sans font-medium'
                    }`}>
                      {msg.text}

                      {/* Display Google Registration Form Button if the link is in the text */}
                      {isBot && hasGoogleForm && (
                        <div className="mt-3 pt-2.5 border-t border-slate-100">
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdVtEEFM1s_jdzJcSP51zjHxCcmgdR-bL0Uc_O1gFcurIJPiw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 bg-[#0D47A1] hover:bg-[#0A3780] text-white text-xs font-extrabold rounded-xl shadow-sm transition-all active:translate-y-px"
                          >
                            <span>Open Registration Form</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}

                      {/* Display WhatsApp Button if unknown response or WhatsApp is requested */}
                      {isBot && hasWhatsAppInvite && (
                        <div className="mt-3 pt-2.5 border-t border-slate-100">
                          <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 w-full px-3.5 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-extrabold rounded-xl shadow-sm transition-all active:translate-y-px"
                          >
                            <span>Chat on WhatsApp</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5 px-1">{msg.timestamp}</span>
                  </div>
                );
              })}

              {/* Bot thinking/typing state */}
              {isLoading && (
                <div className="flex items-start">
                  <div className="bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {/* Interactive Quick Actions Display - Only show when not loading */}
              {!isLoading && (
                <div className="space-y-2 pt-2 text-left">
                  <div className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">
                    Frequently Asked Questions:
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {QUICK_ACTIONS.map((act) => {
                      const Icon = act.icon;
                      return (
                        <button
                          key={act.id}
                          onClick={() => submitMessage(act.prompt)}
                          className="w-full px-3.5 py-2 bg-white hover:bg-[#0D47A1]/5 border border-slate-150 hover:border-[#0D47A1]/20 rounded-xl text-left text-[11px] font-semibold text-slate-600 hover:text-[#0D47A1] transition-all flex items-center gap-2 shadow-xs active:translate-y-px cursor-pointer"
                        >
                          <Icon className="w-3.5 h-3.5 text-[#F57C00] shrink-0" />
                          <span>{act.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div ref={messageEndRef} />
            </div>

            {/* Input Form for Custom Queries */}
            <form onSubmit={handleSendMessage} className="bg-white border-t border-slate-100 p-3.5 flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isLoading}
                placeholder="Type your question here..."
                className="flex-grow px-4 py-2.5 bg-slate-50 border border-slate-150 rounded-xl text-xs font-sans text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0D47A1] focus:bg-white transition-all disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || !inputText.trim()}
                className="p-2.5 bg-[#0D47A1] hover:bg-[#0A3780] disabled:bg-slate-100 text-white disabled:text-slate-400 rounded-xl transition-all shadow-xs flex items-center justify-center cursor-pointer active:scale-95 shrink-0"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Widget Footer Status Info */}
            <div className="bg-slate-100 px-5 py-3 border-t border-slate-150 text-center text-[10px] text-slate-400 font-mono flex items-center justify-center gap-1.5">
              <span>DRYCI Support Portal</span>
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Response Stream Live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Live Chat Button and Floating WhatsApp Button Stack */}
      <div className="flex flex-col gap-3.5 items-end pointer-events-auto">
        
        {/* Floating Live Chat Button */}
        <div className="relative group">
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-slate-800 z-50">
            Click to chat with Support
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 cursor-pointer ${
              isOpen 
                ? 'bg-[#F57C00] hover:bg-[#E65100]' 
                : 'bg-[#0D47A1] hover:bg-[#0A3780]'
            }`}
            aria-label="Open support live chat"
          >
            {isOpen ? <X className="w-6 h-6 animate-pulse" /> : <MessageSquare className="w-6 h-6" />}
          </button>
        </div>

        {/* Floating WhatsApp Button */}
        <div 
          className="relative group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          <div className={`absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg border border-slate-800 z-50 ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          }`}>
            Chat with us on WhatsApp
          </div>

          {/* Animated Glow for Pulse Action */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none scale-105" />

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 cursor-pointer relative"
            aria-label="Chat with DRYCI on WhatsApp"
          >
            {/* WhatsApp Custom Sized Icon */}
            <svg 
              className="w-7 h-7 fill-current" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  );
}
