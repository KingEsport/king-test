import matchData from "../../data/matchData/matchData.json";
import {IMatch} from "@/api/models/match";

export default class MatchHandlers{
    public async getMatchData():Promise<Array<IMatch>>{
        return matchData as IMatch[];
    }
}