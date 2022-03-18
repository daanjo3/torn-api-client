import type { IUserData } from "./IUserData";

export interface IDefault extends IUserData {
    rank:        string,
    level:       number,
    gender:      string
    property:    string;
    signup:      Date;
    awards:      number;
    friends:     number;
    enemies:     number;
    forum_posts: number;
    karma:       number;
    age:         number;
    role:        string;
    donator:     number;
    player_id:   number;
    name:        string;
    property_id: number;
    competition: null;
    life:        Life;
    status:      Status;
    job:         Job;
    faction:     Faction;
    married:     Married;
    basicicons:  BasicIcons;
    states:      States;
    last_action: LastAction;
}

export interface BasicIcons {
    icon6:  string;
    icon4:  string;
    icon8:  string;
    icon27: string;
    icon9:  string;
}

export interface Faction {
    position:        string;
    faction_id:      number;
    days_in_faction: number;
    faction_name:    string;
    faction_tag:     string;
}

export interface Job {
    position:     string;
    company_id:   number;
    company_name: string;
    company_type: number;
}

export interface LastAction {
    status:    string;
    timestamp: number;
    relative:  string;
}

export interface Life {
    current:   number;
    maximum:   number;
    increment: number;
    interval:  number;
    ticktime:  number;
    fulltime:  number;
}

export interface Married {
    spouse_id:   number;
    spouse_name: string;
    duration:    number;
}

export interface States {
    hospital_timestamp: number;
    jail_timestamp:     number;
}

export interface Status {
    description: string;
    details:     string;
    state:       string;
    color:       string;
    until:       number;
}