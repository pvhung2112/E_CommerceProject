import { Link } from "react-router-dom";

// import { FaEye } from "react-icons/fa";

function LoginClients(){
return(
    <>
    <div className="container">
        <div className="form-card">
                <h2>đăng nhập</h2>
                <form className="form-auth">
                    <div>
                        <label htmlFor="">tài khoản</label>
                        <div>
                            <input type="text" name="gmail" />
                        </div>
                        
                    </div>
                    
                    <div>
                        <label htmlFor="">mật khẩu</label>
                        <div>
                            <input type="password" name="password"/>
                        </div>
                        
                    </div>
                    <div>
                        <Link to="/"> quên mật khẩu</Link>
                    </div>
                    
                    <button type="submit" >đăng nhập</button>
                    <div>
                        <span>chưa có tài khoản</span>
                         <Link to="/"> đăng kí</Link>
                    </div>
                </form>
        </div>
    </div>
    </>
)

}
export default LoginClients;