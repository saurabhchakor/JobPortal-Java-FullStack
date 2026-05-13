import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/admin/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-8 text-white mt-20">
      <h1 className="text-3xl mb-6 font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-mine-shaft-900 p-5 rounded-xl">
          <h2>Total Jobs</h2>
          <p className="text-2xl">{data.totalJobs}</p>
        </div>

        <div className="bg-mine-shaft-900 p-5 rounded-xl">
          <h2>Total Users</h2>
          <p className="text-2xl">{data.totalUsers}</p>
        </div>

        <div className="bg-mine-shaft-900 p-5 rounded-xl">
          <h2>Applications</h2>
          <p className="text-2xl">{data.totalApplications}</p>
        </div>

        <div className="bg-green-600 p-5 rounded-xl">
          <h2>Hired</h2>
          <p className="text-2xl">{data.hired}</p>
        </div>

        <div className="bg-red-600 p-5 rounded-xl">
          <h2>Rejected</h2>
          <p className="text-2xl">{data.rejected}</p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;