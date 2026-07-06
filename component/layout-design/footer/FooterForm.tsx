'use client';

import React, { useState } from 'react';
import { leadService } from '@/services/leadServices';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function FooterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await leadService.submitFooterForm({ source: 'footer', email });
            setStatus('success');
            setEmail('');
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="md:col-span-3 space-y-4">
            {/* SECTION HEADER */}
            <h5 className="font-english-heading text-xs font-bold tracking-widest text-primary uppercase">
                Updates
            </h5>

            {/* EXPOSITION TEXT */}
            <p className="font-english-body text-xs text-muted-foreground leading-relaxed">
                Subscribe for raw post-production logs, breakdown pipelines, and studio releases.
            </p>

            {/* REACTIVE DATA PIPE FORM */}
            <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
                <div className="relative w-full">
                    <input
                        type="email"
                        placeholder={status === 'success' ? "Subscription activated" : "Enter email address"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'submitting' || status === 'success'}
                        className="w-full h-9 px-3 bg-muted border border-border rounded text-xs text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className="h-9 w-full bg-primary text-primary-foreground font-english-heading text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 active:scale-[0.99] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {status === 'submitting' ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : status === 'success' ? (
                        <span className="flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Synced</span>
                        </span>
                    ) : (
                        'Subscribe'
                    )}
                </button>
            </form>

            {/* SYSTEM METADATA STATUS STRIPS */}
            {status === 'error' && (
                <span className="text-red-400 font-mono text-[10px] tracking-wide flex items-center space-x-1 animate-pulse">
                    <AlertCircle className="w-3 h-3" />
                    <span>[ERR_SYNC_FAIL]: Inbound pipe rejected.</span>
                </span>
            )}

            {status === 'success' && (
                <span className="text-emerald-400 font-mono text-[10px] tracking-wide flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>[SUCCESS]: Email linked to radar grid.</span>
                </span>
            )}
        </div>
    );
}