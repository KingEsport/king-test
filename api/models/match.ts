export interface IMatch {
    id: number;
    roundN:number;
    matchN: number;
    teamA: string;
    teamB: string;
    teamAImgUrl: string;
    teamBImgUrl: string;
    score: string | undefined;
    date:string;
    teamAPlayers: IMatchPlayer[];
    teamBPlayers: IMatchPlayer[];
    gameLogoUrl: string;
    gameBannerUrl: string;
}

export interface IMatchPlayer{
    id: number;
    username: string;
    playerTag:string;
}