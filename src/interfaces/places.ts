// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    place_name_es: string;
    text:          string;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
    language_es?:  string;
    language?:     string;
}

export interface Context {
    id:           string;
    text_es:      string;
    text:         string;
    wikidata?:    Wikidata;
    language_es?: Language;
    language?:    Language;
    short_code?:  ShortCode;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    MX = "mx",
    MXCam = "MX-CAM",
}

export enum Wikidata {
    Q61301 = "Q61301",
    Q80908 = "Q80908",
    Q96 = "Q96",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare: string;
    landmark:   boolean;
    address?:   string;
    category:   string;
}