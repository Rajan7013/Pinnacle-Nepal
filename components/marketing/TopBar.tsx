'use client';
// Force Cache Bust: 1

import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-blue-900 text-white text-xs font-heading tracking-wide py-2">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <a href="mailto:contact@pinnaclenepal.org" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                        <Mail className="w-3 h-3" /> contact@pinnaclenepal.org
                    </a>
                    <a href="tel:+9779550260184" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                        <Phone className="w-3 h-3" /> +977 9550260184
                    </a>
                </div>
                <div className="hidden sm:flex gap-4">
                    <span className="opacity-80">Kathmandu, Nepal</span>
                </div>
            </div>
        </div>
    );
}
