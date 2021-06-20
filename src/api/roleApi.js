import axiosClient from './axiosClient'
const roleApi={
    getAll(){
        const url = "/api/v1/roles/";
        return axiosClient.get(url);
    },
    createRole(role){
        const url="/api/v1/roles/";
        return axiosClient.post(url,role); 
    },
    updateRole(role){
        const url=`/api/v1/roles/${role.id}`;
        return axiosClient.put(url,role.data);
    },
    deleteRole(role){
        const url=`/api/v1/roles/${role}/delete/`;
        return axiosClient.delete(url);
    },
    getbyId(role){
        const url=`/api/v1/roles/${role}`;
        return axiosClient.get(url)
    }
}
export default roleApi;