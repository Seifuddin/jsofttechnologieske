"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Wifi, Server } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function SystemStatusStrip() {
  const [uptime, setUptime] = useState(0);
  const [threats, setThreats] = useState(0);
  const [devices, setDevices] = useState(0);
  const [logs, setLogs] = useState([]);

  // SYSTEM STATE (drives everything)
  const systemLoad = useMemo(() => {
    return Math.min(100, threats / 10 + devices * 2);
  }, [threats, devices]);

  // counters
  useEffect(() => {
    let u = 0,
      t = 0,
      d = 0;

    const interval = setInterval(() => {
      if (u < 99.98) u += 0.3;
      if (t < 1284) t += 35;
      if (d < 24) d += 1;

      setUptime(parseFloat(u.toFixed(2)));
      setThreats(t);
      setDevices(d);

      if (u >= 99.98 && t >= 1284 && d >= 24) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // intelligent logs (structured system feed)
  useEffect(() => {
    const messages = [
      "[SECURITY] Firewall inspection active",
      "[NETWORK] Packet routing optimized",
      "[SYSTEM] All services stable",
      "[AI] Behavioral analysis running",
      "[SECURITY] Threat scan completed",
    ];

    let i = 0;

    const interval = setInterval(() => {
      setLogs((prev) => [...prev.slice(-3), messages[i % messages.length]]);
      i++;
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#050816] border-y border-white/10 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-blue-500/5" />

      {/* scan line */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[1px] bg-green-400/30 animate-[scan_5s_linear_infinite]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4">

        {/* STATUS STRIP */}
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm">

          <StripItem icon={<ShieldCheck size={16} />} label="Uptime" value={`${uptime}%`} />
          <StripItem icon={<Activity size={16} />} label="Threats" value={`${threats}+`} />
          <StripItem icon={<Wifi size={16} />} label="Devices" value={`${devices}/24`} />
          <StripItem icon={<Server size={16} />} label="Servers" value="12 Running" />

          {/* system state indicator */}
          <div className="flex items-center gap-2 text-xs text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            SYSTEM OPERATIONAL
          </div>

        </div>

        {/* GRAPH + SIGNALS (state-driven) */}
        <div className="mt-3 grid grid-cols-12 gap-[2px] h-8">
          {Array.from({ length: 24 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-green-400/40 rounded-sm"
              animate={{
                height: [
                  4,
                  Math.max(4, systemLoad * 0.35 + Math.sin(i) * 6),
                  4,
                ],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.03,
              }}
            />
          ))}
        </div>

        {/* INTELLIGENT TERMINAL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-3 bg-black/40 border border-white/10 rounded-md px-4 py-3 backdrop-blur-md"
        >

          {/* header */}
          <div className="flex items-center justify-between mb-2">
            <div className="text-[11px] text-green-400 font-mono">
              system.intelligence.log
            </div>

            <div className="text-[10px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
              LIVE
            </div>
          </div>

          {/* logs */}
          <div className="text-[11px] text-green-300 font-mono space-y-[2px] leading-tight">
            {logs.map((log, i) => (
              <div key={i} className="opacity-90">
                &gt; {log}
              </div>
            ))}
          </div>

        </motion.div>

      </div>

      {/* scan animation */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </section>
  );
}

/* STRIP ITEM */
function StripItem({ icon, label, value }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">

      {/* pulse */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
      </span>

      {/* icon */}
      <span className="text-green-400">{icon}</span>

      {/* text */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400">{label}:</span>
        <span className="font-semibold text-white">{value}</span>
      </div>

    </motion.div>
  );
}