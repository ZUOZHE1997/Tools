import PageCard from "../../components/Card/Card"
import "./image.scss"
import {Button, Input} from 'antd';
import {ArrowUpOutlined, CloseCircleOutlined, PlusOutlined} from '@ant-design/icons';
import {useState} from "react"

const {TextArea} = Input;

function Binary(props) {
    const title = props.match.params.title
    const [PreviewImg, setPreviewImg] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    const uploadImg = (e) => {
        const img = e.target.files[0] // 获取当前上传的文件列表
        const reader = new FileReader() // 读取文件
        reader.readAsDataURL(img)
        reader.onload = () => {
            console.log(reader.result) // 读取结果
            setPreviewImg(reader.result)
            setImgUrl(reader.result)
        }
    }
    const clearImg = () => {
        const du = document.getElementById("uploadImg")
        du.value = ""
        setPreviewImg("")
        setImgUrl("")
        showImg()
    }
    const showImg = () => {
        const view = <div>
            <img src={PreviewImg} alt=""/>
            <span className="close-img" onClick={() => {
                clearImg()
            }}><CloseCircleOutlined/>  </span>
        </div>
        return PreviewImg ? view : <PlusOutlined style={{fontSize: '100px', color: '#bdc3c7'}}/>
    }
    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title}>
            <div className="upload-content">
                <div className="preview">
                    {showImg()}
                </div>
                <div className="upload-btn">
                    <input onChange={event => uploadImg(event)} type="file" className="input-file" id="uploadImg"/>
                    <Button type="dashed" block>
                        <label htmlFor="uploadImg">
                            <ArrowUpOutlined/>
                            点击上传图片</label>
                    </Button>
                </div>
            </div>
            <div className='show-code'>
                <TextArea value={imgUrl} autoSize={{minRows: 10, maxRows: 10}}></TextArea>
            </div>
        </PageCard>
    )
}

export default Binary
