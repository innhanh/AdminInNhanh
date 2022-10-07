import { toast } from "react-toastify";
import axios from "axios";
import { axiosClient } from "./AxiosClient";
const baseURL = "http://localhost:8080/api/v1";

export const ApiConfig = {
    Authen: {
        Login: async (userName, pass, key, navigate, dispath, loginAdminSuccess) => {
            await axiosClient({
                method: 'post',
                url: "/admin/authen/login",
                data: {
                    userName: userName,
                    pass: pass,
                    key: key
                }
            }).then((res) => {
                dispath(loginAdminSuccess(res.data.admin));
                toast.success(res.data.mess)
                navigate("/dashboard");
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        },
        Logout: async () => {

        },
        Register: async (userName, pass, key, navigate) => {
            await axiosClient({
                method: "post",
                url: "/admin/authen/register",
                data: {
                    userName: userName,
                    pass: pass,
                    key: key
                }
            }).then((res) => {
                toast.success(res.data.mess)
                navigate("/");
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        },
        FogotPass: async (email) => {
            alert(email)
        }
    },
    Categorys: {
        GetAll: async (dispath, ListCateSuccess) => {
            await axios({
                method: "get",
                url: baseURL + "/categorys/list"
            }).then((res) => {
                dispath(ListCateSuccess(res.data.Categorys));
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        }
    },
    Avata: {
        GetAvata: async (idUser) => {
            await axiosClient({
                method: "get",
                url: `/admin/images/${idUser}`
            }).then((res) => {
                console.log(res.data)
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        }
    },
    Companys: {
        Detail: async (id, dispath, CompanySuccess) => {
            await axiosClient({
                method: "get",
                url: `/admin/manager/companys/${id}`
            }).then((res) => {
                dispath(CompanySuccess((res.data.Company)))
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        },
        Branchs: {
            Add: async (idCompany) => {
                await axiosClient({
                    method: "post",
                    url: `/admin/manager/companys/branchs/${idCompany}`
                }).then((res) => {
                    toast.success(res.data.mess)
                }).catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        console.log("Error", err.message);
                    }
                })
            },
            Edit: async (id, newName, newAdress, newPhone, newEmail, newZalo) => {
                await axiosClient({
                    method: "put",
                    url: `/admin/manager/companys/branchs/${id}`,
                    data: {
                        newName: newName,
                        newAdress: newAdress,
                        newPhone: newPhone,
                        newEmail: newEmail,
                        newZalo: newZalo
                    }
                }).then((res) => {
                    toast.success(res.data.mess)
                }).catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        console.log("Error", err.message);
                    }
                })
            },
            Delete: async (id) => {
                await axiosClient({
                    method: "delete",
                    url: `/admin/manager/companys/branchs/${id}`
                }).then((res) => {
                    toast.success(res.data.mess)
                }).catch((err) => {
                    if (err.response) {
                        toast.error(err.response.data.error)
                    } else {
                        console.log("Error", err.message);
                    }
                })
            }
        }
    },
    Maintenances: {
        Check: async (setMaintance) => {
            await axiosClient({
                method: "get",
                url: "/maintenances/check"
            }).then((res) => {
                setMaintance(res.data.Maintenance.on)
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        },
        Edit: async (status) => {
            await axiosClient({
                method: "put",
                url: `/maintenances/${status}`,
                data: {
                    status: status
                }
            }).then((res) => {
                toast.success(res.data.mess)
            }).catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.error)
                } else {
                    console.log("Error", err.message);
                }
            })
        }
    }
}