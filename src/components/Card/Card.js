import {Card} from 'antd'
import {Button} from 'antd';
import {LeftOutlined} from '@ant-design/icons';

function PageCard(props) {
    const backBtn = <div>
        <Button type="text" ghost={true}
                icon={<LeftOutlined/>} onClick={() => {
            props.back()
        }}>返回</Button>
        <span>{props.title}</span>
    </div>

    return (
        <Card title={backBtn} style={{width: '100%', marginTop: 0}} className="Card-content">
            {props.children}
        </Card>
    )
}

export default PageCard
