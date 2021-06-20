import axiosClient from './axiosClient'
const ReportedissuesApi = {
  getAll() {
    const url = "/api/v1/reported-issues/";
    return axiosClient.get(url);
  },
  createReportedissues(reportedissues) {
    const url = "/api/v1/reported-issues/";
    return axiosClient.post(url, reportedissues);
  },
  updateReportedissues(reportedissues) {
    const url = `/api/v1/reported-issues/${reportedissues.id}`;
    return axiosClient.put(url, reportedissues.data);
  },
  deleteReportedissues(reportedissues) {
    const url = `/api/v1/reported-issues/${reportedissues}/delete/`;
    return axiosClient.delete(url);
  },
};
export default ReportedissuesApi;