import Download from "../views/commonCode/download"

import DownloadIcon from "../assets/image/Download.svg"

export const commonCode = {
    title: "常用代码",
    children: [
        {
            path: '/Download',
            title: '常见下载方式',
            component: Download,
            icon: DownloadIcon
        }
    ]
}

