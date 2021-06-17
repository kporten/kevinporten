const Profile: React.FC = () => (
  <div className="relative w-64 h-64 group lg:w-20 lg:h-20">
    <div className="absolute inset-0 rounded-full bg-conic-gradient blur-xl" />
    <div className="absolute inset-0 rounded-full bg-conic-gradient blur-2xl opacity-60 animate-pulse" />
    <div className="absolute -inset-0.5 rounded-full bg-conic-gradient lg:group-hover:scale-150 lg:transition lg:duration-500" />
    <div className="absolute inset-0 lg:group-hover:scale-150 lg:transition lg:duration-500">
      <img
        src="/profile.png"
        alt="Kevin Porten"
        className="rounded-full pointer-events-none grayscale lg:group-hover:grayscale-0 lg:transition lg:duration-500"
        width="100%"
        height="100%"
      />
    </div>
  </div>
);

export default Profile;
