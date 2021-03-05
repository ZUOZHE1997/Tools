import PageCard from "../../components/Card/Card"
import {Input} from 'antd';
import "./format.css"
import ReactJson from 'react-json-view'
import {useState} from "react"

const {TextArea} = Input;

export function FormatJson(props) {

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
        }} title="JSON 格式化">
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