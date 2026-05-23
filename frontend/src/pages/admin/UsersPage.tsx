function Users() {
  const users = [
    { id: '#U001', name: 'Nguyễn Văn A', email: 'nguyen.a@example.com', role: 'Customer', joinDate: '15/03/2026', status: 'success' },
    { id: '#U002', name: 'Trần Thị B', email: 'tran.b@example.com', role: 'Customer', joinDate: '22/04/2026', status: 'success' },
    { id: '#U003', name: 'Lê Minh C', email: 'le.c@example.com', role: 'Admin', joinDate: '10/01/2026', status: 'success' },
    { id: '#U004', name: 'Phạm Văn D', email: 'pham.d@example.com', role: 'Customer', joinDate: '18/05/2026', status: 'pending' },
    { id: '#U005', name: 'Hoàng Thị E', email: 'hoang.e@example.com', role: 'Customer', joinDate: '25/02/2026', status: 'success' },
  ];

  return (
    <div>
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">Quản lý Người dùng</h1>
            <p className="page-subtitle">Quản lý tài khoản và quyền hạn người dùng</p>
          </div>
          <button className="btn-admin btn-primary">➕ Thêm người dùng</button>
        </div>
      </div>

      {/* Statistics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div className="stat-card">
          <div className="stat-card-title">Tổng người dùng</div>
          <div className="stat-card-value" style={{ color: '#667eea' }}>1.245</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-title">Người dùng mới (tháng)</div>
          <div className="stat-card-value" style={{ color: '#27ae60' }}>156</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-title">Admin</div>
          <div className="stat-card-value" style={{ color: '#e74c3c' }}>8</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-title">Hoạt động</div>
          <div className="stat-card-value" style={{ color: '#3498db' }}>892</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filter-section">
        <div className="filter-group">
          <label>Vai trò</label>
          <select>
            <option>Tất cả</option>
            <option>Admin</option>
            <option>Customer</option>
            <option>Seller</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Trạng thái</label>
          <select>
            <option>Tất cả</option>
            <option>Hoạt động</option>
            <option>Chờ xác nhận</option>
            <option>Bị khóa</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Tìm kiếm</label>
          <input type="text" placeholder="Tên hoặc email" />
        </div>
        <button className="btn-admin btn-secondary">🔍 Tìm kiếm</button>
      </div>

      {/* Users Table */}
      <div className="table-container">
        <div className="table-header">
          <div className="table-header-title">Danh sách người dùng</div>
          <span style={{ color: '#999' }}>Tổng: 1.245 người dùng</span>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Email</th>
              <th>Vai trò</th>
              <th>Ngày tham gia</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td style={{ fontWeight: '500' }}>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span style={{ 
                    backgroundColor: user.role === 'Admin' ? '#f8d7da' : '#d1ecf1',
                    color: user.role === 'Admin' ? '#721c24' : '#0c5460',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '12px'
                  }}>
                    {user.role}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td>
                  <span className={`table-status status-${user.status}`}>
                    {user.status === 'success' ? '✓ Hoạt động' : '⏳ Chờ'}
                  </span>
                </td>
                <td>
                  <button className="btn-admin btn-sm" style={{ backgroundColor: '#667eea', color: 'white', border: 'none', marginRight: '5px' }}>👁️ Xem</button>
                  <button className="btn-admin btn-sm btn-secondary">✏️ Sửa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button className="btn-admin btn-secondary">← Trước</button>
        <button className="btn-admin" style={{ backgroundColor: '#667eea', color: 'white', border: 'none' }}>1</button>
        <button className="btn-admin btn-secondary">2</button>
        <button className="btn-admin btn-secondary">3</button>
        <button className="btn-admin btn-secondary">Tiếp →</button>
      </div>
    </div>
  );
}

export default Users;
