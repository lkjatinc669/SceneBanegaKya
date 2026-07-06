// // components/forms/ContactForm.tsx
// 'use client';

// import React, { useState } from 'react';
// import { leadService } from '@/services/leadServices';
// import { Loader2, CheckCircle2 } from 'lucide-react';

// export default function ContactForm() {
//   const [name, setName] = useState('');
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [serviceType, setServiceType] = useState('Graphic Design');
//   const [message, setMessage] = useState('');
  
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('submitting');

//     try {
//       await leadService.submitContactForm({
//         source: 'contact_page',
//         name,
//         emailOrPhone,
//         serviceType,
//         message
//       });
//       setStatus('success');
//     } catch (err) {
//       setStatus('error');
//     }
//   };

//   if (status === 'success') {
//     return (
//       <div className="p-8 border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 rounded-md font-mono text-xs flex flex-col items-center justify-center space-y-3 text-center">
//         <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
//         <p className="uppercase tracking-widest font-bold">Transmission Captured Securely</p>
//         <p className="text-muted-foreground font-light text-[11px]">Our pipeline engineers are reviewing your data profile.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs text-foreground bg-background/40 backdrop-blur-sm border border-border p-6 sm:p-8 rounded-md relative">
//       <div className="absolute top-4 right-4 text-[9px] text-muted-foreground/30">// SECURE_INBOUND_CHANNEL</div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="space-y-1.5">
//           <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Your Name</label>
//           <input
//             type="text" required value={name} onChange={(e) => setName(e.target.value)}
//             className="w-full h-10 px-3 bg-muted/40 border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
//             placeholder="e.g., Alex Carter"
//           />
//         </div>
//         <div className="space-y-1.5">
//           <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Email or Phone Node</label>
//           <input
//             type="text" required value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)}
//             className="w-full h-10 px-3 bg-muted/40 border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground"
//             placeholder="name@domain.com or +1..."
//           />
//         </div>
//       </div>

//       <div className="space-y-1.5">
//         <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Target Service Segment</label>
//         <select
//           value={serviceType} onChange={(e) => setServiceType(e.target.value)}
//           className="w-full h-10 px-3 bg-muted border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground appearance-none"
//         >
//           <option>Graphic Design</option>
//           <option>Video Editing</option>
//           <option>Motion Graphics</option>
//           <option>Brand Identity</option>
//           <option>Creative Content</option>
//           <option>Digital Production</option>
//         </select>
//       </div>

//       <div className="space-y-1.5">
//         <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Message Manifest</label>
//         <textarea
//           required rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
//           className="w-full p-3 bg-muted/40 border border-border rounded focus:outline-none focus:border-primary transition-colors text-foreground resize-none font-english-body text-sm"
//           placeholder="Describe your production scope briefly..."
//         />
//       </div>

//       <button
//         type="submit" disabled={status === 'submitting'}
//         className="w-full h-11 bg-foreground text-background hover:bg-primary hover:text-primary-foreground font-english-heading font-bold text-xs uppercase tracking-widest rounded transition-all active:scale-[0.99] flex items-center justify-center space-x-2"
//       >
//         {status === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Deploy Transmission'}
//       </button>

//       {status === 'error' && <p className="text-red-400 text-[10px] tracking-wide mt-2">[ERROR]: Entry pipeline failed to deploy.</p>}
//     </form>
//   );
// }