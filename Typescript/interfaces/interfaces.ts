interface IInfo {
    desc: string,
    isActive: boolean
}

interface ITag {
    name: string,
    value: number
}

interface IUser {
    userId: number,
    id: number,
    title: string,
    info: IInfo,
    tags: ITag[]
}