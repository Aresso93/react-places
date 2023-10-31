import { ReactNode } from "react";
import { PlaceModel } from "../model/place";

export interface ListProps{
    children,
    places: object[],
    imageSize: number;
}

export function List(props:ListProps){

    return (

        <ul> 
        {props.places.map(place =>
            
            <li>
              <span>{place}</span> 
            </li>)}
    
        </ul> 
            
    )

  
    }