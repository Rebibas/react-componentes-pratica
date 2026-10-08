function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>{props.descricao}</p>
      <p>R$:{props.preco}</p>
      <h2>{props.disponivel ? "Disponível" : "Indisponível"}</h2>
      <div>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Produto;