import { useState } from 'react';

interface Order {
  id: string;
  idNum: string;
  customerName: string;
  customerEmail: string;
  avatarInitials: string;
  seller: string;
  total: string;
  paymentStatus: 'SUCCESS' | 'PENDING' | 'FAILED';
  shippingStatus: 'In Transit' | 'Delivered' | 'Awaiting Dispatch' | 'On Hold';
}

function Orders() {
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Pending' | 'Fulfilled' | 'Cancelled'>('All');

  const orders: Order[] = [
    {
      id: '#MS-',
      idNum: '90210',
      customerName: 'Elena Dupont',
      customerEmail: 'elena.d@luxury.com',
      avatarInitials: 'ED',
      seller: "L'Artisan Paris",
      total: '$2,450.00',
      paymentStatus: 'SUCCESS',
      shippingStatus: 'In Transit'
    },
    {
      id: '#MS-',
      idNum: '90211',
      customerName: 'Takashi K.',
      customerEmail: 't.kenji@kyoto.jp',
      avatarInitials: 'TK',
      seller: 'Kyoto Ceramics',
      total: '$1,120.00',
      paymentStatus: 'SUCCESS',
      shippingStatus: 'Delivered'
    },
    {
      id: '#MS-',
      idNum: '90212',
      customerName: 'Marco Silva',
      customerEmail: 'marco@milano.it',
      avatarInitials: 'MS',
      seller: 'Milan Atelier',
      total: '$4,800.00',
      paymentStatus: 'PENDING',
      shippingStatus: 'Awaiting Dispatch'
    },
    {
      id: '#MS-',
      idNum: '90213',
      customerName: 'Julianne H.',
      customerEmail: 'j.h@modern.com',
      avatarInitials: 'JH',
      seller: 'Nordic Woodworks',
      total: '$890.00',
      paymentStatus: 'FAILED',
      shippingStatus: 'On Hold'
    }
  ];

  return (
    <div className="orders-page-container">
      {/* Top Banner Title & Description */}
      <div className="orders-header-row">
        <div className="orders-title-block">
          <h1 className="orders-title">Global Orders</h1>
          <p className="orders-subtitle">
            A comprehensive ledger of every transaction within the Maison ecosystem.<br />
            Monitor cross-vendor commerce and fulfillment excellence.
          </p>
        </div>
        <button className="btn-export">
          <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Export CSV
        </button>
      </div>

      {/* Filter Section */}
      <div className="orders-filter-section">
        <div className="orders-filter-item">
          <span className="filter-label">FILTER BY SELLER</span>
          <div className="select-wrapper">
            <select defaultValue="All Global Sellers">
              <option>All Global Sellers</option>
              <option>L'Artisan Paris</option>
              <option>Kyoto Ceramics</option>
              <option>Milan Atelier</option>
              <option>Nordic Woodworks</option>
            </select>
            <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="select-chevron">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>

        <div className="orders-filter-item">
          <span className="filter-label">TIME HORIZON</span>
          <div className="select-wrapper">
            <select defaultValue="Last 30 Days">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 90 Days</option>
              <option>Custom Range</option>
            </select>
            <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="14" width="14" xmlns="http://www.w3.org/2000/svg" className="select-chevron">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>

        <div className="orders-filter-item status-buttons-wrapper">
          <span className="filter-label">ORDER STATUS</span>
          <div className="status-buttons">
            {(['All', 'Pending', 'Fulfilled', 'Cancelled'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`status-btn ${selectedStatus === status ? 'active' : ''}`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="orders-filter-clear">
          <button className="clear-filters-btn">Clear All Filters</button>
        </div>
      </div>

      {/* Orders Table Container */}
      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>SELLER</th>
              <th>TOTAL AMOUNT</th>
              <th>PAYMENT</th>
              <th>SHIPPING</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.idNum}>
                <td className="col-order-id">
                  <div className="order-id-content">
                    <span className="id-prefix">{order.id}</span>
                    <span className="id-number">{order.idNum}</span>
                  </div>
                </td>
                <td className="col-customer">
                  <div className="customer-content">
                    <div className="avatar-circle">
                      {order.avatarInitials}
                    </div>
                    <div className="customer-info">
                      <span className="customer-name">{order.customerName}</span>
                      <span className="customer-email">{order.customerEmail}</span>
                    </div>
                  </div>
                </td>
                <td className="col-seller">
                  {order.seller}
                </td>
                <td className="col-total">
                  {order.total}
                </td>
                <td className="col-payment">
                  <span className={`payment-badge badge-${order.paymentStatus.toLowerCase()}`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="col-shipping">
                  <div className={`shipping-status-group status-${order.shippingStatus.toLowerCase().replace(' ', '-')}`}>
                    {order.shippingStatus === 'In Transit' && (
                      <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                    )}
                    {order.shippingStatus === 'Delivered' && (
                      <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    )}
                    {order.shippingStatus === 'Awaiting Dispatch' && (
                      <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    )}
                    {order.shippingStatus === 'On Hold' && (
                      <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                    )}
                    <span className="shipping-text">{order.shippingStatus}</span>
                  </div>
                </td>
                <td className="col-action">
                  <button className="action-btn">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Orders;
