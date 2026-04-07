function CardComponent(props) {
  return (
    <>
      <h1 nombre>{props.nombre}</h1>
      <h2>{props.descripcion}</h2>
      <a href={props.link}></a>
      <img src={props.foto} alt="" />
      <img src={props.imagen} alt="" />
    </>
  );
}

export default CardComponent;
