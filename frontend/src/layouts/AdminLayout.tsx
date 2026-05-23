import { Outlet } from 'react-router-dom';
import AdminSidebar from '../shared/partials/AdminSidebar';
import AdminHeader from '../shared/partials/AdminHeader';
import '../shared/styles/admin.css';

function AdminLayout() {
  return (
    <div className="admin-container">
      <AdminSidebar />
      
      <div className="admin-main">
        <AdminHeader />
        
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
