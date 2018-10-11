export interface getGuideSonListEntity {
    id: string
}

export interface guideSonList{
    Name?: string,
    SubList?: guideSonListAyyay[]
}

export interface guideSonListAyyay {
    GuideSonId: string,
    SonIndex: number,
    Title: string,
}