import React, { useState } from "react";

const form = props => {
  <form>
    <label htmlFor="name"> Name:</label>
    <input type="text" name="name" placeholder="Put Name here!"></input>
    <label htmlFor="email">Email:</label>
    <input type="text" name="email" placeholder="Put Email Here"></input>
    <label htmlFor="role"> Role:</label>
    <input type="text" name="role" placeholder="Put Role Here"></input>
    <button type="submit">Create Card</button>
  </form>;
};
