import PageCard from "../../components/Card/Card"
import "./index.scss"
import {Menu, Button, Collapse} from 'antd';

import {useState} from "react"
import useTitle from "../../utils/tool";
import downloadImg from "../../assets/other/download.jpg"
import downloadPdf from "../../assets/other/download.pdf"
import downloadExcel from "../../assets/other/download.xlsx"
import {downloadFile} from "../../utils/download";
import {downloadTxt} from "./download.txt"

const {Panel} = Collapse;

function img() {
    return (
        <>
            <div className="download-img">
                <img src={downloadImg} alt=""/>
            </div>
            <Button onClick={() => {
                downloadFile(downloadImg)
            }}>点击下载</Button>
        </>
    )
}

function pdf() {
    return (
        <Button onClick={() => {
            downloadFile(downloadPdf)
        }}>点击下载pdf</Button>
    )
}

function excel() {
    return (
        <Button onClick={() => {
            downloadFile(downloadExcel)
        }}>点击下载excel</Button>
    )
}

function Download(props) {
    const title = useTitle(props.match)
    const [current, setCurrent] = useState("img")

    const handleClick = e => {
        setCurrent(e.key)
    }
    const judge = () => {
        if (current === "img") return img()
        if (current === "pdf") return pdf()
        if (current === "excel") return excel()
    }

    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div className="download-content">
                <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
                    <Menu.Item style={{margin: "0 20px 0 0 "}} key="img">图片下载</Menu.Item>
                    <Menu.Item key="pdf">PDF 下载</Menu.Item>
                    <Menu.Item key="excel">EXCEL 下载</Menu.Item>
                </Menu>
                <div className="judge-content">
                    {judge()}
                </div>
                <Collapse style={{marginTop: "20px"}}>
                    <Panel header="显示代码" key="1">
                       <pre>
                    <code className='language-javascript' lang='javascript'>
                    {downloadTxt}
                    </code>
                </pre>
                    </Panel>

                </Collapse>,

            </div>
        </PageCard>
    )
}

export default Download
