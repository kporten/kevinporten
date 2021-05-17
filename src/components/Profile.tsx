const Profile: React.FC = () => (
  <div className="group relative w-64 h-64 lg:w-20 lg:h-20">
    <div className="absolute inset-0 rounded-full bg-conic-gradient filter blur-xl" />
    <div className="absolute inset-0 rounded-full bg-conic-gradient filter blur-2xl opacity-60 animate-pulse" />
    <div className="absolute -inset-0.5 rounded-full bg-conic-gradient lg:group-hover:transform lg:group-hover:scale-150 lg:transition lg:duration-500" />
    <div className="absolute inset-0 lg:group-hover:transform lg:group-hover:scale-150 lg:transition lg:duration-500">
      <img
        src="/profile.png"
        alt="Kevin Porten"
        className="pointer-events-none rounded-full filter grayscale lg:group-hover:grayscale-0 lg:transition lg:duration-500"
        width="100%"
        height="100%"
      />
    </div>
  </div>
);

export default Profile;
