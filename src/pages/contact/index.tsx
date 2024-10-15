import Grid from "@mui/material/Grid2";
import ContactInfo from "../../components/contactInfo/ContactInfo";
import ContactForm from "./contactForm";
import styled from "styled-components";
import { Typography } from "@mui/material"; // Componentes do Material UI
// import MyMapComponent from "../../components/myMapComponent";

function Contact() {
  return (
    <>
      <section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 12 }} textAlign="left">
            <SectionTitle variant="h4">
              Vamos nos conectar? Envie Sua Mensagem!
            </SectionTitle>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ContactForm />
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap="20"
          >
            <Description>
              Pronto para transformar seu evento de TI em um sucesso? Na{" "}
              <strong>LifeTech Events</strong>, oferecemos soluções
              personalizadas em gestão e execução de eventos. Fale conosco e
              descubra como podemos tornar sua visão uma realidade.
            </Description>
            <ContactInfo />
          </Grid>
        </Grid>
      </section>
      {/* <MyMapComponent /> */}
    </>
  );
}

const SectionTitle = styled(Typography)`
  font-size: 2.5em;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const Description = styled(Typography)`
  font-size: 1em;
  color: ${(props) => props.theme.colors.gray};
  padding: 0 0 20px;
`;
export default Contact;
