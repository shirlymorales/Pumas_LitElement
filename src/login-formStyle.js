import { css } from "lit-element"
export default css`

body{
    font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif;   
    background-repeat: no-repeat;
    background-size: cover;
    font-size: cover;
    background-attachment: fixed;
    font-size: 23px;
}
.form-login{
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 93vh;
    padding: 10px;
    
}

.title-login{
    text-align: center;
    font-weight: bold;
    font-size: 40px;
}

.space-title{
    color: white ;
    background-color: #ff0e0e;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 0.2px; 
}

.input-login{
    border-left: none;
    border-right: none;
    border-top:  none;
    border-bottom:#ff0e0e solid 1px;
    font-size: 40px;
    margin: 0.8em;
    width: 70%;
    margin-top: 60px;
    outline: none   ;
}

.button-login{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    font-weight: bold;
    background-color: #ff0e0e;
    border: none;
    border-radius: 15px;
    width: 10em;
    padding: 2%;
    margin-top: 0.1em;
    margin-bottom: 1em;
}

.a-button{
    color: white;
    text-decoration: none;
}

.button-login:hover{
    cursor: pointer;
}

.forgot-pass{
    color: black;
    margin-bottom: 4em;
    padding: 3%;
}

.forgot-pass:hover{
    text-decoration: underline;
}

.login{
    position: relative;
    right: auto;
    top: auto;
    width: 859px;
    height: 545px;
    border-radius:  20px;
    background-color: rgb(255, 255, 255);
    box-shadow: 5px 5px 9px -6px black
}

.center{
    display: flex;
    justify-content: center;
}`