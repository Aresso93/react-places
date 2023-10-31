import { PlaceModel } from "../model/place";

export interface PlaceImageProps{
    place: PlaceModel
    imageSize: number
}

export function PlaceImage(props:PlaceImageProps) {
    return (
      <img
        src={props.place.imageId}
        width={props.imageSize}
        height={props.imageSize}
      />
    );
  }
  