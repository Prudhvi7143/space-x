import React from "react";
import { Launch } from "../Launch/Launch";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";

export class LaunchList extends React.Component {

    state = {
        launches : []
    }
    componentDidMount =() => {
        this.getLaunches()
    }

    getLaunches = () => {
        axios.get('https://api.spacexdata.com/v3/launches').then((response) => {
            this.setState(
                { launches: response.data}
            )
        }).catch((error) => {
            console.log('error')
        })
    }

    launchlist = () => {
        const launchlistComponents = this.state.launches.map((launch,index) => {
            const image = launch.links.flickr_images.length === 0 ?
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspY_ZuRfOOUv5w04BjNUE9xqGXbNfr12MKA&usqp=CAU' : launch.links.flickr_images[0];
            console.log(launch.links.flickr_images[0])
            return (
                <Link key = {"launch_"+index} to = {"/launch/"+launch.flight_number}>
                    <Launch 
                        banner = {image}
                        title = {launch.mission_name}
                        LaunchDate = {launch.launch_date_local}
                        discription = {launch.details}
                    />
                </Link>
            )
        })
        return launchlistComponents;
    } 
    render() {
        console.log(this.state.launches)
        return(
            <div className = "LaunchList">
                {this.launchlist()}
            </div>
        )
    }
}