'use client';

import React from 'react'
import { Bell, ChevronDown, FileText, Home, PieChart, Settings, Shield, Users, Lock, Mail, Globe, UserPlus, Save } from 'lucide-react'

export default function SettingsView() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">KYC Comply</span>
        </div>
        <nav>
        <SidebarLink href="/dashboard" icon={<Home />} label="Dashboard"  />
          <SidebarLink href="/clients" icon={<Users />} label="Clients" />
          <SidebarLink href="/kyc-monitoring" icon={<FileText />} label="KYC Monitoring" />
          <SidebarLink href="/reports" icon={<PieChart />} label="Reports" />
          <SidebarLink href="/alerts" icon={<Bell />} label="Alerts" />
          <SidebarLink href="/settings" icon={<Settings />} label="Settings" active/>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Settings
                </h2>
              </div>
              <div className="ml-4 flex items-center">
                <button className="flex items-center text-gray-700 hover:text-gray-900">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                  />
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Settings Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              {/* Settings Navigation */}
              <nav className="flex border-b border-gray-200">
                <SettingsNavItem icon={<Lock />} label="Security" active />
                <SettingsNavItem icon={<Mail />} label="Notifications" />
                <SettingsNavItem icon={<Globe />} label="Integrations" />
                <SettingsNavItem icon={<UserPlus />} label="Team" />
              </nav>

              {/* Settings Form */}
              <form className="p-6 space-y-6">
                <h3 className="text-lg font-medium text-gray-900">Security Settings</h3>
                
                {/* Two-Factor Authentication */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Enable
                    </button>
                  </div>
                </div>

                {/* Password Change */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Change Password</h4>
                  <div className="mt-2 space-y-4">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                {/* Session Management */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Active Sessions</h4>
                  <div className="mt-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Windows 10 - Chrome</p>
                        <p className="text-sm text-gray-500">Last active: 2 hours ago</p>
                      </div>
                      <button type="button" className="text-sm text-red-600 hover:text-red-800">
                        Revoke
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">MacOS - Safari</p>
                        <p className="text-sm text-gray-500">Last active: 5 days ago</p>
                      </div>
                      <button type="button" className="text-sm text-red-600 hover:text-red-800">
                        Revoke
                      </button>
                    </div>
                  </div>
                </div>

                {/* API Key Management */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900">API Keys</h4>
                  <div className="mt-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Production API Key</p>
                        <p className="text-sm text-gray-500">Created: May 1, 2023</p>
                      </div>
                      <button type="button" className="text-sm text-red-600 hover:text-red-800">
                        Revoke
                      </button>
                    </div>
                    <button type="button" className="text-sm text-blue-600 hover:text-blue-800">
                      Generate New API Key
                    </button>
                  </div>
                </div>

                {/* Save Changes Button */}
                <div className="flex justify-end">
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, label, active = false }) {
  return (
    <a
      href={href}
      className={`flex items-center space-x-2 mb-4 px-4 py-2 rounded-lg transition-colors duration-200 ${
        active ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

function SettingsNavItem({ icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center px-6 py-3 text-sm font-medium ${
        active
          ? 'border-b-2 border-blue-500 text-blue-600'
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </a>
  )
}