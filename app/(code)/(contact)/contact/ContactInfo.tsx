"use client";

export default function ContactInfo() {
  return (
    <div className="space-y-10 lg:pr-12">
      {/* Communication Coordinates */}
      <div className="space-y-4">
        <span className="font-english-body text-[10px] uppercase tracking-[0.3em] text-primary block">
          DIRECT DESK SIGNALS
        </span>
        <h4 className="font-english-heading text-xl text-foreground">Connect over wires</h4>
        <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
          Production Desk: +91 98765 43210 <br />
          Email Handshake: create@scenebanegakya.com
        </p>
      </div>

      {/* Working Hours Module */}
      <div className="space-y-4 border-t border-border/40 pt-8">
        <span className="font-english-body text-[10px] uppercase tracking-[0.3em] text-primary block">
          OPERATIONAL TIMEBOX
        </span>
        <h4 className="font-english-heading text-xl text-foreground">Studio Sync Hours</h4>
        <p className="font-english-body text-sm text-foreground-muted leading-relaxed">
          Monday – Friday: 10:00 AM – 07:00 PM (IST) <br />
          Saturday: Script development rooms only <br />
          Sunday: Dark room down-time
        </p>
      </div>
    </div>
  );
}