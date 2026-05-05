import "../styles/userCard.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img
        src={user.picture?.large}
        alt="user"
        className="avatar"
      />

      <h3>
        {user.name?.first} {user.name?.last}
      </h3>

      <p>{user.email}</p>

      <p className="location">
        {user.location?.city}, {user.location?.country}
      </p>
    </div>
  );
};

export default UserCard;