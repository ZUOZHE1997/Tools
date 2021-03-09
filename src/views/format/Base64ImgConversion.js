import PageCard from "../../components/Card/Card"
import "./format.css"


function Binary(props) {
    const title = props.match.params.title

    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            asd
        </PageCard>
    )
}

export default Binary
