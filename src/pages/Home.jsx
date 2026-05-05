import { useUsers } from "../hooks/useUsers";
import UserGrid from "../components/UserGrid";
import Loader from "../components/Loader";

const Home = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <Loader />;
  if (error) return (
    <div style={{
      textAlign: 'center',
      color: '#ffffff',
      padding: '50px',
      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
    }}>
      <h2>Error</h2>
      <p>{error}</p>
    </div>
  );

  return (
    <div className="container">
      <h2>Random Users</h2>
      <UserGrid users={users} />
    </div>
  );
};

export default Home;