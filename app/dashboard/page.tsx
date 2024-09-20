'use client';

import React from 'react'
import Link from 'next/link'
import { Bell, ChevronDown, FileText, Home, PieChart, Settings, Shield, Users } from 'lucide-react'

export default function KYCDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <div className="flex items-center mb-8">
          <Shield className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">KYC Comply</span>
        </div>
        <nav>
          <SidebarLink href="/dashboard" icon={<Home />} label="Dashboard" active />
          <SidebarLink href="/clients" icon={<Users />} label="Clients" />
          <SidebarLink href="/kyc-monitoring" icon={<FileText />} label="KYC Monitoring" />
          <SidebarLink href="/reports" icon={<PieChart />} label="Reports" />
          <SidebarLink href="/alerts" icon={<Bell />} label="Alerts" />
          <SidebarLink href="/settings" icon={<Settings />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex-1 min-w-0">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
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

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <DashboardWidget
                title="Clients in Compliance"
                value="87%"
                description="32 out of 37 clients"
                color="bg-green-500"
              />
              <DashboardWidget
                title="Documents Expiring Soon"
                value="5"
                description="Within next 30 days"
                color="bg-yellow-500"
              />
              <DashboardWidget
                title="Pending Verifications"
                value="12"
                description="Awaiting review"
                color="bg-blue-500"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Alerts Section */}
      <aside className="w-64 bg-white border-l border-gray-200 p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Alerts</h2>
        <div className="space-y-4">
          <Alert
            title="Compliance Deadline"
            description="Client XYZ Ltd. KYC update due in 3 days"
          />
          <Alert
            title="Verification Required"
            description="New documents uploaded for ABC Corp"
          />
          <Alert
            title="Risk Level Change"
            description="Client 123 Inc. risk level increased to High"
          />
        </div>
      </aside>
    </div>
  )
}

function SidebarLink({ href, icon, label, active = false }: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 mb-4 px-4 py-2 rounded-lg transition-colors duration-200 ${
        active ? 'bg-blue-700 text-white' : 'text-blue-100 hover:bg-blue-700 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function DashboardWidget({ title, value, description, color }: {
  title: string;
  value: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className={`rounded-md p-3 ${color}`}>
              <PieChart className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd>
                <div className="text-lg font-medium text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-5 py-3">
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
  )
}

function Alert({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <Bell className="h-5 w-5 text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{title}</h3>
          <div className="mt-2 text-sm text-red-700">{description}</div>
        </div>
      </div>
    </div>
  )
}