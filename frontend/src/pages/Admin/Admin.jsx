import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/api";
import "./Admin.css";

const Admin = () => {
  const { isAdmin, login, logout } = useAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [temples, setTemples] = useState([]);
  const [form, setForm] = useState({
    templeId: "",
    name: "",
    city: "",
    state: "",
    deity: "",
    image: "",
    history: "",
    darshanTimings: "",
    guidelines: "",
    rituals: "",
    facilities: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);
  
  // Step 9: Added editingId state
  const [editingId, setEditingId] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login('admin', password);
    if (result.success) {
      setError('');
    } else {
      setError(result.message || 'Invalid password');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const loadTemples = async () => {
    try {
      const data = await api.getAllTemples();
      setTemples(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadTemples();
    }
  }, [isAdmin]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleAddTemple = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Clean up comma-separated strings safely
      const parsedRituals = form.rituals ? form.rituals.split(",").map(r => r.trim()) : [];
      const parsedFacilities = form.facilities ? form.facilities.split(",").map(f => f.trim()) : [];

      // Step 12: Added Update logic if editingId exists
      if (editingId) {
        await api.updateTemple(editingId, {
          ...form,
          templeId: Number(form.templeId),
          rating: Number(form.rating),
          rituals: parsedRituals,
          facilities: parsedFacilities
        });
        alert("Temple Updated");
        setEditingId(null);
        
        // Reset form
        setForm({
          templeId: "", name: "", city: "", state: "", deity: "",
          image: "", history: "", darshanTimings: "", guidelines: "",
          rituals: "", facilities: "", rating: 5
        });
        
        loadTemples();
        return; // Stops execution so it doesn't create a new temple
      }

      // Add New Temple Logic
      await api.addTemple({
        ...form,
        templeId: Number(form.templeId),
        rituals: parsedRituals,
        facilities: parsedFacilities,
        rating: Number(form.rating)
      });

      alert("Temple Added Successfully");
      
      setForm({
        templeId: "", name: "", city: "", state: "", deity: "",
        image: "", history: "", darshanTimings: "", guidelines: "",
        rituals: "", facilities: "", rating: 5
      });
      loadTemples();
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Step 10: Added handleDelete function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this temple?"
    );
    if (!confirmDelete) return;

    try {
      await api.deleteTemple(id);
      alert("Temple Deleted");
      loadTemples();
    } catch (err) {
      alert(err.message);
    }
  };

  // Step 11: Added handleEdit function
  const handleEdit = (temple) => {
    setEditingId(temple.templeId);
    setForm({
      templeId: temple.templeId,
      name: temple.name,
      city: temple.city,
      state: temple.state,
      deity: temple.deity,
      image: temple.image || "",
      history: temple.history || "",
      darshanTimings: temple.darshanTimings || "",
      guidelines: temple.guidelines || "",
      rituals: temple.rituals ? temple.rituals.join(",") : "",
      facilities: temple.facilities ? temple.facilities.join(",") : "",
      rating: temple.rating
    });
  };

  if (!isAdmin) {
    return (
      <div className="admin-login-container container">
        <div className="login-card">
          <h2>Admin Login</h2>
          <p>Please enter the admin password to access the dashboard.</p>
          <form onSubmit={handleLogin} className="login-form">
            <input 
              type="password" 
              placeholder="Password (hint: admin123)" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-msg">{error}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard container">
      <div className="admin-dashboard-header">
        <h1>Admin Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <form className="temple-form" onSubmit={handleAddTemple}>
        {/* Dynamic Heading based on mode */}
        <h2>{editingId ? "Update Temple" : "Add New Temple"}</h2>

        <input
          name="templeId"
          placeholder="Temple ID"
          value={form.templeId}
          onChange={handleChange}
          required
        />
        <input
          name="name"
          placeholder="Temple Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
        />
        <input
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          required
        />
        <input
          name="deity"
          placeholder="Deity"
          value={form.deity}
          onChange={handleChange}
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <textarea
          name="history"
          placeholder="Temple History"
          value={form.history}
          onChange={handleChange}
        />
        <input
          name="darshanTimings"
          placeholder="Darshan Timings"
          value={form.darshanTimings}
          onChange={handleChange}
        />
        <textarea
          name="guidelines"
          placeholder="Visitor Guidelines"
          value={form.guidelines}
          onChange={handleChange}
        />
        <input
          name="rituals"
          placeholder="Rituals (comma separated)"
          value={form.rituals}
          onChange={handleChange}
        />
        <input
          name="facilities"
          placeholder="Facilities (comma separated)"
          value={form.facilities}
          onChange={handleChange}
        />
        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          value={form.rating}
          onChange={handleChange}
        />

        {/* Step 14: Dynamic Button Text */}
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : editingId ? "Update Temple" : "Add Temple"}
        </button>
      </form>

      <hr />

      <h2>Temple List</h2>
      <table className="temple-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {temples.map((temple) => (
            <tr key={temple._id || temple.templeId}>
              <td>{temple.templeId}</td>
              <td>{temple.name}</td>
              <td>{temple.city}</td>
              <td>{temple.state}</td>
              <td>{temple.rating}</td>
              <td>
                {/* Step 13: Replaced with dynamic Action buttons */}
                <button onClick={() => handleEdit(temple)}>
                  Edit
                </button>
               <button onClick={() => handleDelete(temple.templeId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;