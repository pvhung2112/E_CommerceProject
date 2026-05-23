function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="admin-header-search">
        <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="search-icon">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input 
          type="text" 
          placeholder="Search orders, customers, or items..." 
        />
      </div>
      
      <div className="admin-header-actions">
        <button className="icon-btn notification-wrapper">
          <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          <span className="notification-badge"></span>
        </button>
        <button className="icon-btn">
          <svg stroke="currentColor" fill="none" strokeWidth="1.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="4" height="4" rx="1"></rect>
            <rect x="10" y="3" width="4" height="4" rx="1"></rect>
            <rect x="17" y="3" width="4" height="4" rx="1"></rect>
            <rect x="3" y="10" width="4" height="4" rx="1"></rect>
            <rect x="10" y="10" width="4" height="4" rx="1"></rect>
            <rect x="17" y="10" width="4" height="4" rx="1"></rect>
            <rect x="3" y="17" width="4" height="4" rx="1"></rect>
            <rect x="10" y="17" width="4" height="4" rx="1"></rect>
            <rect x="17" y="17" width="4" height="4" rx="1"></rect>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default AdminHeader;
