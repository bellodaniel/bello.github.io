// src/components/Header.js
import React from "react";
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my app
        </p>
      </header>
  );
}