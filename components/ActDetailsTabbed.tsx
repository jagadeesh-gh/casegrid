'use client';

import { useState } from 'react';
import { Act, Notification } from '@/lib/types';
import NotificationsTable from './NotificationsTable';
import FormsDownload from './FormsDownload';

interface ActDetailsTabbedProps {
  act: Act;
  notifications: Notification[];
}

export default function ActDetailsTabbed({ act, notifications }: ActDetailsTabbedProps) {
  const [activeTab, setActiveTab] = useState<'notifications' | 'forms'>('notifications');
  
  const hasNotifications = notifications.length > 0;
  const hasForms = act.category === 'Rule' && act.forms && act.forms.length > 0;
  
  // If only one section has content, show it directly without tabs
  if (hasNotifications && !hasForms) {
    return <NotificationsTable notifications={notifications} actTitle={act.title} />;
  }
  
  if (hasForms && !hasNotifications) {
    return <FormsDownload forms={act.forms!} ruleTitle={act.title} />;
  }
  
  // If neither has content, show nothing
  if (!hasNotifications && !hasForms) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors duration-200 ${
              activeTab === 'notifications'
                ? 'border-blue-500 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            aria-selected={activeTab === 'notifications'}
          >
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
              Notifications
              {hasNotifications && (
                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-600 bg-blue-100 rounded-full">
                  {notifications.length}
                </span>
              )}
            </div>
          </button>
          
          {hasForms && (
            <button
              onClick={() => setActiveTab('forms')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors duration-200 ${
                activeTab === 'forms'
                  ? 'border-green-500 text-green-600 bg-green-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              aria-selected={activeTab === 'forms'}
            >
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Forms
                <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-600 bg-green-100 rounded-full">
                  {act.forms?.length || 0}
                </span>
              </div>
            </button>
          )}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {activeTab === 'notifications' && hasNotifications && (
          <div className="animate-fade-in">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Notifications & Updates
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Recent notifications, amendments, and updates related to this {act.category?.toLowerCase()}
              </p>
            </div>
            
            {/* Mobile view - Cards */}
            <div className="block md:hidden">
              <div className="space-y-4 p-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          {notification.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            notification.type === 'amendment' ? 'bg-purple-100 text-purple-800' :
                            notification.type === 'update' ? 'bg-blue-100 text-blue-800' :
                            notification.type === 'clarification' ? 'bg-indigo-100 text-indigo-800' :
                            notification.type === 'implementation' ? 'bg-green-100 text-green-800' :
                            notification.type === 'enforcement' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <time dateTime={notification.date}>
                          {new Date(notification.date).toLocaleDateString()}
                        </time>
                        {notification.source && (
                          <div className="mt-1">
                            {notification.source}
                          </div>
                        )}
                      </div>
                      {notification.pdfUrl && (
                        <a
                          href={notification.pdfUrl}
                          download
                          className="inline-flex items-center px-3 py-1 border border-blue-300 rounded-md text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          PDF
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop view - Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Notification
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Source
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {notifications.map((notification) => (
                    <tr key={notification.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          notification.type === 'amendment' ? 'bg-purple-100 text-purple-800' :
                          notification.type === 'update' ? 'bg-blue-100 text-blue-800' :
                          notification.type === 'clarification' ? 'bg-indigo-100 text-indigo-800' :
                          notification.type === 'implementation' ? 'bg-green-100 text-green-800' :
                          notification.type === 'enforcement' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <time dateTime={notification.date}>
                          {new Date(notification.date).toLocaleDateString()}
                        </time>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        <div className="max-w-xs">
                          {notification.source || '-'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {notification.pdfUrl ? (
                          <a
                            href={notification.pdfUrl}
                            download
                            className="inline-flex items-center px-3 py-1 border border-blue-300 rounded-md text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                          >
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            PDF
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'forms' && hasForms && (
          <div className="animate-fade-in">
            <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Available Forms
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Download official forms and applications related to this rule
              </p>
            </div>

            {/* Mobile view - Cards */}
            <div className="block md:hidden">
              <div className="space-y-4 p-4">
                {act.forms!.map((form) => (
                  <div key={form.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">
                          {form.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {form.description}
                        </p>
                        {form.sizeBytes && (
                          <span className="text-xs text-gray-500">
                            File size: {(form.sizeBytes / 1024).toFixed(1)} KB
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <a
                        href={form.fileUrl}
                        download
                        className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Excel
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop view - Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Form Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Download
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {act.forms!.map((form) => (
                    <tr key={form.id} className="hover:bg-gray-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          {form.title}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-md">
                          {form.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {form.sizeBytes ? `${(form.sizeBytes / 1024).toFixed(1)} KB` : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={form.fileUrl}
                          download
                          className="inline-flex items-center px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                        >
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Excel
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
