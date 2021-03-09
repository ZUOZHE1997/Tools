import PageCard from "../../components/Card/Card"
import "./image.scss"
import {Button} from 'antd';
import {downloadFile} from "../../utils/download";
import domtoimage from 'dom-to-image';

function YouTubeImage(props) {
    console.log(props)
    const title = props.match.params.title

    console.log(props)
    const download = () => {
        const content = document.getElementById('image')

        domtoimage.toPng(content)
            .then(function (dataUrl) {
                downloadFile(dataUrl)
                // var img = new Image();
                // img.src = dataUrl;
                // document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    return (
        <PageCard back={() => {
            props.history.goBack()
        }} title={title} >
            <div className="youtube-content">
                <div className="youtube-content-center" id="image">
                    <div className="youtube-content-left" suppressContentEditableWarning={true}
                         contentEditable={true}>You
                    </div>
                    <div className="youtube-content-right" suppressContentEditableWarning={true}
                         contentEditable={true}>Tube
                    </div>
                </div>
            </div>
            <Button onClick={() => {
                download()
            }} className="youtube-content-download-btn" type="primary">下载</Button>
        </PageCard>
    )
}

export default YouTubeImage
