import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';



import colourPic from './images/colours.jpg';
import mePic from './images/me.jpg';
import website from './images/website.png';
import dev from './images/code.png';
import cloud from './images/cloud.png';
import maaikeImg from './images/maaike.png';
import christmasImg from './images/christmas.png';
import connectImg from './images/connect.png';





const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78d3435c94mshd965d6a5ca8145dp1a82cfjsn992ecf39340f',
		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
	}
};
 
fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', options)
.then(response => response.json())
.then(response => document.getElementById("factsText").innerHTML = response.number + " is "+ response.text + "!")
.catch(err => console.error(err));



fetch('https://repo-service.onrender.com/db') 
  .then(result => result.json())
  .then(data => 
    {if(data.length>0){
      document.getElementById("view1").innerHTML = `<a href='${data[0].project_link}' style = 'text-decoration: none;  color: #A0056D;' target='_blank'>View project</a>`;
   }
   if(data.length>1){
      document.getElementById("view2").innerHTML = `<a href='${data[1].project_link}'  style = 'text-decoration: none;  color: #A0056D;' target='_blank'>View project</a>`;
   }
   if(data.length>2){
      document.getElementById("view3").innerHTML = `<a href='${data[2].project_link}'  style = 'text-decoration: none;  color: #A0056D;' target='_blank'>View project</a>`;
   }
   
  })
  .catch(error => console.error(error));



const el = document.getElementById('text');
const imgColour = document.getElementById('colour-pic');
const imgMe = document.getElementById('me-pic');
const imgWebsite = document.getElementById('design');
const imgDev = document.getElementById('dev');
const imgCloud = document.getElementById('app');
const imgConnect =  document.getElementById('projectImg1');
const imgMaaike = document.getElementById('projectImg2');
const imgChristmas = document.getElementById('projectImg3');




const text = ReactDOM.createRoot(el);
const introImg = ReactDOM.createRoot(imgColour);
const descPic = ReactDOM.createRoot(imgMe);
const designPic = ReactDOM.createRoot(imgWebsite);
const devPic = ReactDOM.createRoot(imgDev);
const cloudPic = ReactDOM.createRoot(imgCloud);
const connectPic = ReactDOM.createRoot(imgConnect);
const maaikePic = ReactDOM.createRoot(imgMaaike);
const christmasPic = ReactDOM.createRoot(imgChristmas);




function FirstImage(){
  const colourPicStyle = {
    marginTop: "-5vh",
    borderRadius: "20px",
    height: "50vh",
    width: "40vw"
  }
  return <img  style={colourPicStyle} src={colourPic} alt=""/>;
}

function MePicture(){
  const mePicStyle = {
  borderRadius: "20px",
  marginTop: "10vh",
  height: "40vh",
  width: "30vw"
  }
  return <img  style={mePicStyle} src={mePic} alt=""/>;
}

function DesignPicture(){
  const designPicStyle = {
    height: "12vh",
    width: "5vw"
  }

  return <img style={designPicStyle}  src={website} alt=""/>;
}

function DevPicture(){
  const designPicStyle = {
    height: "12vh",
    width: "5vw"
  }

  return <img style={designPicStyle}  src={dev} alt=""/>;
}

function CloudPicture(){
  const cloudPicStyle = {
    height: "12vh",
    width: "5vw"
  }
  return <img style={cloudPicStyle}  src={cloud} alt=""/>;
}

function TextDescription(){
   
    return  <p id="descText">
    Hi, I am Alexandra! Welcome to my digital portfolio resume, where you will find all the information about me, as a professional, as well as the most important projects I have worked on.
    <p></p>
     I am currently a student at Fontys University of Applied Sciencies in Eindhoven. My major is ICT and Media, and my specialisation will be Cyber Security.
    <p></p>
    
    <p></p>
    I am open to collaborations, so if you're interested in working with me, don't hesitate to contact me!
    </p>;

}

function ConnectImg(){
  const maaikeStyle = {
    height: "30vh",
    width: "15vw",
    borderRadius: "100%",
    border: "2px",
    borderColor: "#F90890"
  }
  return <img   style={maaikeStyle} src={connectImg} alt=""/>;
}

function MaaikeImg(){
  const maaikeStyle = {
    height: "30vh",
    width: "15vw",
    borderRadius: "100%",
    border: "2px",
    borderColor: "#F90890"
  }
  return <img   style={maaikeStyle} src={maaikeImg} alt=""/>;
}

function ChristmasImg(){
  const maaikeStyle = {
    height: "30vh",
    width: "15vw",
    borderRadius: "100%",
    border: "2px",
    borderColor: "#F90890"
  }
  return <img   style={maaikeStyle} src={christmasImg} alt=""/>;

}

introImg.render(<FirstImage/>);
descPic.render(<MePicture/>);
designPic.render(<DesignPicture/>);
text.render(<TextDescription/>);
devPic.render(<DevPicture/>);
cloudPic.render(<CloudPicture/>);
connectPic.render(<ConnectImg/>)
maaikePic.render(<MaaikeImg/>);
christmasPic.render(<ChristmasImg/>)


