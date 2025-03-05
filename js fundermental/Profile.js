const Profile = ({ name, email }) => {
    return (
      <div className="p-4 bg-gray-200 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default Profile;
  