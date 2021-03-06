import PageCard from "../../components/Card/Card"
import {Input} from 'antd';
import "../other/format.scss"
import ReactJson from 'react-json-view'
import {useState} from "react"
import useTitle from "../../utils/tool";

const {TextArea} = Input;

function FormatJson(props) {
    const title = useTitle(props.match)

    const [jsonValue, setJsonValue] = useState({})
    const setInputValue = (e) => {
        try {
            setJsonValue(JSON.parse(e.target.value))
        } catch (e) {
            setJsonValue({})
        }
    }
    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div className="json-content">
                <div style={{width: '50%'}}>
                    <TextArea placeholder="输入内容" style={{height: "600px"}} onChange={(e) => {
                        setInputValue(e)
                    }}/>
                </div>
                <div style={{width: '50%', padding: "0 20px"}}>
                    <ReactJson name={false} sortKeys={false} enableClipboard={false} theme="summerfruit:inverted"
                               src={jsonValue}/>
                </div>
            </div>
        </PageCard>
    )
}

export default FormatJson
