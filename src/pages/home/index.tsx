

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
        </div>
    )
}

export default index
