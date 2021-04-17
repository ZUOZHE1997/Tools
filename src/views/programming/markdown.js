import PageCard from "../../components/Card/Card"
import "../other/format.scss"
// import {useState} from "react";
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css';
import useTitle from "../../utils/tool";

// const marked = require("marked");
// const html = marked('# Marked in Node.js\n\nRendered by **marked**.');


function MarkDown(props) {
    console.log(props)
    const title = useTitle(props.match)
    let mdParser = new MarkdownIt();

    // const [content, setContent] = useState("")

    const handleEditorChange = ({html, text}) => {
        // setContent(html)
        console.log(html, text)
    }
    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div>
                {/*<Button type="text" >导出 PDF </Button>*/}
                {/*<Button type="text" onClick={()=>{downloadFile(content)}}>导出 HTML </Button>*/}
                {/*<Button type="text">下载</Button>*/}
            </div>
            <MdEditor
                style={{height: "700px"}}
                renderHTML={(text) => mdParser.render(text)}
                onChange={handleEditorChange}
            />
        </PageCard>
    )
}

export default MarkDown
