// components/auth/AdminLoginConsole.tsx
'use client';

import React, { useState } from 'react';
import clientSupabase from '@/browser-client/clientSupabase';
import { Shield, KeyRound, Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

type LoginStage = 'email' | 'email_otp' | 'totp' | 'success';

export default function AdminLoginConsole() {
  const supabase = clientSupabase();
  
  const [stage, setStage] = useState<LoginStage>('email');
  const [email, setEmail] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [totpCode, setTotpCode] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // STAGE 1: Dispatches standard passwordless magic handshake token
  const handleRequestEmailOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false } // Block malicious rogue registrations
      });

      if (error) throw error;
      setStage('email_otp');
    } catch (err: any) {
      setError(err.message || 'Verification initialization collapsed.');
    } finally {
      setLoading(false);
    }
  };

  // STAGE 2: Verifies initial login email key to reach aal1 status
  const handleVerifyEmailOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: emailOtp,
        type: 'email'
      });

      if (error) throw error;

      // Check current MFA factor setup on the identity channel
      const factors = await supabase.auth.mfa.listFactors();
      const hasTotp = factors.data?.all.some(f => f.status === 'verified');

      if (hasTotp) {
        setStage('totp'); // Escalate to mandatory physical TOTP node
      } else {
        setError('Critical Identity Alert: Admin user has no registered TOTP seed setup.');
      }
    } catch (err: any) {
      setError(err.message || 'Baseline email session validation failed.');
    } finally {
      setLoading(false);
    }
  };

  // STAGE 3: Final step to process and upgrade session tokens to aal2 level
  const handleVerifyTotp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const factors = await supabase.auth.mfa.listFactors();
      const totpFactor = factors.data?.all.find(f => f.status === 'verified');

      if (!totpFactor) throw new Error('No certified app key found linked to account.');

      // Request authorization challenge token
      const challenge = await supabase.auth.mfa.challenge({ factorId: totpFactor.id });
      if (challenge.error) throw challenge.error;

      // Final verification handshake execution
      const verification = await supabase.auth.mfa.verify({
        factorId: totpFactor.id,
        challengeId: challenge.data.id,
        code: totpCode
      });

      if (verification.error) throw verification.error;
      
      setStage('success');
      // Securely push the user deep into your protected admin directory dashboard layout space
      setTimeout(() => {
        window.location.href = '/admin/dashboard';
      }, 1500);

    } catch (err: any) {
      setError(err.message || 'TOTP challenge validation rejected.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-background/60 backdrop-blur-md border border-border p-8 rounded-lg shadow-2xl relative font-mono text-xs text-foreground selection:bg-primary selection:text-primary-foreground">
      
      {/* BRAND INTERIOR DESIGN ANCHORS */}
      <div className="absolute top-4 right-4 text-[9px] text-muted-foreground/30 select-none">// SECURE_NODE_v2.26</div>
      
      {/* CORE LOGO / BADGE HEADER FRAME */}
      <div className="flex flex-col items-center space-y-3 text-center mb-8">
        <div className="p-3 rounded-md bg-muted border border-border text-primary animate-[pulse_3s_infinite]">
          {stage === 'totp' ? <KeyRound className="w-5 h-5" /> : <Shield className="w-5 h-5" />}
        </div>
        <div>
          <h2 className="font-english-heading text-sm font-black uppercase tracking-widest">ADMIN PORTAL GATE</h2>
          <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">
            {stage === 'email' && 'Phase 1: Security Authorization Handshake'}
            {stage === 'email_otp' && 'Phase 2: Inbox Verification Sync'}
            {stage === 'totp' && 'Phase 3: Hardware TOTP Assurance Escalation'}
            {stage === 'success' && 'ACCESS GRANTED // INITIALIZING DASHBOARD'}
          </p>
        </div>
      </div>

      {/* ERROR METADATA READOUT */}
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded mb-6 leading-relaxed">
          [CRITICAL_ERR]: {error}
        </div>
      )}

      {/* --- FORM CONTAINER CONDITIONAL SWITCH MATRIX --- */}
      {stage === 'email' && (
        <form onSubmit={handleRequestEmailOtp} className="space-y-4">
          <div className="space-y-2">
            <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Admin Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50" />
              <input
                type="email"
                required
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-10 pl-10 pr-4 bg-muted/40 border border-border rounded focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground/30 transition-colors"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-foreground text-background font-bold uppercase tracking-widest rounded hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center space-x-2 active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><span>Request Magic Code</span> <ArrowRight className="w-3.5 h-3.5" /></>}
          </button>
        </form>
      )}

      {stage === 'email_otp' && (
        <form onSubmit={handleVerifyEmailOtp} className="space-y-4">
          <div className="space-y-2">
            <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Enter Email Login Code</label>
            <input
              type="text"
              required
              maxLength={6}
              placeholder="000000"
              value={emailOtp}
              onChange={(e) => setEmailOtp(e.target.value)}
              className="w-full h-11 text-center tracking-[0.5em] font-bold text-lg bg-muted/40 border border-border rounded focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground/20 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-foreground text-background font-bold uppercase tracking-widest rounded hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify Email Gateway'}
          </button>
          <button 
            type="button" 
            onClick={() => setStage('email')} 
            className="w-full text-center text-[10px] text-muted-foreground/60 hover:text-foreground transition-colors uppercase tracking-wider block mt-2"
          >
            ← Return to Email Configuration
          </button>
        </form>
      )}

      {stage === 'totp' && (
        <form onSubmit={handleVerifyTotp} className="space-y-4">
          <div className="space-y-2">
            <label className="text-muted-foreground text-[10px] uppercase tracking-wider block">Authenticator App Code (TOTP)</label>
            <input
              type="text"
              required
              maxLength={6}
              placeholder="******"
              value={totpCode}
              onChange={(e) => setTotpCode(e.target.value)}
              className="w-full h-11 text-center tracking-[0.5em] font-bold text-lg bg-muted/40 border border-border rounded focus:outline-none focus:border-primary text-primary placeholder:text-muted-foreground/20 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-10 bg-primary text-primary-foreground font-bold uppercase tracking-widest rounded hover:opacity-95 shadow-lg shadow-primary/10 transition-all flex items-center justify-center active:scale-[0.99] disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Finalize Session Elevation [AAL2]'}
          </button>
        </form>
      )}

      {stage === 'success' && (
        <div className="py-6 flex flex-col items-center justify-center space-y-3 text-emerald-400 font-bold">
          <CheckCircle2 className="w-8 h-8 stroke-[1.5] animate-[scale_0.3s_ease-out]" />
          <span className="tracking-widest uppercase text-center">Session Verified Secure • Mounting System</span>
        </div>
      )}

    </div>
  );
}