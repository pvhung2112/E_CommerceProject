
import type { SubmitEvent } from "react";
type props ={
    eventForm : (e: SubmitEvent<HTMLFormElement>) => void
}
function ProductForm({eventForm} : props){
    return(
        <>

                <form className="cp-form" noValidate onSubmit={eventForm}>

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

        </>
    )
}
export default ProductForm;