import { css } from "lit-element"
export default css`body { 
  margin: 0; 
  font-family: Arial, Helvetica, sans-serif; 
} 

.gray-box {
  background-color: #ccc;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 15px;
  max-width: 270px;
}


header { 
  background-color: red; 
  display: flex; 
  align-items: center; 
  padding: 20px; 
  width: 25%; 
  border-bottom-right-radius: 60px; 
} 
.xd{ 
  background-color: aliceblue; 
  padding: 1px; 
  width: 88%; 
  border-bottom-right-radius: 24px; 
  border-top-left-radius: 10%; 
  border-bottom-left-radius: 10%; 

} 

.logo { 
  height: 60px; 
  display: flex; 
  justify-content: center;    
  margin-right: 10px; 
  border-radius: 200%; 
} 

.logo img{ 
  margin-top: -10px; 
  margin-left: -10px; 
  height: 80px; 

border-radius: 100%; 


} 

.gray-box {
  background-color: #ccc;
  padding: 10px;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 15px;
  max-width: 270px;
}

.list {
  list-style-type:none;
  padding: 0;
}

.list li {
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  color: rgb(79, 81, 83);
  font-weight: bold;
}


.list img {
  height: 15px;
  margin-right: 10px; 
}




h1 { 
  margin: 0; 
} 

.menu { 
 
  flex: 0.5; 
  display: flex; 
  flex-direction: column; 
  padding: 64px; 
  background-color: rgba(167, 157, 157, 0.645); 
  border-radius: 20px; 
  align-items: center; 
  margin-bottom: auto; 
   
} 

.menu button { 
  width: 130%; 
  height: 105%;
  background-color: aliceblue; 
  border: none; 
  padding:10px; 
  border-radius: 5px; 
  margin-bottom: 65px; 
  
   
} 

.modules { 
  flex: 4; 
  display: grid; 
  grid-template-columns: repeat(3, 2fr); 
  gap: 20px; 
  justify-content: space-around; 
  align-items: center; 
  justify-items: center; 
} 

.module { 
  width: 6
  1%; 
  height: 95%; 
  text-align: center; 
  border: 1px solid black; 
  border-radius: 17px; 
  padding: 10px; 
} 

.module h2 { 
  margin-top: 0; 
  align-items: center; 
} 

.module img { 
  max-width:50%; 
  height: auto; 
  margin-bottom: 10px; 
} 

.module-content { 
  display: flex; 
  flex-direction: column; 
  align-items: center; 
} 

button { 
  background-color: red; 
  border-radius: 20px; 
  margin: 8px;

} 

.a { 
  color: aliceblue; 
  font-size: 35px;
  margin: 6px;
  text-decoration: none;
  font-family: inherit;
}

.img-cuadricula{
  max-width: 100px;
  max-height: 150px;
  margin: 15px;
}`