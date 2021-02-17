import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Riptear from '../audio/Rip_&_Tear.mp3'


export default class Music extends Component {

    render() {
        return (
            <div>
                <ReactAudioPlayer src={Riptear} volume={0.05} controls autoPlay={false}></ReactAudioPlayer>
            </div>
        )
    }
}