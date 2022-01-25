import { atom } from 'recoil'

const deviceUuid = atom({
    key: 'deviceUuid',
    default : "device"
})

const authToken = atom({
    key: 'authToken',
    default : ""
})

export {deviceUuid , authToken}