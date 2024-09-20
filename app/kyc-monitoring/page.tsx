'use client';

import React from 'react'
import Link from 'next/link'
import { Bell, ChevronDown, FileText, Home, PieChart, Settings, Shield, Users, Search, AlertTriangle, CheckCircle, Clock, XCircle } from 'lucide-react'

export default function KYCMonitoringView() {
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
          <SidebarLink href="/kyc-monitoring" icon={<FileText />} label="KYC Monitoring" active/>
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
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  KYC Monitoring
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

        {/* KYC Monitoring Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search and Filter */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Risk Levels</option>
                  <option>High Risk</option>
                  <option>Medium Risk</option>
                  <option>Low Risk</option>
                </select>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Statuses</option>
                  <option>Up to Date</option>
                  <option>Review Required</option>
                  <option>Expired</option>
                </select>
              </div>
            </div>

            {/* KYC Monitoring Table */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      KYC Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Review
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {kycData.map((client) => (
                    <tr key={client.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={client.avatar} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                            <div className="text-sm text-gray-500">{client.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskLevelColor(client.riskLevel)}`}>
                          {client.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getKYCStatusColor(client.kycStatus)}`}>
                          {client.kycStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {client.lastReview}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {client.nextReview}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-4">Review</button>
                        <button className="text-blue-600 hover:text-blue-900">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* KYC Monitoring Summary */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <SummaryCard
                title="Total Clients"
                value="152"
                icon={<Users className="h-6 w-6 text-blue-600" />}
              />
              <SummaryCard
                title="Up to Date"
                value="128"
                icon={<CheckCircle className="h-6 w-6 text-green-600" />}
              />
              <SummaryCard
                title="Review Required"
                value="18"
                icon={<Clock className="h-6 w-6 text-yellow-600" />}
              />
              <SummaryCard
                title="Expired"
                value="6"
                icon={<XCircle className="h-6 w-6 text-red-600" />}
              />
            </div>

            {/* Recent Activities */}
            <div className="mt-8">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activities</h3>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {recentActivities.map((activity, index) => (
                    <li key={index} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-blue-600 truncate">{activity.client}</p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {activity.action}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            <AlertTriangle className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                            {activity.details}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <Clock className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          <p>
                            {activity.date}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
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

function SummaryCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
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

function getRiskLevelColor(riskLevel: string): string {
  switch (riskLevel) {
    case 'Low':
      return 'bg-green-100 text-green-800'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-800'
    case 'High':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

function getKYCStatusColor(kycStatus: string): string {
  switch (kycStatus) {
    case 'Up to Date':
      return 'bg-green-100 text-green-800'
    case 'Review Required':
      return 'bg-yellow-100 text-yellow-800'
    case 'Expired':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const kycData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    riskLevel: 'Low',
    kycStatus: 'Up to Date',
    lastReview: '2023-03-15',
    nextReview: '2024-03-15',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    riskLevel: 'Medium',
    kycStatus: 'Review Required',
    lastReview: '2022-11-20',
    nextReview: '2023-05-20',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    riskLevel: 'High',
    kycStatus: 'Expired',
    lastReview: '2022-06-10',
    nextReview: '2023-06-10',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.prince@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    riskLevel: 'Low',
    kycStatus: 'Up to Date',
    lastReview: '2023-04-05',
    nextReview: '2024-04-05',
  },
  {
    id: 5,
    name: 'Ethan Hunt',
    email: 'ethan.hunt@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    riskLevel: 'Medium',
    kycStatus: 'Review Required',
    lastReview: '2022-12-15',
    nextReview: '2023-06-15',
  },
]

const recentActivities = [
  {
    client: 'Global Tech Inc.',
    action: 'KY C Updated',
    details: 'Annual review completed',
    date: 'May 15, 2023',
  },
  {
    client: 'Acme Corporation',
    action: 'Risk Level Changed',
    details: 'Elevated from Low to Medium',
    date: 'May 14, 2023',
  },
  {
    client: 'Stark Industries',
    action: 'Document Expired',
    details: 'Business license needs renewal',
    date: 'May 13, 2023',
  },
  {
    client: 'Wayne Enterprises',
    action: 'New Alert',
    details: 'Unusual transaction pattern detected',
    date: 'May 12, 2023',
  },
]