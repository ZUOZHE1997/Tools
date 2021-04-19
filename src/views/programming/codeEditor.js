import PageCard from "../../components/Card/Card"
import useTitle from "../../utils/tool"
import Editor from "@monaco-editor/react";
import {useState} from "react";
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import "./index.scss"

function Lang(props) {
    const [defaultLang, setDefaultLang] = useState("javascript")
    const langList = ["JavaScript", "html", "json", "CSS", "TypeScript", "PHP", "C++", "Java", "Python"]
    const menu = <Menu>
        {langList.map(p => {
            return <Menu.Item key={p} onClick={() => {
                setDefaultLang(p)
                props.setLang(p)
            }}>{p}</Menu.Item>
        })}
    </Menu>
    return (
        <Dropdown overlay={menu} className="language-dropdown">
            <a>{defaultLang}<DownOutlined/></a>
        </Dropdown>
    )
}

function CodeEditor(props) {
    const [language, setLanguage] = useState("javascript")
    const setLang = (e) => {
        setLanguage(e)
    }
    return <PageCard title={useTitle(props.match)} back={() => {
        props.history.goBack()
    }}>
        <Lang setLang={setLang}  />
        <Editor height="70vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                languag={language}
                defaultValue="// some comment"/>
    </PageCard>
}

export default CodeEditor
