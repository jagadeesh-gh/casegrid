import { Notification } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface NotificationsTableProps {
  notifications: Notification[];
  actTitle: string;
}

export default function NotificationsTable({ notifications, actTitle }: NotificationsTableProps) {
  if (notifications.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
        </svg>
        <h3 className="mt-4 text-lg font-medium text-gray-900">No Notifications</h3>
        <p className="mt-2 text-sm text-gray-500">
          There are currently no notifications or updates for this act/rule.
        </p>
      </div>
    );
  }



  const getTypeColor = (type: string) => {
    switch (type) {
      case 'amendment':
        return 'bg-purple-100 text-purple-800';
      case 'update':
        return 'bg-blue-100 text-blue-800';
      case 'clarification':
        return 'bg-indigo-100 text-indigo-800';
      case 'implementation':
        return 'bg-green-100 text-green-800';
      case 'enforcement':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">
          Notifications & Updates for {actTitle}
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Recent notifications, amendments, and updates related to this act/rule
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
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                      {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
              

              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500">
                  <time dateTime={notification.date}>
                    {formatDate(notification.date)}
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
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(notification.type)}`}>
                    {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <time dateTime={notification.date}>
                    {formatDate(notification.date)}
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
  );
}
