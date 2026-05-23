
import type { SubmitEvent } from "react";
import { useNavigate } from "react-router-dom";
function CreateProduct() {
    const navigate = useNavigate();
    const handleSubmit = (e :  SubmitEvent<HTMLFormElement>)  =>{
         e.preventDefault();

        const form  = e.currentTarget;
        const formdata = new FormData(form);
       const data = Object.fromEntries(formdata); 
       console.log(data);
       fetch("http://localhost:5000/admin/api/v1/products/create",{
        method : "POST",
         headers: {
        "Content-Type": "application/json"
        },
         body: JSON.stringify(data)
       }).then(
        (res)=>{ return res.json() }
       ).then((data)=>{
            console.log(data);
            navigate(-1);
       })
    }
    
    return (
        
        <div>
            {/* Page Header */}
            <div className="page-header" >
                <div className="cp-header-row">
                    <div>
                        <h1 className="page-title">Tạo sản phẩm mới</h1>
                        <p className="page-subtitle">Điền thông tin để thêm sản phẩm vào cửa hàng</p>
                    </div>
                    <button className="btn-admin btn-secondary" onClick={ ()=> navigate(-1)}>← Quay lại</button>
                </div>
            </div>

            {/* Form Card */}
            <div className="table-container cp-form-card" >
                <div className="table-header">
                    <span className="table-header-title">📦 Thông tin sản phẩm</span>
                </div>

                <form className="cp-form" noValidate   onSubmit={handleSubmit}>

                    {/* Tên sản phẩm */}
                    <div className="cp-field">
                        <label htmlFor="product-name" className="cp-label">
                            Tên sản phẩm <span className="cp-required">*</span>
                        </label>
                        <input
                            id="product-name"
                            name="name"
                            type="text"
                            className="cp-input"
                            placeholder="Nhập tên sản phẩm..."
                        />
                    </div>

                    {/* Giá tiền */}
                    <div className="cp-field">
                        <label className="cp-label">
                            Giá sản phẩm <span className="cp-required">*</span>
                        </label>
                        <div className="cp-price-row">
                            <div className="cp-price-amount">
                                <label htmlFor="product-amount" className="cp-sublabel">Số tiền</label>
                                <input
                                    id="product-amount"
                                    type="number"
                                    name="amount"
                                    min={0}
                                    className="cp-input"
                                    placeholder="0"
                                />
                            </div>

                            <div className="cp-price-currency">
                                <label htmlFor="product-currency" className="cp-sublabel">Đơn vị</label>
                                <div className="cp-select-wrapper">
                                    <select id="product-currency" className="cp-select" name = "currency">
                                        <option value="VND">VND ₫</option>
                                        <option value="USD">USD $</option>
                                        <option value="EUR">EUR €</option>
                                    </select>
                                    <span className="cp-select-chevron">▾</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mô tả */}
                    <div className="cp-field">
                        <label htmlFor="product-description" className="cp-label">
                            Mô tả sản phẩm <span className="cp-required">*</span>
                        </label>
                        <textarea
                            id="product-description"
                            rows={5}
                            name = "description"
                            className="cp-input cp-textarea"
                            placeholder="Nhập mô tả chi tiết về sản phẩm..."
                        />
                    </div>

                    {/* Actions */}
                    <div className="cp-actions">
                        <button type="button" className="btn-admin btn-secondary">Huỷ</button>
                        <button type="submit" className="btn-admin cp-btn-submit" >✅ Tạo sản phẩm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;