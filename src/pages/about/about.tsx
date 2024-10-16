import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const About = () => {
  const imgEvent = "/assets/imgs/seminarSpeaker.webp";
  return (
    <section>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 4 }}>
          <img src={imgEvent} alt="Evento de tecnologia" />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="h4" component="h5">
            LifeTech Events
          </Typography>
          <p>
            Especialistas em Gestão de Eventos Focados em Tecnologia e Inovação
          </p>

          <p>
            A <strong>LifeTech Events</strong> é uma empresa especializada na
            gestão de eventos focados em tecnologia e inovação. Com uma equipe
            apaixonada por transformar ideias em experiências memoráveis, a
            LifeTech Events une expertise em planejamento e execução de eventos
            com profundo conhecimento das mais recentes tendências tecnológicas.
          </p>

          <p>
            Nossa missão é proporcionar eventos dinâmicos, imersivos e altamente
            interativos, que conectem profissionais, empresas e visionários,
            criando um ambiente propício para a troca de conhecimento e para a
            construção de redes de inovação.
          </p>

          <p>
            Atuando desde conferências e hackathons até grandes feiras e
            lançamentos de produtos, a LifeTech Events se destaca por incorporar
            tecnologia de ponta em cada detalhe — desde o uso de plataformas
            digitais inteligentes para gerenciamento de inscrições até a criação
            de experiências virtuais e híbridas que expandem os limites
            tradicionais dos eventos.
          </p>

          <p>
            Nosso foco é atender empresas do setor de TI, startups e
            organizações que buscam fomentar o avanço tecnológico em seus
            negócios. Cada evento é cuidadosamente customizado, garantindo que
            as necessidades e os objetivos de nossos clientes sejam atendidos
            com precisão e inovação.
          </p>

          <p>
            Com um time experiente em gestão de projetos, metodologias ágeis e
            planejamento estratégico, estamos sempre à frente, antecipando
            necessidades e soluções para garantir o sucesso de cada evento. Na{" "}
            <strong>LifeTech Events</strong>, o futuro da inovação se encontra
            com a excelência em gestão de eventos.
          </p>
        </Grid>
      </Grid>
    </section>
  );
};

export default About;
