import React, { useState } from "react";
import styled from "styled-components";
import { CheckCircle } from "@mui/icons-material"; // Ícone de check
import { Typography, Card as MuiCard, CardContent } from "@mui/material"; // Componentes do Material UI

type Plan = {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted?: boolean;
};

const plansData: Plan[] = [
  {
    title: "Básico",
    description: "Ideal para eventos pequenos e simples.",
    price: "R$ 1.000",
    features: [
      "Planejamento básico",
      "Coordenação no dia do evento",
      "Suporte telefônico",
    ],
  },
  {
    title: "Padrão",
    description: "Para eventos de médio porte com mais necessidades.",
    price: "R$ 3.500",
    features: [
      "Planejamento completo",
      "Equipe de apoio no dia do evento",
      "Fornecedores selecionados",
      "Suporte por e-mail e telefone",
    ],
  },
  {
    title: "Completo",
    description: "Gestão total para eventos de grande porte.",
    price: "R$ 7.000",
    features: [
      "Planejamento personalizado",
      "Gestão de todos os fornecedores",
      "Equipe completa no evento",
      "Apoio logístico e administrativo",
      "Suporte dedicado",
    ],
  },
  {
    title: "Personalizado",
    description: "Criação de um plano exclusivo para suas necessidades.",
    price: "Sob consulta",
    features: [
      "Consultoria especializada",
      "Soluções customizadas",
      "Equipe e recursos conforme demanda",
      "Atendimento prioritário",
    ],
    isHighlighted: true,
  },
];

const Plans: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container>
      <SectionTitle variant="h4">Confira Nossos Planos</SectionTitle>
      <SectionDescription>
        Escolha o plano ideal para a gestão e execução do seu evento. Oferecemos
        opções que se adaptam a diferentes necessidades e tamanhos de evento.
        Torne seu evento inesquecível com a nossa ajuda!
      </SectionDescription>
      {plansData.map((plan, index) => (
        <MuiCard
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            width: "250px",
            margin: "10px",
            border: plan.isHighlighted ? "2px solid #1976d2" : "none",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            filter:
              hoveredIndex !== null && hoveredIndex !== index
                ? "blur(1.5px)"
                : "none",
            transition: "transform 0.3s ease, filter 0.3s ease",
          }}
        >
          <CardContent>
            <Title variant="h5">{plan.title}</Title>
            <Description>{plan.description}</Description>
            <Price>{plan.price}</Price>
            <Features>
              {plan.features.map((feature, i) => (
                <Feature key={i}>
                  <CheckCircle className="icon" /> <span>{feature}</span>
                </Feature>
              ))}
            </Features>
          </CardContent>
        </MuiCard>
      ))}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Title = styled(Typography)`
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.gray};
  font-weight: 400;
`;

const Description = styled(Typography)`
  font-size: 1em;
  color: ${(props) => props.theme.colors.gray};
`;

const Price = styled(Typography)`
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin: 10px 0;
`;

const Features = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 0.9em;
  color: #333;
`;

const Feature = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 5px 0;
  flex-direction: row;
  .icon {
    width: 20px;
    color: ${(props) => props.theme.colors.primary};
    margin-right: 8px;
  }
  span {
    text-align: left;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2.5em;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 10px;
`;

const SectionDescription = styled(Typography)`
  font-size: 1.2em;
  color: #777; /* Cor para a descrição */
  margin-bottom: 30px;
  text-align: center;
`;

export default Plans;
