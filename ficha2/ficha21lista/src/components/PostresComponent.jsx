function PostresComponent() {
  const postres = [
    "Frutillas con crema",
    "Cheesecake",
    "Helado de frambuesa",
    "Creme brulée",
    "Massini",
  ];

  return (
    <ul>
      {postres.map((postre, index) => (
        <li key={index}>{postre}</li>
      ))}
    </ul>
  );
}

export default PostresComponent;
