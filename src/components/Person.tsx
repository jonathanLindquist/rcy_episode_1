import { useState } from "react";

interface Props {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
  friends: Array<string>;
  country?: Country;
}

export enum Country {
  USA = "United States",
  MX = "Mexico",
  CO = "Colombia",
}

export const Person = (props: Props) => {
  const [name, setName] = useState<string>("Jonathan");

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person {props.isMarried ? "is" : "is not"} married</h1>
      {props.friends.map((friend) => (
        <h1>{friend}</h1>
      ))}

      {props.country && <h2>Country {props.country}</h2>}
    </div>
  );
};
