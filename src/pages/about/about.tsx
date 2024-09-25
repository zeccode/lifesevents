

const About = () => {
    const styles = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            color: '#333',
        },
        title: {
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
        },
        subtitle: {
            fontSize: '18px',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#555',
        },
        text: {
            fontSize: '16px',
            marginBottom: '15px',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.text}>TechEvents Pro</h1>
            <p style={styles.text}>
                Especialistas em Gestão de Eventos Focados em Tecnologia e Inovação
            </p>

            <p style={styles.text}>
                A <strong>TechEvents Pro</strong> é uma empresa especializada na gestão de eventos focados em tecnologia e inovação.
                Com uma equipe apaixonada por transformar ideias em experiências memoráveis, a TechEvents Pro une expertise
                em planejamento e execução de eventos com profundo conhecimento das mais recentes tendências tecnológicas.
            </p>

            <p style={styles.text}>
                Nossa missão é proporcionar eventos dinâmicos, imersivos e altamente interativos, que conectem profissionais,
                empresas e visionários, criando um ambiente propício para a troca de conhecimento e para a construção de redes de inovação.
            </p>

            <p style={styles.text}>
                Atuando desde conferências e hackathons até grandes feiras e lançamentos de produtos, a TechEvents Pro se destaca
                por incorporar tecnologia de ponta em cada detalhe — desde o uso de plataformas digitais inteligentes para gerenciamento
                de inscrições até a criação de experiências virtuais e híbridas que expandem os limites tradicionais dos eventos.
            </p>

            <p style={styles.text}>
                Nosso foco é atender empresas do setor de TI, startups e organizações que buscam fomentar o avanço tecnológico em seus negócios.
                Cada evento é cuidadosamente customizado, garantindo que as necessidades e os objetivos de nossos clientes sejam atendidos
                com precisão e inovação.
            </p>

            <p style={styles.text}>
                Com um time experiente em gestão de projetos, metodologias ágeis e planejamento estratégico, estamos sempre à frente,
                antecipando necessidades e soluções para garantir o sucesso de cada evento. Na <strong>TechEvents Pro</strong>, o futuro
                da inovação se encontra com a excelência em gestão de eventos.
            </p>
        </div>
    );
};

export default About;
