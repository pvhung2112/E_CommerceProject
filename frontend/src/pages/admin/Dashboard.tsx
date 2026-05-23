function Dashboard() {
  const stats = [
    { title: 'Tổng doanh thu', value: '₫250.500.000', change: '+12.5%', positive: true },
    { title: 'Tổng đơn hàng', value: '1.245', change: '+8.2%', positive: true },
    { title: 'Sản phẩm bán chạy', value: '89', change: '+5.1%', positive: true },
    { title: 'Người dùng mới', value: '156', change: '-2.3%', positive: false },
  ];

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">Tổng quan về hiệu suất cửa hàng của bạn</p>
      </div>

      {/* Statistics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-card-header">
              <div className="stat-card-title">{stat.title}</div>
              <div className="stat-card-icon">📊</div>
            </div>
            <div className="stat-card-value">{stat.value}</div>
            <div className={`stat-card-change ${stat.positive ? '' : 'negative'}`}>
              {stat.positive ? '↑' : '↓'} {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
        <div className="stat-card">
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>Doanh thu theo tháng</h3>
          <div style={{ height: '300px', backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            📈 Biểu đồ sẽ được hiển thị ở đây
          </div>
        </div>

        <div className="stat-card">
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>Phân bổ sản phẩm</h3>
          <div style={{ height: '300px', backgroundColor: '#f5f5f5', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>
            🥧 Biểu đồ sẽ được hiển thị ở đây
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="table-container" style={{ marginTop: '30px' }}>
        <div className="table-header">
          <div className="table-header-title">Đơn hàng gần đây</div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>ID Đơn hàng</th>
              <th>Khách hàng</th>
              <th>Số tiền</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#MS-90210</td>
              <td>Nguyễn Văn A</td>
              <td>₫125.000</td>
              <td><span className="table-status status-success">✓ Thành công</span></td>
              <td>22/05/2026</td>
            </tr>
            <tr>
              <td>#MS-90211</td>
              <td>Trần Thị B</td>
              <td>₫89.500</td>
              <td><span className="table-status status-processing">⊙ Đang xử lý</span></td>
              <td>22/05/2026</td>
            </tr>
            <tr>
              <td>#MS-90212</td>
              <td>Lê Minh C</td>
              <td>₫250.000</td>
              <td><span className="table-status status-pending">⏳ Chờ xác nhận</span></td>
              <td>21/05/2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
