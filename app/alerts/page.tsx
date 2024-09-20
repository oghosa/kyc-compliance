'use client';

import React from 'react'
import Link from 'next/link'
import { Bell, ChevronDown, FileText, Home, PieChart, Settings, Shield, Users, AlertTriangle, CheckCircle, Clock, Filter, ChevronLeft, ChevronRight } from 'lucide-react'

export default function AlertsView() {
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
          <SidebarLink href="/alerts" icon={<Bell />} label="Alerts" active/>
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
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Alerts
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

        {/* Alerts Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Alert Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <AlertSummaryCard
                title="High Priority"
                value="12"
                icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
                color="bg-red-100"
              />
              <AlertSummaryCard
                title="Medium Priority"
                value="28"
                icon={<Clock className="h-6 w-6 text-yellow-600" />}
                color="bg-yellow-100"
              />
              <AlertSummaryCard
                title="Low Priority"
                value="45"
                icon={<Bell className="h-6 w-6 text-blue-600" />}
                color="bg-blue-100"
              />
              <AlertSummaryCard
                title="Resolved Today"
                value="17"
                icon={<CheckCircle className="h-6 w-6 text-green-600" />}
                color="bg-green-100"
              />
            </div>

            {/* Alerts List */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Active Alerts</h3>
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  <Filter className="h-5 w-5 mr-2" />
                  Filter
                </button>
              </div>
              <ul className="divide-y divide-gray-200">
                {alerts.map((alert, index) => (
                  <li key={index} className="px-6 py-4 flex items-center">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full ${getPriorityColor(alert.priority)} mr-4`}></div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 truncate">{alert.title}</h4>
                      <p className="text-sm text-gray-500">{alert.description}</p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-4">
                      <span className="text-sm text-gray-500">{alert.time}</span>
                      <button className="text-sm text-blue-600 hover:text-blue-800">View</button>
                      <button className="text-sm text-green-600 hover:text-green-800">Resolve</button>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Pagination */}
              <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                      <span className="font-medium">85</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Previous</span>
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        1
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </button>
                      <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-gray-50 text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        8
                      </button>
                      <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                        9
                      </button>
                      <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                        <span className="sr-only">Next</span>
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function SidebarLink({ href, icon, label, active = false }) {
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

function AlertSummaryCard({ title, value, icon, color }) {
  return (
    <div className={`${color} overflow-hidden shadow rounded-lg`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            {icon}
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
    </div>
  )
}

function getPriorityColor(priority) {
  switch (priority) {
    case 'High':
      return 'bg-red-600'
    case 'Medium':
      return 'bg-yellow-600'
    case 'Low':
      return 'bg-blue-600'
    default:
      return 'bg-gray-600'
  }
}

const alerts = [
  {
    title: 'High-risk client activity detected',
    description: 'Unusual transaction pattern for client XYZ Corp',
    priority: 'High',
    time: '10 minutes ago',
  },
  {
    title: 'KYC document expiring soon',
    description: 'Client ABC Ltd has documents expiring in 7 days',
    priority: 'Medium',
    time: '1 hour ago',
  },
  {
    title: 'New PEP identified',
    description: 'Client John Doe has been identified as a Politically Exposed Person',
    priority: 'High',
    time: '2 hours ago',
  },
  {
    title: 'Compliance check required',
    description: 'Routine compliance check due for client 123 Inc',
    priority: 'Low',
    time: '3 hours ago',
  },
  {
    title: 'Suspicious activity report filed',
    description: 'SAR filed for client DEF Corp, awaiting review',
    priority: 'High',
    time: '5 hours ago',
  },
  {
    title: 'Client risk level changed',
    description: 'Risk level for client GHI Ltd increased from low to medium',
    priority: 'Medium',
    time: '1 day ago',
  },
  {
    title: 'New sanction list update',
    description: 'Latest sanction list update requires client database scan',
    priority: 'Medium',
    time: '1 day ago',
  },
  {
    title: 'Annual review upcoming',
    description: 'Annual KYC review for client JKL Inc due in 14 days',
    priority: 'Low',
    time: '2 days ago',
  },
  {
    title: 'Missing KYC information',
    description: 'Incomplete KYC profile detected for client MNO Corp',
    priority: 'Medium',
    time: '2 days ago',
  },
  {
    title: 'New high-value transaction',
    description: 'Large transaction detected for client PQR Ltd, requires review',
    priority: 'High',
    time: '3 days ago',
  },
]