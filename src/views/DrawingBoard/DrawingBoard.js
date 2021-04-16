import './draw.css'
import {Slider} from '../../components/Slider/Slider'
import {Draw} from '../../utils/draw'
import {downloadBase64Img} from '../../utils/download'
import React, {useRef, useState, useEffect} from 'react'
import PageCard from '../../components/Card/Card'
import useTitle from "../../utils/tool";


function Drawing(props) {
    console.log(props)
    let draw = ""
    const title = useTitle(props.match)
    const [SliderValue, setSlider] = useState(2)
    const ele = useRef(null)
    const sliderChange = (e) => {
        setSlider(e.target.value)
        draw.changeLine(SliderValue)
    }

    const download = () => {
        const img = document.getElementById('draw').toDataURL('image/png')
        downloadBase64Img.download('image', img)
    }
    useEffect(() => {
        draw = new Draw({element: 'draw', width: 908, height: 600})
        draw.init()
    }, [])

    return <PageCard
        back={() => {
            props.history.goBack()
        }}
        title={title}
    >
        <div className="draw-content">
            <canvas id="draw" ref={ele}/>
            <div className="operating-btn-list">
                <button onClick={() => download()}>下载</button>
                <button onClick={() => draw.checkPen()}>画笔</button>
                <button onClick={() => draw.cleaning()}>橡皮擦</button>
                <button onClick={() => draw.undo()}>撤销</button>
                <button onClick={() => draw.reset()}>重绘</button>
                <div className="range-set">
                    <Slider
                        change={(e) => {
                            sliderChange(e)
                        }}
                        max="12"
                        value={SliderValue}
                    />
                </div>
            </div>
        </div>
    </PageCard>
}

export default Drawing
