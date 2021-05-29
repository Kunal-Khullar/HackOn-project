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
  $name:Strign,
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
