import {Card, Button} from 'antd'
import {withRouter} from 'react-router-dom'
import "./layout.css"
import {routers} from "../../router/all";

const gridStyle = {
    width: '20%',
    height: '80px',
}

function Home(props) {
    const link = (path, title) => {
        props.history.push(`${path}${title}`)
    }
    return (
        routers.map(k => {
            return <Card key={k.title} title={k.title} style={{marginBottom:"20px"}}>
                {k.children.map(p => {
                    return <Card.Grid className="Home-center" style={gridStyle} onClick={() => {
                        link(p.path, p.title)
                    }} key={p.title}>
                        <img className="Home-img" src={p.icon} alt={p.title}/>
                        <Button type="text">{p.title}</Button>
                    </Card.Grid>
                })}
            </Card>
        })
    )
}

export default withRouter(Home)
