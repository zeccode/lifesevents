type Props = {
  pageName?: string;
};

const index = ({ pageName }: Props) => {
  return (
    <section>
      {pageName ? pageName : "Home"}
      <h1>TechEvents Pro</h1>
      <p>Especialistas em Gestão de Eventos, Tecnologia e Inovação</p>
    </section>
  );
};

export default index;
