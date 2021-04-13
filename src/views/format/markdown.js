import PageCard from "../../components/Card/Card"
import "./format.scss"


function MarkDown(props) {
    const title =props.location.query.title

    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            阿斯达
        </PageCard>
    )
}

export default MarkDown
