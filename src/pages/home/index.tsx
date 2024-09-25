

type Props = {
    pageName?: string
}

const index = ({ pageName }: Props) => {
    return (
        <div>
            {pageName ?
                pageName
                : 'Home'
            }
            <h1>TechEvents Pro</h1>
            <p>
                Especialistas em Gestão de Eventos, Tecnologia e Inovação
            </p>
        </div>
    )
}

export default index
