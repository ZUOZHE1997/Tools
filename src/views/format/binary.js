import PageCard from "../../components/Card/Card"
import "./format.scss"
import {Input, Radio, Table} from 'antd';
import {useState} from "react"
import {ChangeBirany} from "../../utils/changeBirany"

const {Search} = Input

const columns = [
    {title: '进制', dataIndex: 'title', key: 'title',},
    {title: '结果', dataIndex: 'result', key: 'result',},
];
const radioList = [
    {content: '二进制', value: 2},
    {content: '八进制', value: 8},
    {content: '十进制', value: 10},
    {content: '十六进制', value: 16},
    {content: '三十二进制', value: 32}
]

function Binary(props) {
    const title =props.location.query.title

    const [SHI, setSHI] = useState("") // 10
    const [BA, setBA] = useState("") // 8
    const [ER, setER] = useState("") // 2
    const [SANSHIER, setSANSHIER] = useState("") // 32
    const [SHILIU, setSHILIU] = useState("") // 16

    const [conversion, setConversion] = useState("")
    const [choose, setChoose] = useState(10)

    const dataSource = [
        {key: 2, title: '二进制', result: ER, set: a => setER(a)},
        {key: 8, title: '八进制', result: BA, set: a => setBA(a)},
        {key: 10, title: '十进制', result: SHI, set: a => setSHI(a)},
        {key: 16, title: '十六进制', result: SHILIU, set: a => setSHILIU(a)},
        {key: 32, title: '三十二进制', result: SANSHIER, set: a => setSANSHIER(a)}
    ];

    const startConversion = () => {
        for (let i of dataSource) {
            const num = ChangeBirany({old: choose, num: conversion, radix: i.key})
            i.set(!isNaN(num.result) ? num.result : '')
            console.log(i.result)
        }
    }

    const onSearch = () => {
        startConversion()
    };

    const onChange = (e) => {
        setChoose(e.target.value)
        startConversion()
    }

    const inputChange = (e) => {
        if (e.target.value === "") {
            setConversion('')
            startConversion()
        }
        setConversion(parseInt(e.target.value))
    }
    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div className="binary-content">
                <Radio.Group defaultValue={choose} onChange={onChange}>
                    {radioList.map(p => {
                        return <Radio.Button value={p.value} key={p.value}>{p.content}</Radio.Button>
                    })}
                </Radio.Group>
                <Search
                    onChange={(e) => inputChange(e)}
                    allowClear={true}
                    placeholder="输入数字"
                    enterButton="进制转换"
                    size="large"
                    onSearch={onSearch}
                    className="ninary-margin"
                />
                <Table className="ninary-margin" pagination={false} dataSource={dataSource} columns={columns}
                       size="small"/>
            </div>
        </PageCard>
    )
}

export default Binary
