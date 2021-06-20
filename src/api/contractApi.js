import axiosClient from './axiosClient'
const contractsApi = {
  getAll() {
    const url = "/api/v1/contracts/";
    return axiosClient.get(url);
  },
  createcontracts(contracts) {
    const url = "/api/v1/contracts/";
    return axiosClient.post(url, contracts);
  },
  deletecontracts(contracts) {
    const url = `/api/v1/contracts/${contracts}/delete/`;
    return axiosClient.delete(url);
  },
  updatecontracts(contracts) {
    const url = `/api/v1/contracts/${contracts.id}/`;
    return axiosClient.put(url, contracts.data);
  },
  getContractbytenantName(params){
    const url = `/api/v1/contracts/search-by-tenant-name/?tenantName=${params}`;
    return axiosClient.get(url);
  },
   getContractbyownerName(params){
    const url = `/api/v1/contracts/search-by-owner-name/?ownerName=${params}`;
    return axiosClient.get(url);
  }
};
export default contractsApi;