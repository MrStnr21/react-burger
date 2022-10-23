import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header";

export default class App extends React.Component {
    render() {
        return (
            <main className='App'>
                <AppHeader/>
            </main>
        )
    }
}