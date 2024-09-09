const backendURL = import.meta.env.VITE_BACKEND_URL

const postData = async(userData) => {
    const response = await fetch (`${backendURL}/register`, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    return await response.json()
}

const userLogin= async(userData) => {
    const response = await fetch (`${backendURL}/login`, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    return await response.json()
}

const forgetPassword= async(userData) => {
    const response = await fetch (`${backendURL}/forget-password`, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    return await response.json()
}

const checkOtp= async(userData) => {
    const response = await fetch (`${backendURL}/check-otp`, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    return await response.json()
}

const resetPassword= async(userData) => {
    const response = await fetch (`${backendURL}/reset-password`, {
        method:"POST",
        body:JSON.stringify(userData),
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        }
    })
    return await response.json()
}

export {postData, userLogin, forgetPassword, checkOtp, resetPassword}