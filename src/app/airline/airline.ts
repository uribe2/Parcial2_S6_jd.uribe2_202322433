import { Flight } from "./flight";

export class Airline {
    id: string;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;
    flights: Flight[];

    constructor(
        id: string,
        airlineName: string,
        country: string,
        city: string,
        address: string,
        identityColor: string,
        slogan: string,
        flights: Flight[]
    ) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.address = address;
        this.identityColor = identityColor;
        this.slogan = slogan;
        this.flights = flights;
    }
}