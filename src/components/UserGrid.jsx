import UserCard from "./UserCard";
import "../styles/grid.css";

const UserGrid = ({ users }) => {
  return (
    <div className="grid">
      {users.map((u, index) => (
        <UserCard key={index} user={u} />
      ))}
    </div>
  );
};

export default UserGrid;