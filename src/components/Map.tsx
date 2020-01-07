import * as React from 'react';

export interface MapProps {
    location: [number, number] // A tuple
    zoom: number
}

interface MapState {
    theme: "day" | "night"
    location?: [number, number]
    zoom?: number
}

export class Map extends React.Component<MapProps, MapState> {
    static defaultProps: MapProps = {
        location: [15, 18],
        zoom: 0
    }

    constructor(props: MapProps) {
        super(props);
    }

    render() {
        return <h1>Should render a map centred at {this.props.location}</h1>
    }
}
