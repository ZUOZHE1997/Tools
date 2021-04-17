import {Card, Button} from 'antd'
import {withRouter} from 'react-router-dom'
import "./layout.css"
import {routers} from "../../router/all";

const gridStyle = {
    width: '20%',
    height: '80px',
}

// 1280×1024
function Module(props) {
    return <Card.Grid style={gridStyle} className="Home-center" onClick={() => {
        props.link()
    }}>
        <img className="Home-img" src={props.icon} alt={props.title}/>
        <Button type="text">{props.title}</Button>
    </Card.Grid>
}

function Home(props) {
    const link = (path, title) => {
        props.history.push(`${path}${title}`)
    }
    return (
        routers.map(k => {
            return <Card key={k.title}>
                {k.children.map(p => {
                    return <Module title={p.title} link={() => {
                        link(p.path, p.title)
                    }} icon={p.icon} key={p.path}/>
                })}
            </Card>
        })

    )
}

export default withRouter(Home)
