import {Card} from 'antd'
import {Button} from 'antd';
import {withRouter} from 'react-router-dom'
import "./layout.css"
import json from "../../assets/image/json.svg"

const gridStyle = {
    width: '20  %',
    height: '120px',
}

function Module(props) {
    return <Card.Grid style={gridStyle} className="Home-center" onClick={() => {
        props.link()
    }}>
        <img className="Home-img" src={props.icon} alt={props.title}/>
        <Button ghost={true} type="text">{props.title}</Button>
    </Card.Grid>
}

function Home(props) {
    const link = (path) => {
        props.history.push(path)
    }
    return (
        <Card title="格式化">
            <Module title="JSON 格式化" link={() => {
                link('/format/json')
            }} icon={json}/>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
    )
}

export default withRouter(Home)
