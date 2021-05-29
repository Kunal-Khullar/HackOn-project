import { gql } from "@apollo/client";
export const CREATE_USER = gql`
mutation CreateUser($email:String!,$name:String!){
    createUser(email:$email,name:$name){
      user{
        id
        name
      }
    }
  }
`;

export const ADD_MEAL = gql`
mutation AddMeal(
  $Calcium:Float,
  $Iron:Float,
  $Magnesium:Float,
  $Phosphorus:Float,
  $Potassium:Float,
  $Sodium:Float,
  $Zinc:Float,
  $carbs:Float,
  $email:String,
  $fats:Float,
  $name:String,
  $omega3:Float,
  $proteins:Float,
  $vitA:Float,
  $vitC:Float,
  $vitD:Float,
  $vitE:Float,
  ){
    addMeal(
      Calcium:$Calcium,
      Iron:$Iron,
      Magnesium:$Magnesium,
      Phosphorus:$Phosphorus,
      Potassium:$Potassium,
      Sodium:$Sodium,
      Zinc:$Zinc,
      carbs:$carbs,
      email:$email,
      fats:$fats,
      name:$name,
      omega3:$omega3,
      proteins:$proteins,
      vitA:$vitA,
      vitC:$vitC,
      vitD:$vitD,
      vitE:$vitE
      ){
    meal{
      date
    }
    }
  }
`;
export const ADD_WATER = gql`
mutation addWater(
  $email:String,
  $glass:Int
){
  addWater(
    email:$email,
  	glass:$glass
  ){
    water{
      quantitylitre
    }
  
  }
}
`
export const ADD_SLEEP = gql`
mutation addSleep(
  $email:String,
  $sleephours:Int
){
  addSleep(
    email:$email,
  	sleephours:$sleephours
  ){
    newsleep{
      sleephours
    }
  
  }
}
`
export const ADD_CH = gql`
mutation addCh(
  $email:String,
  $cholestrollevel:Float
){
  addCh(
    email:$email,
  	cholestrollevel:$cholestrollevel
  ){
    newch{
      cholestrollevel
    }
  
  }
}
`
export const ADD_SPO2 = gql`
mutation addSPO2(
  $email:String,
  $level:Int
){
  addSpo2(
    email:$email,
  	level:$level
  ){
    newlevel{
      level
    }
  }
}
`
export const GET_ME = gql`
query getMe(
  $email:String!
){
  getMe(email:$email){
    name
  }
}
`
export const GET_MEAL = gql`
query mealData(
  $email:String!
){
  getUserMealData(email:$email){
    mealName
  }
}
`
export const GET_WATER = gql`
query getWater(
  $email:String!
){
  getUserWaterData(email:$email){
    quantitylitre
  }
}
`
export const GET_BP = gql`
query getBPData(
  $email:String!
){
  getUserBPData(email:$email){
    systolic,
    diastolic
  }
}
`
export const GET_SLEEP = gql`
query getSleep(
  $email:String!
){
  getUserSleepData(email:$email){
    sleephours
  }
}
`
export const GET_CH = gql`
query getCh(
  $email:String!
){
  getUserChData(email:$email){
    cholestrollevel
      
    
  }
}
`
export const GET_SPO = gql`
query getSpo2(
  $email:String!
){
  getUserSPO2Data(email:$email){
    level
  }
}
`