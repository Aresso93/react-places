import { ReactNode } from "react"
import { PlaceModel } from "../model/place";

export interface PlaceProps{
    children: ReactNode;
    place: PlaceModel;
    imageSize: number;
}

export function Place(props:PlaceProps){
    return (
        <>
            <div className="place-card">
                {/* <img src={props.place.imageId}/> */}
                <span>{props.place.name}</span>
                <span>{props.place.description}</span>
            </div>
        </>
    )
}