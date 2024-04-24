import { asteroid } from "./asteroid"

export interface asteroid_response_body {
    near_earth_objects:{
        [key:string]: asteroid[],
    }    
}