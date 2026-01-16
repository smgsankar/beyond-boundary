'use client';

import { useState } from 'react';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="flex flex-1 flex-col w-full max-w-7xl mx-auto p-4 lg:p-8">
        <main className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#2a5436] pb-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                        <span>Settings</span>
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-primary">Account</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Account Settings</h1>
                    <p className="text-gray-400 mt-2">Manage your password, security preferences and contact info.</p>
                </div>
                <div className="hidden sm:block">
                    <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">All systems operational</span>
                </div>
            </div>

            {/* Password Section */}
            <div className="bg-surface-dark border border-[#2a5436] rounded-xl overflow-hidden shadow-xl shadow-black/20">
                <div className="px-6 py-4 border-b border-[#2a5436] flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">lock</span>
                    <h3 className="text-lg font-semibold text-white">Password &amp; Security</h3>
                </div>
                <div className="p-6 grid gap-6 md:grid-cols-2">
                    <div className="md:col-span-2 space-y-1">
                        <Input label="Current Password" placeholder="••••••••••••" type="password" />
                    </div>
                    <div className="space-y-1">
                        <Input label="New Password" placeholder="Min. 8 characters" type="password" />
                    </div>
                    <div className="space-y-1">
                        <Input label="Confirm New Password" placeholder="Re-enter password" type="password" />
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">info</span>
                            Password must be at least 8 characters long and contain one symbol.
                        </p>
                    </div>
                </div>
            </div>

            {/* Notifications Section */}
            <div className="bg-surface-dark border border-[#2a5436] rounded-xl overflow-hidden shadow-xl shadow-black/20">
                <div className="px-6 py-4 border-b border-[#2a5436] flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">notifications_active</span>
                    <h3 className="text-lg font-semibold text-white">Notifications</h3>
                </div>
                <div className="divide-y divide-[#2a5436]">
                    <ToggleItem
                        label="Email Alerts"
                        description="Receive weekly league summaries and transfer deadline alerts."
                        checked={emailAlerts}
                        onChange={setEmailAlerts}
                    />
                    <ToggleItem
                        label="Browser Push Notifications"
                        description="Get real-time match updates and score changes."
                        checked={pushNotifications}
                        onChange={setPushNotifications}
                    />
                </div>
            </div>

            {/* Privacy Section */}
            <div className="bg-surface-dark border border-[#2a5436] rounded-xl overflow-hidden shadow-xl shadow-black/20">
                <div className="px-6 py-4 border-b border-[#2a5436] flex items-center gap-3">
                    <span className="material-symbols-outlined text-gray-400">visibility</span>
                    <h3 className="text-lg font-semibold text-white">Privacy</h3>
                </div>
                <div className="p-6">
                     <div className="flex items-start justify-between">
                        <div className="flex flex-col gap-1 max-w-2xl">
                            <span className="text-white font-medium">Public Profile</span>
                            <span className="text-sm text-gray-400">Allow other players to see your fantasy stats and league history. Even when private, your name will be visible in leagues you join.</span>
                        </div>
                        <Toggle checked={publicProfile} onChange={setPublicProfile} />
                    </div>
                </div>
            </div>

            {/* Action Footer */}
            <div className="flex items-center justify-end gap-4 pt-4 pb-10">
                <button className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors">Cancel</button>
                <Button>
                    <span>Save Changes</span>
                    <span className="material-symbols-outlined text-[18px] ml-2">check</span>
                </Button>
            </div>
        </main>
    </div>
  );
}

function ToggleItem({ label, description, checked, onChange }: { label: string, description: string, checked: boolean, onChange: (v: boolean) => void }) {
    return (
        <div className="flex items-center justify-between px-6 py-4">
            <div className="flex flex-col">
                <span className="text-white font-medium">{label}</span>
                <span className="text-sm text-gray-400">{description}</span>
            </div>
            <Toggle checked={checked} onChange={onChange} />
        </div>
    )
}

function Toggle({ checked, onChange }: { checked: boolean, onChange: (v: boolean) => void }) {
    return (
        <div className="relative inline-flex items-center cursor-pointer" onClick={() => onChange(!checked)}>
            <div className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${checked ? 'bg-primary' : 'bg-gray-700'}`}>
                <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-200 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`}></div>
            </div>
        </div>
    );
}
