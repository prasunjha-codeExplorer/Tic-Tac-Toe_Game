body{
    background-color: #548547;
}
h1{
    font-weight: bolder;
    color: aqua;
    font-family: cursive;
    text-align: center;
}
.container{
    height: 70vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.bigBox{
    height: 60vmin;
    width: 60vmin;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1.5vmin;
}
.box{
    height: 18vmin;
    width: 18vmin;
    border-radius: 1rem;
    border: none;
    font-size: 8vmin;
    color: blue;
}
.box:hover{
    cursor:pointer;
    background: yellow;
}
#strtAgain{
    height: 10vmin;
    width: 20vmin;
    border-radius: 1rem;
    border: none;
    background-color: purple;
    color: black;
    margin-left: 50%;
    font-weight: bolder;
}
.display_msg{
    color: black;
    font-size: 0px;
    margin-left: 50%;
    text-decoration: #548547;
}
#strtAgain:hover{
    background: #080808;
    cursor: pointer;
    color: wheat;
}

@media only screen and (max-width: 600px){
    h1{
    font-size: 20px;
    font-family: 'Times New Roman', Times, serif;
    }
    #strtAgain{
        font-size: 10px;
        margin-left: 30%;
        font-weight: lighter;
    }
}
