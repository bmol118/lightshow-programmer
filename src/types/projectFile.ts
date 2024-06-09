declare module "ProjectFile" {
    export interface ProjectFile {
        projectName: string,
        // The background image the lightstrips are superimposed onto. TODO: Determine how this should actually be stored
        background: Uint32Array,
    
        lightStrips: LightStrip[]
    }
        export interface LightStrip {
        // Where is the lightstrip in the strand? the strands are daisy chained so this is necessary 
        priorLightStrip: LightStrip | null
        nextLightStrip: LightStrip | null

        lights: Light[],
        // distance in cm between each light in the strand. this is so we can extrapolate the total length of the strand.
        lightSpacing: number
        location: LightStripLocation
    }

    //
    export interface Light {
        red: number,
        green: number,
        blue: number
    }

    // Defines the location of a lightstrip, this effectively just a vector.
    // using a single point and an angle off that point to define it since the magnitude will be determined by a combination of the number of lights, and the spacing between the lights.
    export interface LightStripLocation {
        x1: number,
        y1: number,
        angle: number
    }
}





