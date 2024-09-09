import { useNavigate, Link} from "react-router-dom";
import { useState } from "react";
import { postData } from "./apis";

const Register = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [showPassIcon, setshowPassIcon] = useState(true)
    const [showPassword, setshowPassword] = useState("password")
    const [showIncorrect, setshowIncorrect] = useState(false)
    function passwordView(){
        setshowPassIcon(false)
        setshowPassword("text")
    }
    function passwordHide(){
        setshowPassIcon(true)
        setshowPassword("password")
    }
    const handleChange = (e) => {
        const { name, value} = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit=async(e) => {
        e.preventDefault();
        setLoading(true)
        const data = await postData(formData)

        if(data.code==1){
            setLoading(false)
            setshowIncorrect(true)
            setTimeout(() => {
                (setshowIncorrect(false))
            }, 3000);
        } else {
            navigate('/login')
        }
    }
    if(loading){
        return <div className="spinner-border text-danger" role="status" style={{position:'fixed', top:"50%", left:"50%"}}>
            <span className="sr-only">Loading...</span>
        </div>
    }
    return (
        <div className="container mt-5">
            {showIncorrect &&  <div className="position-fixed p-1 text-danger border border-danger  w-100"
       style={{top:"4%",left:"50%", transform: 'translate(-50%, -50%)',backgroundColor:"#ff000027",textAlign:"center"}} >
        Email  already exist! Please enter new Email </div>}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card"  style={{border:"none"}}>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        style={{width:"94%"}}
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control mb-3"
                                        style={{width:"94%"}}
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <div className='box d-flex align-items-center'>
                                    <input
                                        type={showPassword}
                                        className="form-control mb-3"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {showPassIcon ? <i className="fa-solid fa-eye pb-2 ps-2" onClick={passwordView} style={{float:"right"}}></i> :
                  <i className="fa-solid fa-eye-slash pb-2 ps-2" onClick={passwordHide} style={{float:"right"}}></i>}
                  </div>
            </div>
                                <button type="submit" className="btn btn-primary btn-block">sign up</button>
                                <Link to="/login" style={{float:"right"}}>sign in</Link>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;








