import React from "react";
import styled from "styled-components";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: <MailIcon />,
      label: "Email",
      value: "contato@ficticia.com",
      link: "mailto:contato@ficticia.com",
    },
    {
      icon: <LocationOnIcon />,
      label: "Endereço",
      value: "Av. Exemplo, 123 - Centro, Cidade, Estado",
      link: "https://goo.gl/maps/exemplo",
    },
    {
      icon: <PhoneIcon />,
      label: "Telefone",
      value: "(11) 1234-5678",
      link: "tel:+551112345678",
    },
    {
      icon: <WhatsAppIcon />,
      label: "WhatsApp",
      value: "(11) 98765-4321",
      link: "https://wa.me/5511987654321",
    },
  ];

  return (
    <Container>
      {contactDetails.map((detail, index) => (
        <ContactItem key={index}>
          <IconContainer>{detail.icon}</IconContainer>
          <ContactText>
            <Label>{detail.label}:</Label>
            <Link href={detail.link} target="_blank" rel="noopener noreferrer">
              {detail.value}
            </Link>
          </ContactText>
        </ContactItem>
      ))}
    </Container>
  );
};

export default ContactInfo;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  /* color: ${({ theme }) => theme.colors.primary}; */
  border-radius: 8px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f9f9f9;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
