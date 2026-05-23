function Settings() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Cài đặt Hệ thống</h1>
        <p className="page-subtitle">Quản lý cài đặt chung của ứng dụng</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* General Settings */}
        <div className="stat-card">
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>⚙️ Cài đặt chung</h3>
          
          <div className="form-group">
            <label className="form-label">Tên cửa hàng</label>
            <input type="text" className="form-control" placeholder="Tên cửa hàng" defaultValue="Ecommerce Store" />
          </div>

          <div className="form-group">
            <label className="form-label">Email liên hệ</label>
            <input type="email" className="form-control" placeholder="Email" defaultValue="contact@ecommerce.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Số điện thoại</label>
            <input type="tel" className="form-control" placeholder="Số điện thoại" defaultValue="+84 123 456 789" />
          </div>

          <div className="form-group">
            <label className="form-label">Địa chỉ</label>
            <input type="text" className="form-control" placeholder="Địa chỉ" defaultValue="123 Đường ABC, TP. HCM" />
          </div>

          <button className="btn-admin btn-primary" style={{ width: '100%' }}>💾 Lưu</button>
        </div>

        {/* Security Settings */}
        <div className="stat-card">
          <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>🔒 Bảo mật</h3>
          
          <div className="form-group">
            <label className="form-label">Mật khẩu hiện tại</label>
            <input type="password" className="form-control" placeholder="Nhập mật khẩu hiện tại" />
          </div>

          <div className="form-group">
            <label className="form-label">Mật khẩu mới</label>
            <input type="password" className="form-control" placeholder="Nhập mật khẩu mới" />
          </div>

          <div className="form-group">
            <label className="form-label">Xác nhận mật khẩu mới</label>
            <input type="password" className="form-control" placeholder="Xác nhận mật khẩu mới" />
          </div>

          <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '6px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked />
              <span>Kích hoạt xác thực 2 yếu tố</span>
            </label>
          </div>

          <button className="btn-admin btn-primary" style={{ width: '100%' }}>💾 Lưu</button>
        </div>
      </div>

      {/* Email Settings */}
      <div className="stat-card" style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>📧 Cài đặt Email</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label className="form-label">SMTP Host</label>
            <input type="text" className="form-control" placeholder="smtp.gmail.com" defaultValue="smtp.gmail.com" />
          </div>

          <div className="form-group">
            <label className="form-label">SMTP Port</label>
            <input type="text" className="form-control" placeholder="587" defaultValue="587" />
          </div>

          <div className="form-group">
            <label className="form-label">Email gửi</label>
            <input type="email" className="form-control" placeholder="noreply@ecommerce.com" defaultValue="noreply@ecommerce.com" />
          </div>

          <div className="form-group">
            <label className="form-label">Mật khẩu</label>
            <input type="password" className="form-control" placeholder="Mật khẩu" />
          </div>
        </div>

        <button className="btn-admin btn-primary" style={{ marginTop: '15px' }}>💾 Lưu</button>
      </div>

      {/* Payment Settings */}
      <div className="stat-card" style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>💳 Cài đặt Thanh toán</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div className="form-group">
            <label className="form-label">Stripe API Key</label>
            <input type="text" className="form-control" placeholder="sk_test_..." />
          </div>

          <div className="form-group">
            <label className="form-label">PayPal Client ID</label>
            <input type="text" className="form-control" placeholder="Client ID" />
          </div>
        </div>

        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input type="checkbox" defaultChecked />
            <span>Kích hoạt thanh toán thẻ tín dụng</span>
          </label>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', marginBottom: '20px' }}>
          <input type="checkbox" defaultChecked />
          <span>Kích hoạt thanh toán PayPal</span>
        </label>

        <button className="btn-admin btn-primary">💾 Lưu</button>
      </div>

      {/* Backup & Export */}
      <div className="stat-card" style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>💾 Sao lưu & Xuất</h3>
        
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button className="btn-admin btn-primary">⬇️ Sao lưu dữ liệu</button>
          <button className="btn-admin btn-secondary">📊 Xuất báo cáo</button>
          <button className="btn-admin btn-secondary">📦 Xuất sản phẩm</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
