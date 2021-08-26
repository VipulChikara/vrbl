import React, { useState, useRef, useEffect } from 'react';
import './audio.scss';
import $ from 'jquery';
import axios from 'axios';
import song from './../../assets/song.mp3';

function Audio(props) {

    const [isPlaying, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const progressBar = useRef();
    const audioPlayer = useRef();
    const animationRef = useRef();

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        axios.get('http://localhost:8080/api/headphone/0').then(data=>{
            console.log(data)
            props.count(data.data.headphoneCount)
        })
        progressBar.current.max = seconds;
        $(".audioPlayer audio").bind('ended', function(){
            setPlaying(!isPlaying)
        });
    }, [audioPlayer && audioPlayer.current && audioPlayer.current.loadedmetadata, audioPlayer && audioPlayer.current && audioPlayer.current.readyState])

    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying
        setPlaying(!prevValue)
        if (!prevValue) {
            audioPlayer.current.play();
            axios.get('http://localhost:8080/api/headphone/1').then(data=>{
            console.log(data)
            props.count(data.data.headphoneCount)
            })
            
            animationRef.current = requestAnimationFrame(whilePlaying)
        } else {
          audioPlayer.current.pause();
          cancelAnimationFrame(animationRef.current);
          axios.get('http://localhost:8080/api/headphone/-1').then(data=>{
            console.log(data)
            props.count(data.data.headphoneCount)
          })
        }
    }

    // useEffect(()=>{
    //     // console.log(isPlaying)
    //     localStorage.setItem('isPlaying',isPlaying)
    // },[isPlaying])

    // useEffect(()=>{
    //         return ()=>{
    //             localStorage.setItem('isPlaying',false)                
    //             if(Boolean(localStorage.getItem('isPlaying'))){
    //                 axios.get('http://localhost:8080/api/headphone/-1').then(data=>{
    //                     console.log(data)
    //                     props.count(data.data.headphoneCount)
    //                 }) 
    //             }
    //         }
    // },[])


    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changePlayerCurrentTime();
        animationRef.current = requestAnimationFrame(whilePlaying);
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changePlayerCurrentTime();
    }

    const changePlayerCurrentTime = () => {
        progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
        setCurrentTime(progressBar.current.value);
    }

    const backThirty = () => {
        // console.log(progressBar.current.value)
        // progressBar.current.value = Number(progressBar.current.value - 30);
        // console.log(progressBar.current.value)
        // changeRange();
    }

    const forwardThirty = () => {
        // console.log(progressBar.current.value)
        // progressBar.current.value = Number(progressBar.current.value)+30;
        // console.log(progressBar.current.value)
        // changeRange();
    }

    return (
        <div className="audioPlayer">
            <audio ref={audioPlayer} src={song}></audio>

            <div className="progressBar" style={{display:'none'}}>
                <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange}></input>
                <div className="durations"><span>{(duration && !isNaN(duration)) && calculateTime(duration - currentTime)?calculateTime(duration - currentTime):"00:00"}</span></div>
            </div>

            <div className="controls">
                <button onClick={()=>backThirty()}><i class="fas fa-fast-backward fa-2x"></i></button>
                <button onClick={()=>togglePlayPause()}>{isPlaying ? <i class="fas fa-pause fa-2x"></i> : <i class="fas fa-play fa-2x"></i>}</button>
                <button onClick={()=>forwardThirty()}><i class="fas fa-fast-forward fa-2x"></i></button>
                <div className="circle-progress">
                <div className="progressBar">
                <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange}></input>
                 </div>
                </div>
                <div className="duration"><span>{(duration && !isNaN(duration)) && calculateTime(duration - currentTime)?calculateTime(duration - currentTime):"00:00"}</span></div>                
            </div>


        </div>
    )
}

export default Audio;