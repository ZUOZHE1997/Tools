import PageCard from "../../components/Card/Card"
import {Input, Button} from 'antd';
import "./format.scss"
import {useState} from "react"

const {TextArea} = Input;

function Base64(props) {
    const title = props.match.params.title
    const [inCoding, setInCoding] = useState("")
    const [outCoding, setOutCoding] = useState("")
    const coding = () => {
        const a = new Buffer(inCoding)
        setOutCoding(a.toString('base64'))
    }
    const decoding = () => {
        const str = new Buffer(inCoding, 'base64')
        setOutCoding(str.toString())
    }
    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div className="base64-content">
                <TextArea className="base64-input"
                          placeholder="输入内容框"
                          autoSize={{minRows: 10, maxRows: 10}}
                          onChange={(e) => {
                              setInCoding(e.target.value)
                          }}
                />
                <TextArea className="base64-input"
                          onChange={(e) => {
                              setOutCoding(e.target.value)
                          }}
                          placeholder="输出内容框"
                          autoSize={{minRows: 10, maxRows: 10}}
                          value={outCoding}
                />
            </div>

            <Button onClick={() => {
                coding()
            }} className="base64-btn" type="primary">编码</Button>
            <Button onClick={() => {
                decoding()
            }} className="base64-btn" type="primary">解码</Button>
        </PageCard>
    )
}

export default Base64
