'use client';

import React from 'react'
import Link from 'next/link'
import { Bell, ChevronDown, FileText, Home, PieChart, Settings, Shield, Users, Download, Calendar, BarChart, LineChart, DollarSign } from 'lucide-react'

export default function ReportsView() {
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
          <SidebarLink href="/reports" icon={<PieChart />} label="Reports" active/>
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
                  Reports
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

        {/* Reports Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Report Generation */}
            <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Generate Report</h3>
              <div className="flex flex-wrap gap-4">
                <select className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>KYC Compliance Summary</option>
                  <option>Risk Assessment Overview</option>
                  <option>Document Expiry Report</option>
                  <option>Client Onboarding Status</option>
                </select>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Select date range"
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Generate Report
                </button>
              </div>
            </div>

            {/* Report Summaries */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <ReportSummaryCard
                title="KYC Compliance Rate"
                value="92%"
                change="+2%"
                icon={<PieChart className="h-6 w-6 text-blue-600" />}
              />
              <ReportSummaryCard
                title="Average Risk Score"
                value="3.2"
                change="-0.3"
                icon={<BarChart className="h-6 w-6 text-blue-600" />}
              />
              <ReportSummaryCard
                title="Document Renewal Rate"
                value="88%"
                change="+5%"
                icon={<FileText className="h-6 w-6 text-blue-600" />}
              />
            </div>

            {/* Recent Reports */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Reports</h3>
              </div>
              <ul className="divide-y divide-gray-200">
                {recentReports.map((report, index) => (
                  <li key={index} className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {getReportIcon(report.type)}
                      <div className="ml-4">
                        <h4 className="text-sm font-medium text-gray-900">{report.name}</h4>
                        <p className="text-sm text-gray-500">{report.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <Download className="h-5 w-5 mr-1" />
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Analytics Charts */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">KYC Compliance Trend</h3>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                  <LineChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Chart: KYC Compliance over time</span>
                </div>
              </div>
              <div className="bg-white shadow-sm rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Risk Distribution</h3>
                <div className="h-64 flex items-center justify-center bg-gray-100 rounded">
                  <PieChart className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-gray-500">Chart: Client Risk Distribution</span>
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

function ReportSummaryCard({ title, value, change, icon }) {
  const isPositive = change.startsWith('+')
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
                <div className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">{value}</div>
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                    isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {change}
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

function getReportIcon(type) {
  switch (type) {
    case 'compliance':
      return <Shield className="h-6 w-6 text-blue-600" />
    case 'risk':
      return <BarChart className="h-6 w-6 text-yellow-600" />
    case 'financial':
      return <DollarSign className="h-6 w-6 text-green-600" />
    default:
      return <FileText className="h-6 w-6 text-gray-600" />
  }
}

const recentReports = [
  { name: 'Monthly KYC Compliance Summary', type: 'compliance', date: 'Generated on May 1, 2023' },
  { name: 'Quarterly Risk Assessment Report', type: 'risk', date: 'Generated on Apr 15, 2023' },
  { name: 'Annual Financial Crime Prevention Report', type: 'financial', date: 'Generated on Mar 31, 2023' },
  { name: 'Document Expiry Status Report', type: 'compliance', date: 'Generated on May 10, 2023' },
  { name: 'High-Risk Clients Audit Report', type: 'risk', date: 'Generated on Apr 30, 2023' },
]